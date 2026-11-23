import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPersonsNameImagesImageTypeImageIndexRoute,
  getPersonsNameImagesImageTypeRoute,
  getPersonsNameRoute,
  getPersonsRoute,
  headPersonsNameImagesImageTypeImageIndexRoute,
  headPersonsNameImagesImageTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personsHandler = app
  .openapi(getPersonsNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPersonsNameImagesImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPersonsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPersonsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
