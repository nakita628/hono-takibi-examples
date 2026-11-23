import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnisSniNameOrIdRoute,
  getSnisRoute,
  getSnisSniNameOrIdRoute,
  patchSnisSniNameOrIdRoute,
  postSnisRoute,
  putSnisSniNameOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snisHandler = app
  .openapi(getSnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
