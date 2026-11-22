import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20UsersUsername(
  args: InferRequestType<(typeof client)['2.0']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2.0'].users[':username'].$get(args, options))
}

export async function get20RepositoriesUsername(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2.0'].repositories[':username'].$get(args, options))
}

export async function get20RepositoriesUsernameSlug(
  args: InferRequestType<(typeof client)['2.0']['repositories'][':username'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2.0'].repositories[':username'][':slug'].$get(args, options))
}

export async function get20RepositoriesUsernameSlugPullrequests(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2.0'].repositories[':username'][':slug'].pullrequests.$get(args, options),
  )
}

export async function get20RepositoriesUsernameSlugPullrequestsPid(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].$get(args, options),
  )
}

export async function post20RepositoriesUsernameSlugPullrequestsPidMerge(
  args: InferRequestType<
    (typeof client)['2.0']['repositories'][':username'][':slug']['pullrequests'][':pid']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2.0'].repositories[':username'][':slug'].pullrequests[':pid'].merge.$post(
      args,
      options,
    ),
  )
}
