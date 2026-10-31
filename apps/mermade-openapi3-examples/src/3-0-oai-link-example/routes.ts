import { createRoute, z } from '@hono/zod-openapi'

const UserSchema = z
  .object({ username: z.string().exactOptional(), uuid: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('User')

const RepositorySchema = z
  .object({ slug: z.string().exactOptional(), owner: UserSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Repository')

const PullrequestSchema = z
  .object({
    id: z.int().exactOptional(),
    title: z.string().exactOptional(),
    repository: RepositorySchema.exactOptional(),
    author: UserSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pullrequest')

const UserRepositoriesLink = {
  operationId: 'getRepositoriesByOwner',
  parameters: { username: '$response.body#/username' },
}

const UserRepositoryLink = {
  operationId: 'getRepository',
  parameters: { username: '$response.body#/owner/username', slug: '$response.body#/slug' },
}

const RepositoryPullRequestsLink = {
  operationId: 'getPullRequestsByRepository',
  parameters: { username: '$response.body#/owner/username', slug: '$response.body#/slug' },
}

const PullRequestMergeLink = {
  operationId: 'mergePullRequest',
  parameters: {
    username: '$response.body#/author/username',
    slug: '$response.body#/repository/slug',
    pid: '$response.body#/id',
  },
}

export const get20UsersUsernameRoute = createRoute({
  method: 'get',
  path: '/2.0/users/{username}',
  operationId: 'getUserByName',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The User',
      content: { 'application/json': { schema: UserSchema } },
      links: { userRepositories: UserRepositoriesLink },
    },
  },
})

export const get20RepositoriesUsernameRoute = createRoute({
  method: 'get',
  path: '/2.0/repositories/{username}',
  operationId: 'getRepositoriesByOwner',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'repositories owned by the supplied user',
      content: { 'application/json': { schema: z.array(RepositorySchema) } },
      links: { userRepository: UserRepositoryLink },
    },
  },
})

export const get20RepositoriesUsernameSlugRoute = createRoute({
  method: 'get',
  path: '/2.0/repositories/{username}/{slug}',
  operationId: 'getRepository',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .openapi({
          param: { name: 'slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The repository',
      content: { 'application/json': { schema: RepositorySchema } },
      links: { repositoryPullRequests: RepositoryPullRequestsLink },
    },
  },
})

export const get20RepositoriesUsernameSlugPullrequestsRoute = createRoute({
  method: 'get',
  path: '/2.0/repositories/{username}/{slug}/pullrequests',
  operationId: 'getPullRequestsByRepository',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .openapi({
          param: { name: 'slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      state: z
        .enum(['open', 'merged', 'declined'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            schema: { type: 'string', enum: ['open', 'merged', 'declined'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'an array of pull request objects',
      content: { 'application/json': { schema: z.array(PullrequestSchema) } },
    },
  },
})

export const get20RepositoriesUsernameSlugPullrequestsPidRoute = createRoute({
  method: 'get',
  path: '/2.0/repositories/{username}/{slug}/pullrequests/{pid}',
  operationId: 'getPullRequestsById',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .openapi({
          param: { name: 'slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
      pid: z
        .string()
        .openapi({
          param: { name: 'pid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'a pull request object',
      content: { 'application/json': { schema: PullrequestSchema } },
      links: { pullRequestMerge: PullRequestMergeLink },
    },
  },
})

export const post20RepositoriesUsernameSlugPullrequestsPidMergeRoute = createRoute({
  method: 'post',
  path: '/2.0/repositories/{username}/{slug}/pullrequests/{pid}/merge',
  operationId: 'mergePullRequest',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .openapi({
          param: { name: 'slug', in: 'path', required: true, schema: { type: 'string' } },
        }),
      pid: z
        .string()
        .openapi({
          param: { name: 'pid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'the PR was successfully merged' } },
})
