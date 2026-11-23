import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjectTags202609ObjectTypeIdTagIdRoute,
  getCrmObjectTags202609ObjectTypeIdRoute,
  getCrmObjectTags202609ObjectTypeIdTagIdRoute,
  patchCrmObjectTags202609ObjectTypeIdTagIdRoute,
  postCrmObjectTags202609ObjectTypeIdRoute,
  putCrmObjectTags202609ObjectTypeIdTagIdRoute,
} from './routes'
import {
  deleteCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  getCrmObjectTags202609ObjectTypeIdRouteHandler,
  getCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  patchCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  postCrmObjectTags202609ObjectTypeIdRouteHandler,
  putCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjectTags202609ObjectTypeIdRoute, getCrmObjectTags202609ObjectTypeIdRouteHandler)
  .openapi(
    postCrmObjectTags202609ObjectTypeIdRoute,
    postCrmObjectTags202609ObjectTypeIdRouteHandler,
  )
  .openapi(
    getCrmObjectTags202609ObjectTypeIdTagIdRoute,
    getCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  )
  .openapi(
    putCrmObjectTags202609ObjectTypeIdTagIdRoute,
    putCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  )
  .openapi(
    deleteCrmObjectTags202609ObjectTypeIdTagIdRoute,
    deleteCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  )
  .openapi(
    patchCrmObjectTags202609ObjectTypeIdTagIdRoute,
    patchCrmObjectTags202609ObjectTypeIdTagIdRouteHandler,
  )

export default app
