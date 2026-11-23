import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMedicalConditionRoute,
  getMedicalConditionSearchRoute,
  postMedicalConditionSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const medicalConditionHandler = app
  .openapi(getMedicalConditionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMedicalConditionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMedicalConditionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
