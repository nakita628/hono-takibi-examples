import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05ConsentRequestsInitRoute,
  postV05ConsentRequestsOnInitRoute,
  postV05ConsentRequestsOnStatusRoute,
  postV05ConsentRequestsStatusRoute,
  postV05ConsentsFetchRoute,
  postV05ConsentsHipNotifyRoute,
  postV05ConsentsHipOnNotifyRoute,
  postV05ConsentsHiuNotifyRoute,
  postV05ConsentsHiuOnNotifyRoute,
  postV05ConsentsOnFetchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consentFlowHandler = app
  .openapi(postV05ConsentRequestsInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsOnStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHipNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHipOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsOnFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
