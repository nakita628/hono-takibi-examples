import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCircuitsCircuitsIdIndexRoute,
  deleteCircuitsCircuitTerminationsIdIndexRoute,
  deleteCircuitsCircuitTypesIdIndexRoute,
  deleteCircuitsProvidersIdIndexRoute,
  getCircuitsCircuitsIdIndexRoute,
  getCircuitsCircuitsIndexRoute,
  getCircuitsCircuitTerminationsIdIndexRoute,
  getCircuitsCircuitTerminationsIndexRoute,
  getCircuitsCircuitTypesIdIndexRoute,
  getCircuitsCircuitTypesIndexRoute,
  getCircuitsProvidersIdGraphsIndexRoute,
  getCircuitsProvidersIdIndexRoute,
  getCircuitsProvidersIndexRoute,
  patchCircuitsCircuitsIdIndexRoute,
  patchCircuitsCircuitTerminationsIdIndexRoute,
  patchCircuitsCircuitTypesIdIndexRoute,
  patchCircuitsProvidersIdIndexRoute,
  postCircuitsCircuitsIndexRoute,
  postCircuitsCircuitTerminationsIndexRoute,
  postCircuitsCircuitTypesIndexRoute,
  postCircuitsProvidersIndexRoute,
  putCircuitsCircuitsIdIndexRoute,
  putCircuitsCircuitTerminationsIdIndexRoute,
  putCircuitsCircuitTypesIdIndexRoute,
  putCircuitsProvidersIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const circuitsHandler = app
  .openapi(getCircuitsCircuitTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCircuitsCircuitTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCircuitsCircuitTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsCircuitTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCircuitsCircuitTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCircuitsCircuitTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsCircuitTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCircuitsCircuitTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCircuitsCircuitTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsCircuitTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCircuitsCircuitTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCircuitsCircuitTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsCircuitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCircuitsCircuitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCircuitsCircuitsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsCircuitsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCircuitsCircuitsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCircuitsCircuitsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsProvidersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCircuitsProvidersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCircuitsProvidersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsProvidersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCircuitsProvidersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCircuitsProvidersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCircuitsProvidersIdGraphsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
