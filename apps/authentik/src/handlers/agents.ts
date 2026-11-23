import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsAgentsIdIndexRoute,
  getAgentsAgentsIdIndexRoute,
  getAgentsAgentsIndexRoute,
  patchAgentsAgentsIdIndexRoute,
  postAgentsAgentsIndexRoute,
  putAgentsAgentsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getAgentsAgentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsAgentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsAgentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentsAgentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentsAgentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsAgentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
