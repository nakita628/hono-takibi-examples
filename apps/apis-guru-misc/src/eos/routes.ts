import { createRoute, z } from '@hono/zod-openapi'

export const postNetConnectRoute = createRoute({
  method: 'post',
  path: '/net/connect',
  summary: 'connect',
  description: 'Initiate a connection to a specified peer.',
  operationId: 'connect',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z
                .string()
                .openapi({
                  description: 'the endpoint to connect to expressed as either IP address or URL',
                }),
            })
            .openapi({ required: ['endpoint'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.string().openapi({ description: '"already connected" or "added connection"' }),
        },
      },
    },
  },
})

export const postNetConnectionsRoute = createRoute({
  method: 'post',
  path: '/net/connections',
  summary: 'connections',
  description: 'Returns an array of all peer connection statuses.',
  operationId: 'connections',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                connecting: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'True if the peer is connecting, otherwise false' }),
                last_handshake: z
                  .object({
                    agent: z.string().exactOptional().openapi({ description: 'Agent name' }),
                    chain_id: z
                      .string()
                      .regex(/^[0-9A-Fa-f]{64}$/)
                      .exactOptional()
                      .openapi({ title: 'Sha256' }),
                    generation: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Generation number' }),
                    head_id: z
                      .string()
                      .regex(/^[0-9A-Fa-f]{64}$/)
                      .exactOptional()
                      .openapi({ title: 'Sha256' }),
                    head_num: z.int().exactOptional().openapi({ description: 'Head number' }),
                    key: z
                      .string()
                      .regex(/^(EOS|PUB_([RK]1|WA)_)[1-9A-HJ-NP-Za-km-z]+$/)
                      .exactOptional()
                      .openapi({
                        description: 'Base58 encoded EOSIO public key',
                        title: 'PublicKey',
                      }),
                    last_irreversible_block_id: z
                      .string()
                      .regex(/^[0-9A-Fa-f]{64}$/)
                      .exactOptional()
                      .openapi({ title: 'Sha256' }),
                    last_irreversible_block_num: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Last irreversible block number' }),
                    network_version: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Incremental value above a computed base' }),
                    node_id: z
                      .string()
                      .regex(/^[0-9A-Fa-f]{64}$/)
                      .exactOptional()
                      .openapi({ title: 'Sha256' }),
                    os: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Operating system name' }),
                    p2p_address: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'IP address or URL of the peer' }),
                    sig: z
                      .string()
                      .regex(/^SIG_([RK]1|WA)_[1-9A-HJ-NP-Za-km-z]+$/)
                      .exactOptional()
                      .openapi({
                        description: 'Base58 encoded EOSIO cryptographic signature',
                        title: 'Signature',
                      }),
                    time: z
                      .string()
                      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}$/)
                      .exactOptional()
                      .openapi({
                        description: 'Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss',
                        title: 'DateTimeSeconds',
                      }),
                    token: z
                      .string()
                      .regex(/^[0-9A-Fa-f]{64}$/)
                      .exactOptional()
                      .openapi({ title: 'Sha256' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Structure holding detailed information about the connection',
                    required: [],
                  }),
                peer: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The IP address or URL of the peer' }),
                syncing: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'True if the peer is syncing, otherwise false' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postNetDisconnectRoute = createRoute({
  method: 'post',
  path: '/net/disconnect',
  summary: 'disconnect',
  description: 'Initiate disconnection from a specified peer.',
  operationId: 'disconnect',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z
                .string()
                .openapi({
                  description:
                    'the endpoint to disconnect from, expressed as either IP address or URL',
                }),
            })
            .openapi({ required: ['endpoint'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({ description: '"connection removed" or "no known connection for host"' }),
        },
      },
    },
  },
})

export const postNetStatusRoute = createRoute({
  method: 'post',
  path: '/net/status',
  summary: 'status',
  description: 'Retrieves the connection status for a specified peer.',
  operationId: 'status',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endpoint: z
                .string()
                .openapi({
                  description:
                    'the endpoint to get the status for, to expressed as either IP address or URL',
                }),
            })
            .openapi({ required: ['endpoint'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              connecting: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'True if the peer is connecting, otherwise false' }),
              last_handshake: z
                .object({
                  agent: z.string().exactOptional().openapi({ description: 'Agent name' }),
                  chain_id: z
                    .string()
                    .regex(/^[0-9A-Fa-f]{64}$/)
                    .exactOptional()
                    .openapi({ title: 'Sha256' }),
                  generation: z.int().exactOptional().openapi({ description: 'Generation number' }),
                  head_id: z
                    .string()
                    .regex(/^[0-9A-Fa-f]{64}$/)
                    .exactOptional()
                    .openapi({ title: 'Sha256' }),
                  head_num: z.int().exactOptional().openapi({ description: 'Head number' }),
                  key: z
                    .string()
                    .regex(/^(EOS|PUB_([RK]1|WA)_)[1-9A-HJ-NP-Za-km-z]+$/)
                    .exactOptional()
                    .openapi({
                      description: 'Base58 encoded EOSIO public key',
                      title: 'PublicKey',
                    }),
                  last_irreversible_block_id: z
                    .string()
                    .regex(/^[0-9A-Fa-f]{64}$/)
                    .exactOptional()
                    .openapi({ title: 'Sha256' }),
                  last_irreversible_block_num: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Last irreversible block number' }),
                  network_version: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Incremental value above a computed base' }),
                  node_id: z
                    .string()
                    .regex(/^[0-9A-Fa-f]{64}$/)
                    .exactOptional()
                    .openapi({ title: 'Sha256' }),
                  os: z.string().exactOptional().openapi({ description: 'Operating system name' }),
                  p2p_address: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'IP address or URL of the peer' }),
                  sig: z
                    .string()
                    .regex(/^SIG_([RK]1|WA)_[1-9A-HJ-NP-Za-km-z]+$/)
                    .exactOptional()
                    .openapi({
                      description: 'Base58 encoded EOSIO cryptographic signature',
                      title: 'Signature',
                    }),
                  time: z
                    .string()
                    .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}$/)
                    .exactOptional()
                    .openapi({
                      description: 'Date/time string in the format YYYY-MM-DDTHH:MM:SS.sss',
                      title: 'DateTimeSeconds',
                    }),
                  token: z
                    .string()
                    .regex(/^[0-9A-Fa-f]{64}$/)
                    .exactOptional()
                    .openapi({ title: 'Sha256' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Structure holding detailed information about the connection',
                  required: [],
                }),
              peer: z
                .string()
                .exactOptional()
                .openapi({ description: 'The IP address or URL of the peer' }),
              syncing: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'True if the peer is syncing, otherwise false' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
