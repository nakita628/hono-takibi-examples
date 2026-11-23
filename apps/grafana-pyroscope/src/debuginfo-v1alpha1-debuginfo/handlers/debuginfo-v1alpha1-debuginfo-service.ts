import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute,
  postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute,
  postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute,
  postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debuginfoV1alpha1DebuginfoServiceHandler = app
  .openapi(postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute, (c) => {
    throw new Error('Not implemented')
  })
