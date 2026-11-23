import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar/emoji',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.emoji.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmoji<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar/dark',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.dark.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/matrix-avatar/:size',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['matrix-avatar'][
          ':size'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionBanTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionBanTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBanTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionBanTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionBanToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBanTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionBanTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBanTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBanTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBanTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBanToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionBanTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token/:banId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'][':banId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionBotTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionBotTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBotTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionBotTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionBotToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBotTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionBotTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/:botId', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'][':botId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/:botId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'][':botId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/broadcast',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
          ':token'
        ].broadcast.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcast<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/attendees',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
          ':token'
        ].attendees.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/request-assistance',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'][
          'request-assistance'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/request-assistance',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'][
          'request-assistance'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/rooms',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].rooms.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRooms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/rooms',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
          ':token'
        ].rooms.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRooms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/switch',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
          ':token'
        ].switch.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/dashboard/events', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].dashboard.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionDashboardEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mutual-events',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['mutual-events'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionCallTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionCallTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionCallTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionCallToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionCallTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionCallToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionCallToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionCallToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/download', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionCallTokenDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/ring/:attendeeId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].ring[
          ':attendeeId'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/dialout/:attendeeId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].dialout[
          ':attendeeId'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/notification-state',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'][
          'notification-state'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule/:messageId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule[
          ':messageId'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule/:messageId',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule[
          ':messageId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShareMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShareMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShareMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/summarize', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].summarize.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/context',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
          ':messageId'
        ].context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/reminder',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
          ':messageId'
        ].reminder.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/reminder',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
          ':messageId'
        ].reminder.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/reminder',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
          ':messageId'
        ].reminder.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/upcoming-reminders',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['upcoming-reminders'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatUpcomingReminders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/read', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].read.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/read', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].read.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share/overview',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.overview.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].pin.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
          ':messageId'
        ].pin.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin/self',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
          ':messageId'
        ].pin.self.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelf<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/mentions', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].mentions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenMentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/attachment/folder',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].attachment.folder.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/attachment', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].attachment.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionTagsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionTagsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionTagsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionTagsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionTagsTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsReorderMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/reorder', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionTagsReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.reorder.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionTagsReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionTagsReorderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId/collapsed', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].collapsed.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionFileFileIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/file/:fileId', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionFileFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionFileFileIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionFileFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].file[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionFileFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionFileFileIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionFileFileIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/publicshare/:shareToken',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshare[':shareToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionPublicshareShareToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/guest/:token/name', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].guest[':token'].name.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/languages',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'].languages.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/translation-languages',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesQueryKey
    >
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
          'translation-languages'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token/language',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
          ':token'
        ].language.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token/target-language',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'][
          'target-language'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/check', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.check.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/backup', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.backup.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/invite/:id', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.invite[':id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/invite/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.invite[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/room', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.room.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/room/join', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.room.join.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionBridgeToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionBridgeToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token/process', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].process.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionPollToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/draft/:pollId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].draft[':pollId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/drafts', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].drafts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionPollTokenDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId/export/:format',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].export[
          ':format'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/presets/room', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].presets.room.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionPresetsRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauthMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/publicshareauth', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshareauth.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauthMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/reaction/:token/:messageId',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/reaction/:token/:messageId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/reaction/:token/:messageId',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][
          ':messageId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRecordingToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/notification',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[
          ':token'
        ].notification.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/retry', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].retry.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/share-chat',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token']['share-chat'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoom<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionListedRoomQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/listed-room', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionListedRoomQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionListedRoomQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionListedRoomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion']['listed-room'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionListedRoom<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionListedRoomQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionListedRoomQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/breakout-rooms',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['breakout-rooms'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/note-to-self', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['note-to-self'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/favorite', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].favorite.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavorite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/favorite', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].favorite.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavorite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/notify', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].notify.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/notify-calls',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['notify-calls'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCalls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/description', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].description.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/object', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].object.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/breakout-rooms/participants',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
          'breakout-rooms'
        ].participants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/self',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
          ':token'
        ].participants.self.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelf<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].attendees.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/public', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].public.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/public', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].public.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/read-only', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['read-only'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnly<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/listable', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].listable.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mention-permissions',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
          'mention-permissions'
        ].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/password', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].password.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/archive', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].archive.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/archive', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].archive.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/preserve', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].preserve.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/preserve', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].preserve.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/tags', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].tags.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/important', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].important.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/important', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].important.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/sensitive', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].sensitive.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/sensitive', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].sensitive.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/active',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
          ':token'
        ].participants.active.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/active',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
          ':token'
        ].participants.active.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/state',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.state.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/moderators', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].moderators.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/moderators',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].moderators.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/permissions/:mode',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].permissions[
          ':mode'
        ].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsMode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees/permissions',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
          ':token'
        ].attendees.permissions.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees/permissions/all',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
          ':token'
        ].attendees.permissions.all.$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/webinar/lobby',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].webinar.lobby.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobby<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/webinar/sip', 'PUT'] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].webinar.sip.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSip<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/recording-consent',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
          'recording-consent'
        ].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/resend-invitations',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants[
          'resend-invitations'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/message-expiration',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
          'message-expiration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpiration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/import-emails',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['import-emails'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/capabilities',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].capabilities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/meeting', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].meeting.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeeting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mute', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].mute.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mute', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].mute.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSettingsUserMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/settings/user', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSettingsUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionSettingsUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].settings.user.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionSettingsUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionSettingsUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/settings', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionSignalingSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/:token', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionSignalingToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSignalingTokenMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/:token', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSignalingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionSignalingTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionSignalingToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionSignalingTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedTempUserAvatarMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/temp-user-avatar', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedTempUserAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedTempUserAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed['temp-user-avatar'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedTempUserAvatar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedTempUserAvatarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedTempUserAvatarMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/temp-user-avatar', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedTempUserAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedTempUserAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed['temp-user-avatar'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedTempUserAvatar<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedTempUserAvatarMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/recent',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads.recent.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/subscribed-threads',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['subscribed-threads'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:threadId',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
          ':threadId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:threadId',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
          ':threadId'
        ].$put(args, options),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:messageId/notify',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
          ':messageId'
        ].notify.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/new/user-avatar/:size',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][':size'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/new/user-avatar/:size/dark',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][
          ':size'
        ].dark.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/:token/user-avatar/:size',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
          ':size'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/proxy/:token/user-avatar/:size/dark',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
          ':size'
        ].dark.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation/:id',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation[':id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation/:id',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionFederationInvitation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/federation/active',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].federation.active.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/federation/active',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
          ':token'
        ].federation.active.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/message', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].message.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/reaction/:messageId',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].reaction[
          ':messageId'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/reaction/:messageId',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].reaction[
          ':messageId'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/ask-features', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot['ask-features'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeatures<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionBotAdminQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/admin', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionBotAdminQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBotAdminQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionBotAdminQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot.admin.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionBotAdmin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBotAdminQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionBotAdminQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/certificate/expiration', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].certificate.expiration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionCertificateExpiration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/hostedsignalingserver/requesttrial',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[
          ':apiVersion'
        ].hostedsignalingserver.requesttrial.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrial<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/hostedsignalingserver/delete',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].hostedsignalingserver.delete.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id',
    'PUT',
  ] as const
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[':id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id/test',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[
          ':id'
        ].test.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/version', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.version.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionBridgeVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionBridge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/welcome/:serverId',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.welcome[':serverId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSettingsSipMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/settings/sip', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSettingsSipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionSettingsSipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].settings.sip.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionSettingsSip<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionSettingsSipMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/welcome/:serverId',
    keyArgs,
  ] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.welcome[':serverId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackendMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/backend', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.backend.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/request-upload',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'][
          'request-upload'
        ].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/store', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].store.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/pin/:pin', keyArgs] as const
}

export function getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinQueryKey>
  >({
    queryKey: getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].pin[':pin'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/verify-dialin',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['verify-dialin'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/direct-dial-in', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['direct-dial-in'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialIn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/verify-dialout',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['verify-dialout'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/open-dial-in',
    'POST',
  ] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['open-dial-in'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialIn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/rejected-dialout',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
          'rejected-dialout'
        ].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackendMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/backend', 'POST'] as const
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.backend.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
