import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20170829CertificatesArnRoute,
  delete20170829JobsIdRoute,
  delete20170829JobTemplatesNameRoute,
  delete20170829PolicyRoute,
  delete20170829PresetsNameRoute,
  delete20170829QueuesNameRoute,
  get20170829JobsIdRoute,
  get20170829JobsRoute,
  get20170829JobTemplatesNameRoute,
  get20170829JobTemplatesRoute,
  get20170829PolicyRoute,
  get20170829PresetsNameRoute,
  get20170829PresetsRoute,
  get20170829QueuesNameRoute,
  get20170829QueuesRoute,
  get20170829TagsArnRoute,
  post20170829CertificatesRoute,
  post20170829EndpointsRoute,
  post20170829JobsRoute,
  post20170829JobTemplatesRoute,
  post20170829PresetsRoute,
  post20170829QueuesRoute,
  post20170829TagsRoute,
  put20170829JobTemplatesNameRoute,
  put20170829PolicyRoute,
  put20170829PresetsNameRoute,
  put20170829QueuesNameRoute,
  put20170829TagsArnRoute,
} from './routes'
import {
  delete20170829CertificatesArnRouteHandler,
  delete20170829JobsIdRouteHandler,
  delete20170829JobTemplatesNameRouteHandler,
  delete20170829PolicyRouteHandler,
  delete20170829PresetsNameRouteHandler,
  delete20170829QueuesNameRouteHandler,
  get20170829JobsIdRouteHandler,
  get20170829JobsRouteHandler,
  get20170829JobTemplatesNameRouteHandler,
  get20170829JobTemplatesRouteHandler,
  get20170829PolicyRouteHandler,
  get20170829PresetsNameRouteHandler,
  get20170829PresetsRouteHandler,
  get20170829QueuesNameRouteHandler,
  get20170829QueuesRouteHandler,
  get20170829TagsArnRouteHandler,
  post20170829CertificatesRouteHandler,
  post20170829EndpointsRouteHandler,
  post20170829JobsRouteHandler,
  post20170829JobTemplatesRouteHandler,
  post20170829PresetsRouteHandler,
  post20170829QueuesRouteHandler,
  post20170829TagsRouteHandler,
  put20170829JobTemplatesNameRouteHandler,
  put20170829PolicyRouteHandler,
  put20170829PresetsNameRouteHandler,
  put20170829QueuesNameRouteHandler,
  put20170829TagsArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(post20170829CertificatesRoute, post20170829CertificatesRouteHandler)
  .openapi(delete20170829JobsIdRoute, delete20170829JobsIdRouteHandler)
  .openapi(get20170829JobsIdRoute, get20170829JobsIdRouteHandler)
  .openapi(post20170829JobsRoute, post20170829JobsRouteHandler)
  .openapi(get20170829JobsRoute, get20170829JobsRouteHandler)
  .openapi(post20170829JobTemplatesRoute, post20170829JobTemplatesRouteHandler)
  .openapi(get20170829JobTemplatesRoute, get20170829JobTemplatesRouteHandler)
  .openapi(post20170829PresetsRoute, post20170829PresetsRouteHandler)
  .openapi(get20170829PresetsRoute, get20170829PresetsRouteHandler)
  .openapi(post20170829QueuesRoute, post20170829QueuesRouteHandler)
  .openapi(get20170829QueuesRoute, get20170829QueuesRouteHandler)
  .openapi(delete20170829JobTemplatesNameRoute, delete20170829JobTemplatesNameRouteHandler)
  .openapi(get20170829JobTemplatesNameRoute, get20170829JobTemplatesNameRouteHandler)
  .openapi(put20170829JobTemplatesNameRoute, put20170829JobTemplatesNameRouteHandler)
  .openapi(delete20170829PolicyRoute, delete20170829PolicyRouteHandler)
  .openapi(get20170829PolicyRoute, get20170829PolicyRouteHandler)
  .openapi(put20170829PolicyRoute, put20170829PolicyRouteHandler)
  .openapi(delete20170829PresetsNameRoute, delete20170829PresetsNameRouteHandler)
  .openapi(get20170829PresetsNameRoute, get20170829PresetsNameRouteHandler)
  .openapi(put20170829PresetsNameRoute, put20170829PresetsNameRouteHandler)
  .openapi(delete20170829QueuesNameRoute, delete20170829QueuesNameRouteHandler)
  .openapi(get20170829QueuesNameRoute, get20170829QueuesNameRouteHandler)
  .openapi(put20170829QueuesNameRoute, put20170829QueuesNameRouteHandler)
  .openapi(post20170829EndpointsRoute, post20170829EndpointsRouteHandler)
  .openapi(delete20170829CertificatesArnRoute, delete20170829CertificatesArnRouteHandler)
  .openapi(get20170829TagsArnRoute, get20170829TagsArnRouteHandler)
  .openapi(put20170829TagsArnRoute, put20170829TagsArnRouteHandler)
  .openapi(post20170829TagsRoute, post20170829TagsRouteHandler)

export default app
