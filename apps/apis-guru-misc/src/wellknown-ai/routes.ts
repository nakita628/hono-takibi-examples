import { createRoute, z } from '@hono/zod-openapi'

export const getApiPluginsRoute = createRoute({
  method: 'get',
  path: '/api/plugins',
  description:
    'Returns a list of Wellknown ai-plugins json objects from the Wellknown ai-plugins registry.',
  responses: { 200: { description: 'A list of Wellknown ai-plugins json objects.' } },
})

export const getPluginsRoute = createRoute({
  method: 'get',
  path: '/plugins',
  tags: ['Plugins'],
  summary: 'List all the Wellknown AI Plugins.',
  description: 'List all the Wellknown AI Plugins. Returns ai-plugin.json objects in an array',
  operationId: 'getProvider',
  responses: { 200: { description: 'OK' } },
})
