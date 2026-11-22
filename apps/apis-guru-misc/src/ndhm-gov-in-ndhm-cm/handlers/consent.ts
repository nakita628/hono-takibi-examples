import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05ConsentRequestsInitRoute,
  postV05ConsentRequestsStatusRoute,
  postV05ConsentsFetchRoute,
  postV05ConsentsHipOnNotifyRoute,
  postV05ConsentsHiuOnNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consentHandler = app
  .openapi(postV05ConsentRequestsInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHipOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
