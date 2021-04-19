import sequelize from "../../config/sequelize";
import { PostLike } from "../postlike/model";
import { IPostInputDTO } from "./interface";
import { Post } from "./model";

export class PostService {
    async createPost(postInputDTO: IPostInputDTO, userId: number): Promise<number> {
        const t = await sequelize.transaction();
        try {
            const createdPost = await Post.create({ userId, ...postInputDTO }, { transaction: t });
            await t.commit();
            return createdPost.id;
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async deletePost(userId: number, postId: number): Promise<void> {
        const t = await sequelize.transaction();
        try {
            await Post.destroy({ where: { userId, id: postId }, transaction: t });
            await t.commit();
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async updatePost(userId: number, postId: number, caption: string): Promise<void> {
        const t = await sequelize.transaction();

        try {
            const post = await Post.findOne({ where: { id: postId, userId }, transaction: t });
            post!.caption = caption;
            await t.commit();
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async getRandomPost() {
        try {
            const postList = await Post.findAndCountAll();
            const random: number = Math.floor(Math.random() * postList.count);
            const post = postList.rows[random];
            const likeCount = await PostLike.count({ where: { postId: post.id } });
            return { post, likeCount };
        } catch (err) {
            throw err;
        }
    }

    async like(postId: number, userId: number) {
        const post = await Post.findOne({ where: { postId } });

        if (!post!.id || (await this.isLiked(postId, userId))) return;

        const t = await sequelize.transaction();

        try {
            await PostLike.create({ postId, userId });
            await t.commit;
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async unlike(postId: number, userId: number) {
        const t = await sequelize.transaction();

        try {
            await PostLike.destroy({ where: { userId, postId } });
            await t.commit();
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async isLiked(postId: number, userId: number) {
        const user = await PostLike.count({ where: { postId, userId } });
        return !!user;
    }
}
