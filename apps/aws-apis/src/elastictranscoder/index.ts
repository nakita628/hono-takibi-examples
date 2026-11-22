import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20120925JobsIdRoute,
  delete20120925PipelinesIdRoute,
  delete20120925PresetsIdRoute,
  get20120925JobsByPipelinePipelineIdRoute,
  get20120925JobsByStatusStatusRoute,
  get20120925JobsIdRoute,
  get20120925PipelinesIdRoute,
  get20120925PipelinesRoute,
  get20120925PresetsIdRoute,
  get20120925PresetsRoute,
  post20120925JobsRoute,
  post20120925PipelinesIdNotificationsRoute,
  post20120925PipelinesIdStatusRoute,
  post20120925PipelinesRoute,
  post20120925PresetsRoute,
  post20120925RoleTestsRoute,
  put20120925PipelinesIdRoute,
} from './routes'
import {
  delete20120925JobsIdRouteHandler,
  delete20120925PipelinesIdRouteHandler,
  delete20120925PresetsIdRouteHandler,
  get20120925JobsByPipelinePipelineIdRouteHandler,
  get20120925JobsByStatusStatusRouteHandler,
  get20120925JobsIdRouteHandler,
  get20120925PipelinesIdRouteHandler,
  get20120925PipelinesRouteHandler,
  get20120925PresetsIdRouteHandler,
  get20120925PresetsRouteHandler,
  post20120925JobsRouteHandler,
  post20120925PipelinesIdNotificationsRouteHandler,
  post20120925PipelinesIdStatusRouteHandler,
  post20120925PipelinesRouteHandler,
  post20120925PresetsRouteHandler,
  post20120925RoleTestsRouteHandler,
  put20120925PipelinesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(delete20120925JobsIdRoute, delete20120925JobsIdRouteHandler)
  .openapi(get20120925JobsIdRoute, get20120925JobsIdRouteHandler)
  .openapi(post20120925JobsRoute, post20120925JobsRouteHandler)
  .openapi(post20120925PipelinesRoute, post20120925PipelinesRouteHandler)
  .openapi(get20120925PipelinesRoute, get20120925PipelinesRouteHandler)
  .openapi(post20120925PresetsRoute, post20120925PresetsRouteHandler)
  .openapi(get20120925PresetsRoute, get20120925PresetsRouteHandler)
  .openapi(delete20120925PipelinesIdRoute, delete20120925PipelinesIdRouteHandler)
  .openapi(get20120925PipelinesIdRoute, get20120925PipelinesIdRouteHandler)
  .openapi(put20120925PipelinesIdRoute, put20120925PipelinesIdRouteHandler)
  .openapi(delete20120925PresetsIdRoute, delete20120925PresetsIdRouteHandler)
  .openapi(get20120925PresetsIdRoute, get20120925PresetsIdRouteHandler)
  .openapi(
    get20120925JobsByPipelinePipelineIdRoute,
    get20120925JobsByPipelinePipelineIdRouteHandler,
  )
  .openapi(get20120925JobsByStatusStatusRoute, get20120925JobsByStatusStatusRouteHandler)
  .openapi(post20120925RoleTestsRoute, post20120925RoleTestsRouteHandler)
  .openapi(
    post20120925PipelinesIdNotificationsRoute,
    post20120925PipelinesIdNotificationsRouteHandler,
  )
  .openapi(post20120925PipelinesIdStatusRoute, post20120925PipelinesIdStatusRouteHandler)

export default app
