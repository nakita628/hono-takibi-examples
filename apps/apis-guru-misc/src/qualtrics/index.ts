import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsubscriptionsIndexRoute,
  getDistributionsDistributionIdLinksRoute,
  getDistributionsRoute,
  getEventsubscriptionsSubscriptionIdRoute,
  getSurveyDefinitionsSurveyIdRoute,
  postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRoute,
  postDistributionsRoute,
  postEventsubscriptionsIndexRoute,
} from './routes'
import {
  deleteEventsubscriptionsIndexRouteHandler,
  getDistributionsDistributionIdLinksRouteHandler,
  getDistributionsRouteHandler,
  getEventsubscriptionsSubscriptionIdRouteHandler,
  getSurveyDefinitionsSurveyIdRouteHandler,
  postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRouteHandler,
  postDistributionsRouteHandler,
  postEventsubscriptionsIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRoute,
    postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRouteHandler,
  )
  .openapi(getDistributionsRoute, getDistributionsRouteHandler)
  .openapi(postDistributionsRoute, postDistributionsRouteHandler)
  .openapi(
    getDistributionsDistributionIdLinksRoute,
    getDistributionsDistributionIdLinksRouteHandler,
  )
  .openapi(deleteEventsubscriptionsIndexRoute, deleteEventsubscriptionsIndexRouteHandler)
  .openapi(postEventsubscriptionsIndexRoute, postEventsubscriptionsIndexRouteHandler)
  .openapi(
    getEventsubscriptionsSubscriptionIdRoute,
    getEventsubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getSurveyDefinitionsSurveyIdRoute, getSurveyDefinitionsSurveyIdRouteHandler)

export default app
