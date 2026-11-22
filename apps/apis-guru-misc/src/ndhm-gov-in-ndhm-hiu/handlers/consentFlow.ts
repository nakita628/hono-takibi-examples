import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05ConsentRequestsOnInitRoute,
  postV05ConsentRequestsOnStatusRoute,
  postV05ConsentsHiuNotifyRoute,
  postV05ConsentsOnFetchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consentFlowHandler = app
  .openapi(postV05ConsentRequestsOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsOnStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsOnFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
