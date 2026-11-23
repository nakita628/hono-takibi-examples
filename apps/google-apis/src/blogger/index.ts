import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3BlogsBlogIdPagesPageIdRoute,
  deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
  deleteV3BlogsBlogIdPostsPostIdRoute,
  getV3BlogsBlogIdCommentsRoute,
  getV3BlogsBlogIdPagesPageIdRoute,
  getV3BlogsBlogIdPagesRoute,
  getV3BlogsBlogIdPageviewsRoute,
  getV3BlogsBlogIdPostsBypathRoute,
  getV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
  getV3BlogsBlogIdPostsPostIdCommentsRoute,
  getV3BlogsBlogIdPostsPostIdRoute,
  getV3BlogsBlogIdPostsRoute,
  getV3BlogsBlogIdPostsSearchRoute,
  getV3BlogsBlogIdRoute,
  getV3BlogsByurlRoute,
  getV3UsersUserIdBlogsBlogIdPostsPostIdRoute,
  getV3UsersUserIdBlogsBlogIdPostsRoute,
  getV3UsersUserIdBlogsBlogIdRoute,
  getV3UsersUserIdBlogsRoute,
  getV3UsersUserIdRoute,
  patchV3BlogsBlogIdPagesPageIdRoute,
  patchV3BlogsBlogIdPostsPostIdRoute,
  postV3BlogsBlogIdPagesPageIdPublishRoute,
  postV3BlogsBlogIdPagesPageIdRevertRoute,
  postV3BlogsBlogIdPagesRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRoute,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRoute,
  postV3BlogsBlogIdPostsPostIdPublishRoute,
  postV3BlogsBlogIdPostsPostIdRevertRoute,
  postV3BlogsBlogIdPostsRoute,
  putV3BlogsBlogIdPagesPageIdRoute,
  putV3BlogsBlogIdPostsPostIdRoute,
} from './routes'
import {
  deleteV3BlogsBlogIdPagesPageIdRouteHandler,
  deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRouteHandler,
  deleteV3BlogsBlogIdPostsPostIdRouteHandler,
  getV3BlogsBlogIdCommentsRouteHandler,
  getV3BlogsBlogIdPagesPageIdRouteHandler,
  getV3BlogsBlogIdPagesRouteHandler,
  getV3BlogsBlogIdPageviewsRouteHandler,
  getV3BlogsBlogIdPostsBypathRouteHandler,
  getV3BlogsBlogIdPostsPostIdCommentsCommentIdRouteHandler,
  getV3BlogsBlogIdPostsPostIdCommentsRouteHandler,
  getV3BlogsBlogIdPostsPostIdRouteHandler,
  getV3BlogsBlogIdPostsRouteHandler,
  getV3BlogsBlogIdPostsSearchRouteHandler,
  getV3BlogsBlogIdRouteHandler,
  getV3BlogsByurlRouteHandler,
  getV3UsersUserIdBlogsBlogIdPostsPostIdRouteHandler,
  getV3UsersUserIdBlogsBlogIdPostsRouteHandler,
  getV3UsersUserIdBlogsBlogIdRouteHandler,
  getV3UsersUserIdBlogsRouteHandler,
  getV3UsersUserIdRouteHandler,
  patchV3BlogsBlogIdPagesPageIdRouteHandler,
  patchV3BlogsBlogIdPostsPostIdRouteHandler,
  postV3BlogsBlogIdPagesPageIdPublishRouteHandler,
  postV3BlogsBlogIdPagesPageIdRevertRouteHandler,
  postV3BlogsBlogIdPagesRouteHandler,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRouteHandler,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRouteHandler,
  postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRouteHandler,
  postV3BlogsBlogIdPostsPostIdPublishRouteHandler,
  postV3BlogsBlogIdPostsPostIdRevertRouteHandler,
  postV3BlogsBlogIdPostsRouteHandler,
  putV3BlogsBlogIdPagesPageIdRouteHandler,
  putV3BlogsBlogIdPostsPostIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV3BlogsByurlRoute, getV3BlogsByurlRouteHandler)
  .openapi(getV3BlogsBlogIdRoute, getV3BlogsBlogIdRouteHandler)
  .openapi(getV3BlogsBlogIdCommentsRoute, getV3BlogsBlogIdCommentsRouteHandler)
  .openapi(getV3BlogsBlogIdPagesRoute, getV3BlogsBlogIdPagesRouteHandler)
  .openapi(postV3BlogsBlogIdPagesRoute, postV3BlogsBlogIdPagesRouteHandler)
  .openapi(deleteV3BlogsBlogIdPagesPageIdRoute, deleteV3BlogsBlogIdPagesPageIdRouteHandler)
  .openapi(getV3BlogsBlogIdPagesPageIdRoute, getV3BlogsBlogIdPagesPageIdRouteHandler)
  .openapi(patchV3BlogsBlogIdPagesPageIdRoute, patchV3BlogsBlogIdPagesPageIdRouteHandler)
  .openapi(putV3BlogsBlogIdPagesPageIdRoute, putV3BlogsBlogIdPagesPageIdRouteHandler)
  .openapi(
    postV3BlogsBlogIdPagesPageIdPublishRoute,
    postV3BlogsBlogIdPagesPageIdPublishRouteHandler,
  )
  .openapi(postV3BlogsBlogIdPagesPageIdRevertRoute, postV3BlogsBlogIdPagesPageIdRevertRouteHandler)
  .openapi(getV3BlogsBlogIdPageviewsRoute, getV3BlogsBlogIdPageviewsRouteHandler)
  .openapi(getV3BlogsBlogIdPostsRoute, getV3BlogsBlogIdPostsRouteHandler)
  .openapi(postV3BlogsBlogIdPostsRoute, postV3BlogsBlogIdPostsRouteHandler)
  .openapi(getV3BlogsBlogIdPostsBypathRoute, getV3BlogsBlogIdPostsBypathRouteHandler)
  .openapi(getV3BlogsBlogIdPostsSearchRoute, getV3BlogsBlogIdPostsSearchRouteHandler)
  .openapi(deleteV3BlogsBlogIdPostsPostIdRoute, deleteV3BlogsBlogIdPostsPostIdRouteHandler)
  .openapi(getV3BlogsBlogIdPostsPostIdRoute, getV3BlogsBlogIdPostsPostIdRouteHandler)
  .openapi(patchV3BlogsBlogIdPostsPostIdRoute, patchV3BlogsBlogIdPostsPostIdRouteHandler)
  .openapi(putV3BlogsBlogIdPostsPostIdRoute, putV3BlogsBlogIdPostsPostIdRouteHandler)
  .openapi(
    getV3BlogsBlogIdPostsPostIdCommentsRoute,
    getV3BlogsBlogIdPostsPostIdCommentsRouteHandler,
  )
  .openapi(
    deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
    deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRouteHandler,
  )
  .openapi(
    getV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute,
    getV3BlogsBlogIdPostsPostIdCommentsCommentIdRouteHandler,
  )
  .openapi(
    postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRoute,
    postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRouteHandler,
  )
  .openapi(
    postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRoute,
    postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRouteHandler,
  )
  .openapi(
    postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRoute,
    postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRouteHandler,
  )
  .openapi(
    postV3BlogsBlogIdPostsPostIdPublishRoute,
    postV3BlogsBlogIdPostsPostIdPublishRouteHandler,
  )
  .openapi(postV3BlogsBlogIdPostsPostIdRevertRoute, postV3BlogsBlogIdPostsPostIdRevertRouteHandler)
  .openapi(getV3UsersUserIdRoute, getV3UsersUserIdRouteHandler)
  .openapi(getV3UsersUserIdBlogsRoute, getV3UsersUserIdBlogsRouteHandler)
  .openapi(getV3UsersUserIdBlogsBlogIdRoute, getV3UsersUserIdBlogsBlogIdRouteHandler)
  .openapi(getV3UsersUserIdBlogsBlogIdPostsRoute, getV3UsersUserIdBlogsBlogIdPostsRouteHandler)
  .openapi(
    getV3UsersUserIdBlogsBlogIdPostsPostIdRoute,
    getV3UsersUserIdBlogsBlogIdPostsPostIdRouteHandler,
  )

export default app
