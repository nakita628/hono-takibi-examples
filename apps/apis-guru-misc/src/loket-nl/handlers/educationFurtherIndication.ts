import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationIdRoute,
  getProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationIdRoute,
  getProvidersEmployersEmployerIdEducationfurtherindicationsRoute,
  postProvidersEmployersEmployerIdEducationfurtherindicationsRoute,
  putProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationFurtherIndicationHandler = app
  .openapi(
    deleteProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployerIdEducationfurtherindicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdEducationfurtherindicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
