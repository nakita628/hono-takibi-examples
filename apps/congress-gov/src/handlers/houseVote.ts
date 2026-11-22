import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHouseVoteCongressRoute,
  getHouseVoteCongressSessionRoute,
  getHouseVoteCongressSessionVoteNumberMembersRoute,
  getHouseVoteCongressSessionVoteNumberRoute,
  getHouseVoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const houseVoteHandler = app
  .openapi(getHouseVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseVoteCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseVoteCongressSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseVoteCongressSessionVoteNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHouseVoteCongressSessionVoteNumberMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
