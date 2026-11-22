import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOcrPreprocessingImageBinarizeAdvancedRoute,
  postOcrPreprocessingImageBinarizeRoute,
  postOcrPreprocessingImageGetPageAngleRoute,
  postOcrPreprocessingImageUnrotateAdvancedRoute,
  postOcrPreprocessingImageUnrotateRoute,
  postOcrPreprocessingImageUnskewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preprocessingHandler = app
  .openapi(postOcrPreprocessingImageBinarizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageBinarizeAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageGetPageAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageUnrotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageUnrotateAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcrPreprocessingImageUnskewRoute, (c) => {
    throw new Error('Not implemented')
  })
