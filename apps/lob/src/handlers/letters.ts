import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLettersLtrIdRoute,
  getLettersLtrIdRoute,
  getLettersRoute,
  postLettersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lettersHandler = app
  .openapi(getLettersLtrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLettersLtrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLettersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLettersRoute, (c) => {
    throw new Error('Not implemented')
  })
