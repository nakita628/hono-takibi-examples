import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMePortfoliosPortfolioIdVideosVideoIdRoute,
  deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  getMePortfoliosPortfolioIdVideosRoute,
  getMePortfoliosPortfolioIdVideosVideoIdRoute,
  getUsersUserIdPortfoliosPortfolioIdVideosRoute,
  getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
  putMePortfoliosPortfolioIdVideosVideoIdRoute,
  putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfoliosVideosHandler = app
  .openapi(getMePortfoliosPortfolioIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosPortfolioIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPortfoliosPortfolioIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
