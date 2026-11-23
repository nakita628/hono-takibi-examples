import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1VoicesRoute,
  postV1beta1ParentSynthesizeLongAudioRoute,
  postV1beta1TextSynthesizeRoute,
} from './routes'
import {
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1VoicesRouteHandler,
  postV1beta1ParentSynthesizeLongAudioRouteHandler,
  postV1beta1TextSynthesizeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1beta1TextSynthesizeRoute, postV1beta1TextSynthesizeRouteHandler)
  .openapi(getV1beta1VoicesRoute, getV1beta1VoicesRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(
    postV1beta1ParentSynthesizeLongAudioRoute,
    postV1beta1ParentSynthesizeLongAudioRouteHandler,
  )

export default app
