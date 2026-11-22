import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAllowedOriginsOriginIdRoute,
  getMeAllowedOriginsOriginIdRoute,
  getMeAllowedOriginsRoute,
  getMeRoute,
  postMeAllowedOriginsRoute,
  postMeGenerateClientKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myAPICredentialHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAllowedOriginsOriginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAllowedOriginsOriginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeGenerateClientKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
