import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApisAuthenticationK8sIoV1IndexRoute,
  postApisAuthenticationK8sIoV1SelfsubjectreviewsRoute,
  postApisAuthenticationK8sIoV1TokenreviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationV1Handler = app
  .openapi(getApisAuthenticationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAuthenticationK8sIoV1SelfsubjectreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisAuthenticationK8sIoV1TokenreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
