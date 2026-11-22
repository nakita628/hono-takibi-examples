import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoyaltyTierProgramsPidTierGroupsGidRoute,
  deleteLoyaltyTierProgramsPidTiersTidRoute,
  getLoyaltyTierProgramsPidTierGroupsGidRoute,
  getLoyaltyTierProgramsPidTierGroupsRoute,
  getLoyaltyTierProgramsPidTiersRoute,
  postLoyaltyTierProgramsPidContactsCidTiersTidRoute,
  postLoyaltyTierProgramsPidTierGroupsGidTiersRoute,
  postLoyaltyTierProgramsPidTierGroupsRoute,
  putLoyaltyTierProgramsPidTierGroupsGidRoute,
  putLoyaltyTierProgramsPidTiersTidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tierHandler = app
  .openapi(postLoyaltyTierProgramsPidContactsCidTiersTidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyTierProgramsPidTierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyTierProgramsPidTierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyTierProgramsPidTierGroupsGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyTierProgramsPidTierGroupsGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyTierProgramsPidTierGroupsGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyTierProgramsPidTierGroupsGidTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyTierProgramsPidTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyTierProgramsPidTiersTidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyTierProgramsPidTiersTidRoute, (c) => {
    throw new Error('Not implemented')
  })
