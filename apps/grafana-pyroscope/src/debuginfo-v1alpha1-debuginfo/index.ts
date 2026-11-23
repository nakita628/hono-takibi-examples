import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute,
  postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute,
  postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute,
  postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute,
} from './routes'
import {
  postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRouteHandler,
  postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRouteHandler,
  postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRouteHandler,
  postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute,
    postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRouteHandler,
  )
  .openapi(
    postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute,
    postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRouteHandler,
  )
  .openapi(
    postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute,
    postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRouteHandler,
  )
  .openapi(
    postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute,
    postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRouteHandler,
  )

export default app
