import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCSVtoJSONRoute,
  postJSONtoCSVRoute,
  postJSONtoHTMLRoute,
  postJSONtoXMLRoute,
  postQueryJSONRoute,
  postQueryXMLRoute,
  postXMLtoJSONRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(postCSVtoJSONRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJSONtoCSVRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJSONtoHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJSONtoXMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryJSONRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryXMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postXMLtoJSONRoute, (c) => {
    throw new Error('Not implemented')
  })
