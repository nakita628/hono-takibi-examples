import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArticleArticleIdContentRoute,
  getArticleArticleIdFansRoute,
  getArticleArticleIdMarkdownRoute,
  getArticleArticleIdRelatedRoute,
  getArticleArticleIdResponsesRoute,
  getArticleArticleIdRoute,
  getLatestpostsTopicSlugRoute,
  getListListIdArticlesRoute,
  getListListIdResponsesRoute,
  getListListIdRoute,
  getPublicationIdForPublicationSlugRoute,
  getPublicationPublicationIdArticlesRoute,
  getPublicationPublicationIdNewsletterRoute,
  getPublicationPublicationIdRoute,
  getRelatedTagsTagRoute,
  getRoute,
  getSearchArticlesQueryQueryRoute,
  getSearchListsQueryQueryRoute,
  getSearchPublicationsQueryQueryRoute,
  getSearchTagsQueryQueryRoute,
  getSearchUsersQueryQueryRoute,
  getTopfeedsTagModeRoute,
  getTopWriterTopicSlugRoute,
  getUserIdForUsernameRoute,
  getUserUserIdArticlesRoute,
  getUserUserIdFollowersRoute,
  getUserUserIdFollowingRoute,
  getUserUserIdInterestsRoute,
  getUserUserIdListsRoute,
  getUserUserIdPublicationsRoute,
  getUserUserIdRoute,
  getUserUserIdTopArticlesRoute,
} from './routes'
import {
  getArticleArticleIdContentRouteHandler,
  getArticleArticleIdFansRouteHandler,
  getArticleArticleIdMarkdownRouteHandler,
  getArticleArticleIdRelatedRouteHandler,
  getArticleArticleIdResponsesRouteHandler,
  getArticleArticleIdRouteHandler,
  getLatestpostsTopicSlugRouteHandler,
  getListListIdArticlesRouteHandler,
  getListListIdResponsesRouteHandler,
  getListListIdRouteHandler,
  getPublicationIdForPublicationSlugRouteHandler,
  getPublicationPublicationIdArticlesRouteHandler,
  getPublicationPublicationIdNewsletterRouteHandler,
  getPublicationPublicationIdRouteHandler,
  getRelatedTagsTagRouteHandler,
  getRouteHandler,
  getSearchArticlesQueryQueryRouteHandler,
  getSearchListsQueryQueryRouteHandler,
  getSearchPublicationsQueryQueryRouteHandler,
  getSearchTagsQueryQueryRouteHandler,
  getSearchUsersQueryQueryRouteHandler,
  getTopfeedsTagModeRouteHandler,
  getTopWriterTopicSlugRouteHandler,
  getUserIdForUsernameRouteHandler,
  getUserUserIdArticlesRouteHandler,
  getUserUserIdFollowersRouteHandler,
  getUserUserIdFollowingRouteHandler,
  getUserUserIdInterestsRouteHandler,
  getUserUserIdListsRouteHandler,
  getUserUserIdPublicationsRouteHandler,
  getUserUserIdRouteHandler,
  getUserUserIdTopArticlesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getArticleArticleIdRoute, getArticleArticleIdRouteHandler)
  .openapi(getArticleArticleIdContentRoute, getArticleArticleIdContentRouteHandler)
  .openapi(getArticleArticleIdFansRoute, getArticleArticleIdFansRouteHandler)
  .openapi(getArticleArticleIdMarkdownRoute, getArticleArticleIdMarkdownRouteHandler)
  .openapi(getArticleArticleIdRelatedRoute, getArticleArticleIdRelatedRouteHandler)
  .openapi(getArticleArticleIdResponsesRoute, getArticleArticleIdResponsesRouteHandler)
  .openapi(getLatestpostsTopicSlugRoute, getLatestpostsTopicSlugRouteHandler)
  .openapi(getListListIdRoute, getListListIdRouteHandler)
  .openapi(getListListIdArticlesRoute, getListListIdArticlesRouteHandler)
  .openapi(getListListIdResponsesRoute, getListListIdResponsesRouteHandler)
  .openapi(getPublicationIdForPublicationSlugRoute, getPublicationIdForPublicationSlugRouteHandler)
  .openapi(getPublicationPublicationIdRoute, getPublicationPublicationIdRouteHandler)
  .openapi(
    getPublicationPublicationIdArticlesRoute,
    getPublicationPublicationIdArticlesRouteHandler,
  )
  .openapi(
    getPublicationPublicationIdNewsletterRoute,
    getPublicationPublicationIdNewsletterRouteHandler,
  )
  .openapi(getRelatedTagsTagRoute, getRelatedTagsTagRouteHandler)
  .openapi(getSearchArticlesQueryQueryRoute, getSearchArticlesQueryQueryRouteHandler)
  .openapi(getSearchListsQueryQueryRoute, getSearchListsQueryQueryRouteHandler)
  .openapi(getSearchPublicationsQueryQueryRoute, getSearchPublicationsQueryQueryRouteHandler)
  .openapi(getSearchTagsQueryQueryRoute, getSearchTagsQueryQueryRouteHandler)
  .openapi(getSearchUsersQueryQueryRoute, getSearchUsersQueryQueryRouteHandler)
  .openapi(getTopWriterTopicSlugRoute, getTopWriterTopicSlugRouteHandler)
  .openapi(getTopfeedsTagModeRoute, getTopfeedsTagModeRouteHandler)
  .openapi(getUserIdForUsernameRoute, getUserIdForUsernameRouteHandler)
  .openapi(getUserUserIdRoute, getUserUserIdRouteHandler)
  .openapi(getUserUserIdArticlesRoute, getUserUserIdArticlesRouteHandler)
  .openapi(getUserUserIdFollowersRoute, getUserUserIdFollowersRouteHandler)
  .openapi(getUserUserIdFollowingRoute, getUserUserIdFollowingRouteHandler)
  .openapi(getUserUserIdInterestsRoute, getUserUserIdInterestsRouteHandler)
  .openapi(getUserUserIdListsRoute, getUserUserIdListsRouteHandler)
  .openapi(getUserUserIdPublicationsRoute, getUserUserIdPublicationsRouteHandler)
  .openapi(getUserUserIdTopArticlesRoute, getUserUserIdTopArticlesRouteHandler)

export default app
