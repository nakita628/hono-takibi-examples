import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrainingsRoute,
  getTrainingsTrainingIdRoute,
  postTrainingsTrainingIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trainingsHandler = app
  .openapi(getTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrainingsTrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrainingsTrainingIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
