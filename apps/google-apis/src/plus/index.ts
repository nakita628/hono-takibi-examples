import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActivitiesActivityIdCommentsRoute,
  getActivitiesActivityIdPeopleCollectionRoute,
  getActivitiesActivityIdRoute,
  getActivitiesRoute,
  getCommentsCommentIdRoute,
  getPeopleRoute,
  getPeopleUserIdActivitiesCollectionRoute,
  getPeopleUserIdPeopleCollectionRoute,
  getPeopleUserIdRoute,
} from './routes'
import {
  getActivitiesActivityIdCommentsRouteHandler,
  getActivitiesActivityIdPeopleCollectionRouteHandler,
  getActivitiesActivityIdRouteHandler,
  getActivitiesRouteHandler,
  getCommentsCommentIdRouteHandler,
  getPeopleRouteHandler,
  getPeopleUserIdActivitiesCollectionRouteHandler,
  getPeopleUserIdPeopleCollectionRouteHandler,
  getPeopleUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActivitiesRoute, getActivitiesRouteHandler)
  .openapi(getActivitiesActivityIdRoute, getActivitiesActivityIdRouteHandler)
  .openapi(getActivitiesActivityIdCommentsRoute, getActivitiesActivityIdCommentsRouteHandler)
  .openapi(
    getActivitiesActivityIdPeopleCollectionRoute,
    getActivitiesActivityIdPeopleCollectionRouteHandler,
  )
  .openapi(getCommentsCommentIdRoute, getCommentsCommentIdRouteHandler)
  .openapi(getPeopleRoute, getPeopleRouteHandler)
  .openapi(getPeopleUserIdRoute, getPeopleUserIdRouteHandler)
  .openapi(
    getPeopleUserIdActivitiesCollectionRoute,
    getPeopleUserIdActivitiesCollectionRouteHandler,
  )
  .openapi(getPeopleUserIdPeopleCollectionRoute, getPeopleUserIdPeopleCollectionRouteHandler)

export default app
