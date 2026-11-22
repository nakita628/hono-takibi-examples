import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvalIdRoute,
  deleteEvalRunIdRoute,
  getEvalIdRoute,
  getEvalRoute,
  getEvalRunIdRoute,
  getEvalRunRoute,
  patchEvalIdRoute,
  postEvalRoute,
  postEvalRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evalHandler = app
  .openapi(postEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEvalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEvalRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEvalRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvalRunRoute, (c) => {
    throw new Error('Not implemented')
  })
