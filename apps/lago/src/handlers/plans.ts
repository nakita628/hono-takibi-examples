import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlansCodeChargesChargeCodeFiltersFilterIdRoute,
  deletePlansCodeChargesChargeCodeRoute,
  deletePlansCodeFixedChargesFixedChargeCodeRoute,
  deletePlansCodeMetadataKeyRoute,
  deletePlansCodeMetadataRoute,
  deletePlansCodeRoute,
  getPlansCodeChargesChargeCodeFiltersFilterIdRoute,
  getPlansCodeChargesChargeCodeFiltersRoute,
  getPlansCodeChargesChargeCodeRoute,
  getPlansCodeChargesRoute,
  getPlansCodeFixedChargesFixedChargeCodeRoute,
  getPlansCodeFixedChargesRoute,
  getPlansCodeRoute,
  getPlansRoute,
  patchPlansCodeMetadataRoute,
  postPlansCodeChargesChargeCodeFiltersRoute,
  postPlansCodeChargesRoute,
  postPlansCodeFixedChargesRoute,
  postPlansCodeMetadataRoute,
  postPlansRoute,
  putPlansCodeChargesChargeCodeFiltersFilterIdRoute,
  putPlansCodeChargesChargeCodeRoute,
  putPlansCodeFixedChargesFixedChargeCodeRoute,
  putPlansCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app
  .openapi(postPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlansCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlansCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlansCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlansCodeChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeChargesChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlansCodeChargesChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeChargesChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlansCodeChargesChargeCodeFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeChargesChargeCodeFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeChargesChargeCodeFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlansCodeChargesChargeCodeFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeChargesChargeCodeFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlansCodeFixedChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeFixedChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansCodeFixedChargesFixedChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlansCodeFixedChargesFixedChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlansCodeFixedChargesFixedChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
