import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStudiosNameImagesImageTypeImageIndexRoute,
  getStudiosNameImagesImageTypeRoute,
  getStudiosNameRoute,
  getStudiosRoute,
  headStudiosNameImagesImageTypeImageIndexRoute,
  headStudiosNameImagesImageTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const studiosHandler = app
  .openapi(getStudiosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiosNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiosNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headStudiosNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiosNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headStudiosNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
