import { createRoute, z } from '@hono/zod-openapi'

export const getApiV1GamesRoute = createRoute({
  method: 'get',
  path: '/api/v1/games',
  tags: ['games'],
  summary: 'all games (example parameters)',
  description: 'all games (example parameters)',
  operationId: 'allGamesExampleParameters',
  request: {
    query: z.object({
      'seasons[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'seasons[]',
            schema: { example: '2018', type: 'string' },
            required: false,
          },
          example: '2018',
        }),
      'team_ids[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'team_ids[]',
            schema: { example: '1', type: 'string' },
            required: false,
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1Games32881Route = createRoute({
  method: 'get',
  path: '/api/v1/games/32881',
  tags: ['games'],
  summary: 'specific game',
  description: 'specific game',
  operationId: 'specificGame',
  responses: { 200: { description: '' } },
})

export const getApiV1PlayersRoute = createRoute({
  method: 'get',
  path: '/api/v1/players',
  tags: ['players'],
  summary: 'all players (search)',
  description: 'all players (search)',
  operationId: 'allPlayersSearch',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { example: 'lebron', type: 'string' },
            required: false,
          },
          example: 'lebron',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1Players237Route = createRoute({
  method: 'get',
  path: '/api/v1/players/237',
  tags: ['players'],
  summary: 'specific player',
  description: 'specific player',
  operationId: 'specificPlayer',
  responses: { 200: { description: '' } },
})

export const getApiV1StatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/stats',
  tags: ['stats'],
  summary: 'all stats (example parameters)',
  description: 'all stats (example parameters)',
  operationId: 'allStatsExampleParameters',
  request: {
    query: z.object({
      'season[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'season[]',
            schema: { example: '2018', type: 'string' },
            required: false,
          },
          example: '2018',
        }),
      'player_ids[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'player_ids[]',
            schema: { example: '237', type: 'string' },
            required: false,
          },
          example: '237',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1TeamsRoute = createRoute({
  method: 'get',
  path: '/api/v1/teams',
  tags: ['teams'],
  summary: 'all teams',
  description: 'all teams',
  operationId: 'allTeams',
  responses: { 200: { description: '' } },
})

export const getApiV1Teams1Route = createRoute({
  method: 'get',
  path: '/api/v1/teams/1',
  tags: ['teams'],
  summary: 'specific team',
  description: 'specific team',
  operationId: 'specificTeam',
  responses: { 200: { description: '' } },
})
