import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1OnboardingListCategoriesRoute,
  getBooksV1OnboardingListCategoryVolumesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onboardingHandler = app
  .openapi(getBooksV1OnboardingListCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1OnboardingListCategoryVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
