import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatus500Route,
  getStatus501Route,
  getStatus502Route,
  getStatus503Route,
  getStatus504Route,
  getStatus505Route,
  getStatus506Route,
  getStatus507Route,
  getStatus508Route,
  getStatus509Route,
  getStatus510Route,
  getStatus511Route,
  getStatus512Route,
  getStatus520Route,
  getStatus522Route,
  getStatus523Route,
  getStatus524Route,
  getStatus525Route,
  getStatus526Route,
  getStatus527Route,
  getStatus529Route,
  getStatus530Route,
  getStatus598Route,
} from '../routes'

const app = new OpenAPIHono()

export const serverErrorResponsesHandler = app
  .openapi(getStatus500Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus501Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus502Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus503Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus504Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus505Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus506Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus507Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus508Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus509Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus510Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus511Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus520Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus512Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus522Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus523Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus524Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus525Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus526Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus527Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus529Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus530Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus598Route, (c) => {
    throw new Error('Not implemented')
  })
