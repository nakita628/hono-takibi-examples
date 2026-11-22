import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCardCardIDGeneratedCvc2ItemIdRoute,
  getUserUserIDCardCardIDGeneratedCvc2Route,
  postUserUserIDCardCardIDGeneratedCvc2Route,
  putUserUserIDCardCardIDGeneratedCvc2ItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generatedCvc2Handler = app
  .openapi(postUserUserIDCardCardIDGeneratedCvc2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDGeneratedCvc2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDGeneratedCvc2ItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDCardCardIDGeneratedCvc2ItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
