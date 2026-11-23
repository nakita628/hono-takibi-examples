import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatar<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/avatar/emoji',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmoji<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['emoji']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.emoji.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDark<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.dark.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDark<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['avatar']['dark']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].avatar.dark.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['matrix-avatar'][
            ':size'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSize<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['matrix-avatar'][':size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['matrix-avatar'][
            ':size'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionBanTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionBanToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBanTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionBanToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBanTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBanTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBanToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBanTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/ban/:token/:banId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['ban'][':token'][':banId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].ban[':token'][':banId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionBotTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionBotToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBotTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionBotToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBotTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/:botId', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'][':botId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/:botId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token'][':botId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'][':botId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/broadcast',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcast<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['broadcast']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
            ':token'
          ].broadcast.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/attendees',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendees<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['attendees']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
            ':token'
          ].attendees.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/request-assistance',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'][
            'request-assistance'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/request-assistance',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['request-assistance']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][':token'][
            'request-assistance'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/rooms',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRooms<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
            ':token'
          ].rooms.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/rooms',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRooms<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['rooms']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
            ':token'
          ].rooms.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/breakout-rooms/:token/switch',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['breakout-rooms'][':token']['switch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['breakout-rooms'][
            ':token'
          ].switch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionDashboardEventsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/dashboard/events', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionDashboardEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionDashboardEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].dashboard.events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionDashboardEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['dashboard']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionDashboardEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].dashboard.events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['mutual-events'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEvents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mutual-events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['mutual-events'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionCallToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionCallToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionCallToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionCallToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionCallToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/download', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionCallTokenDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionCallTokenDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/federation',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['federation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].federation.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/ring/:attendeeId',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['ring'][':attendeeId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].ring[
            ':attendeeId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/call/:token/dialout/:attendeeId',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['dialout'][':attendeeId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'].dialout[
            ':attendeeId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationState<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'][
            'notification-state'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationState<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['call'][':token']['notification-state']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].call[':token'][
            'notification-state'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenSchedule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule/:messageId',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule[
            ':messageId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/schedule/:messageId',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['schedule'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].schedule[
            ':messageId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShare<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShare<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShareKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/share', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenShare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenShareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/summarize', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['summarize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].summarize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContext<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].context.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContext<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['context']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].context.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][':messageId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].reminder.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].reminder.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/reminder',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].reminder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/reminder',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['reminder']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].reminder.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatUpcomingReminders<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['upcoming-reminders'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatUpcomingReminders<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['upcoming-reminders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['upcoming-reminders'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenReadKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/read', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].read.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/read', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['read']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].read.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.overview.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverview<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['share']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].share.overview.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].pin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].pin.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/:messageId/pin/self',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelf<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token'][':messageId']['pin']['self']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'][
            ':messageId'
          ].pin.self.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/mentions', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMentions<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].mentions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMentions<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['mentions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].mentions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/attachment/folder',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['folder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[
            ':token'
          ].attachment.folder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/attachment', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['attachment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].attachment.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionTagsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionTags<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionTagsKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsReorderKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/reorder', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionTagsReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionTagsReorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags']['reorder']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags.reorder.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/tags/:tagId/collapsed', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsed<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['tags'][':tagId']['collapsed']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].tags[':tagId'].collapsed.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionFileFileIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/file/:fileId', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionFileFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionFileFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].file[':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionFileFileId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['file'][':fileId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionFileFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].file[':fileId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionPublicshareShareToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshare[':shareToken'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionPublicshareShareToken<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshare'][':shareToken']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshare[':shareToken'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/guest/:token/name', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionGuestTokenName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['guest'][':token']['name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].guest[':token'].name.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
            ':token'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguages<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'].languages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['languages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'].languages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
            'translation-languages'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription']['translation-languages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
            'translation-languages'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token/language',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['language']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][
            ':token'
          ].language.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/live-transcription/:token/target-language',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['live-transcription'][':token']['target-language']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['live-transcription'][':token'][
            'target-language'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/check', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheck<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['check']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.check.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/verification',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['verification']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.verification.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/account/backup', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['account']['backup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.account.backup.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/invite/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.invite[':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/invite/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['invite'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.invite[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/room', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.room.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/room/join', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['room']['join']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.room.join.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionBridgeToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionBridgeToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionBridgeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/:token/process', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcess<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].process.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcess<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge'][':token']['process']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge[':token'].process.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionPollToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/draft/:pollId',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['draft'][':pollId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].draft[':pollId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/drafts', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionPollTokenDrafts<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].drafts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionPollTokenDrafts<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token']['drafts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'].drafts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/poll/:token/:pollId', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].export[
            ':format'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormat<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['poll'][':token'][':pollId']['export'][':format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].poll[':token'][':pollId'].export[
            ':format'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionPresetsRoomKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/presets/room', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionPresetsRoom<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPresetsRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].presets.room.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionPresetsRoom<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['presets']['room']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionPresetsRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].presets.room.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauthKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/publicshareauth', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionPublicshareauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionPublicshareauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['publicshareauth']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].publicshareauth.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][':messageId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/reaction/:token/:messageId',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][
            ':messageId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/reaction/:token/:messageId',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['reaction'][':token'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].reaction[':token'][
            ':messageId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRecordingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/notification',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['notification']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[
            ':token'
          ].notification.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/retry', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].retry.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/share-chat',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['share-chat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'][
            'share-chat'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoom<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoom<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoom<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionListedRoomKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/listed-room', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionListedRoom<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionListedRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['listed-room'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionListedRoom<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['listed-room']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionListedRoomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion']['listed-room'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRooms<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['breakout-rooms'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRooms<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['breakout-rooms'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/note-to-self', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelf<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['note-to-self'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelf<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['note-to-self']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['note-to-self'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/favorite', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavorite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].favorite.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/favorite', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavorite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['favorite']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].favorite.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/notify', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].notify.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/notify-calls',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCalls<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['notify-calls']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['notify-calls'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/description', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['description']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].description.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/object', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['object']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].object.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'breakout-rooms'
          ].participants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['breakout-rooms']['participants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'breakout-rooms'
          ].participants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/self',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelf<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['self']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].participants.self.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendees<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].attendees.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/public', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].public.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/public', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['public']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].public.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/read-only', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['read-only']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['read-only'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/listable', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['listable']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].listable.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mention-permissions',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mention-permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'mention-permissions'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/password', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['password']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].password.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/archive', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].archive.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/archive', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['archive']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].archive.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/preserve', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserve<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].preserve.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/preserve', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserve<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['preserve']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].preserve.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/tags', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].tags.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/important', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportant<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].important.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/important', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportant<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['important']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].important.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/sensitive', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].sensitive.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/sensitive', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['sensitive']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].sensitive.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/active',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].participants.active.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/active',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['active']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].participants.active.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/state',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].participants.state.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/moderators', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModerators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].moderators.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/moderators',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModerators<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['moderators']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].moderators.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/permissions/:mode',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsMode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['permissions'][':mode']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].permissions[
            ':mode'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees/permissions',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].attendees.permissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/attendees/permissions/all',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['attendees']['permissions']['all']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].attendees.permissions.all.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/webinar/lobby',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobby<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['lobby']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].webinar.lobby.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/webinar/sip', 'PUT'] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSip<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['webinar']['sip']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].webinar.sip.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/recording-consent',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['recording-consent']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'recording-consent'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/participants/resend-invitations',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['participants']['resend-invitations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].participants[
            'resend-invitations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/message-expiration',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpiration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['message-expiration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'message-expiration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/import-emails',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['import-emails']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['import-emails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilities<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].capabilities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilities<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['capabilities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].capabilities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/meeting', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeeting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['meeting']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].meeting.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mute', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].mute.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/mute', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['mute']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].mute.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSettingsUserKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/settings/user', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionSettingsUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionSettingsUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['user']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].settings.user.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/settings', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionSignalingSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionSignalingSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionSignalingTokenKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/:token', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionSignalingToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionSignalingTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionSignalingToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionSignalingTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSignalingTokenKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/:token', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionSignalingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionSignalingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling'][':token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling[':token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedTempUserAvatarKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/temp-user-avatar', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedTempUserAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedTempUserAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed['temp-user-avatar'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedTempUserAvatarKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/temp-user-avatar', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedTempUserAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedTempUserAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['temp-user-avatar']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed['temp-user-avatar'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecent<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads.recent.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecent<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads']['recent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads.recent.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreads<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['subscribed-threads'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreads<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat']['subscribed-threads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat['subscribed-threads'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
            ':threadId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
            ':threadId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:threadId',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':threadId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
            ':threadId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/chat/:token/threads/:messageId/notify',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotify<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['chat'][':token']['threads'][':messageId']['notify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].chat[':token'].threads[
            ':messageId'
          ].notify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][
            ':size'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSize<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][
            ':size'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDark<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][
            ':size'
          ].dark.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDark<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy']['new']['user-avatar'][':size']['dark']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy.new['user-avatar'][
            ':size'
          ].dark.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSize<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
            ':size'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSize<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
            ':size'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDark<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
            ':size'
          ].dark.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDark<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['proxy'][':token']['user-avatar'][':size']['dark']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].proxy[':token']['user-avatar'][
            ':size'
          ].dark.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation/:id',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation[':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation/:id',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionFederationInvitationKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/federation/invitation', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionFederationInvitation<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionFederationInvitationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionFederationInvitation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['federation']['invitation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionFederationInvitationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].federation.invitation.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/federation/active',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].federation.active.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/federation/active',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['federation']['active']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[
            ':token'
          ].federation.active.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/message', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['message']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].message.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/reaction/:messageId',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].reaction[
            ':messageId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/:token/reaction/:messageId',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot'][':token']['reaction'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot[':token'].reaction[
            ':messageId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/ask-features', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionBotAskFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['ask-features']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot['ask-features'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionBotAdminKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bot/admin', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionBotAdmin<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBotAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot.admin.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionBotAdmin<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bot']['admin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBotAdminKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bot.admin.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/certificate/expiration', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionCertificateExpiration<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].certificate.expiration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionCertificateExpiration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['certificate']['expiration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].certificate.expiration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/hostedsignalingserver/requesttrial',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrial<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['requesttrial']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[
            ':apiVersion'
          ].hostedsignalingserver.requesttrial.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/hostedsignalingserver/delete',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDelete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['hostedsignalingserver']['delete']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].hostedsignalingserver.delete.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserver<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id',
    'PUT',
  ] as const
}

export function usePutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/matrix/admin/homeserver/:id/test',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['matrix']['admin']['homeserver'][':id']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].matrix.admin.homeserver[
            ':id'
          ].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionBridgeVersionKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge/version', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionBridgeVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBridgeVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.version.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionBridgeVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionBridgeVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.version.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/bridge', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionBridge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionBridgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['bridge']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].bridge.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.welcome[':serverId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['welcome'][':serverId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.welcome[':serverId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSettingsSipKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/settings/sip', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionSettingsSip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionSettingsSipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['settings']['sip']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].settings.sip.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdKey(
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

export function useGetOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.welcome[':serverId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['welcome'][':serverId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.welcome[':serverId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackendKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/backend', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRecordingBackend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRecordingBackendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording']['backend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording.backend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/request-upload',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['request-upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'][
            'request-upload'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/recording/:token/store', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['recording'][':token']['store']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].recording[':token'].store.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/pin/:pin', keyArgs] as const
}

export function useGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPin<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].pin[':pin'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPin<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['pin'][':pin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'].pin[':pin'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/verify-dialin',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialin<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['verify-dialin'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/room/direct-dial-in', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialIn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room']['direct-dial-in']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room['direct-dial-in'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/verify-dialout',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialout<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['verify-dialout']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'verify-dialout'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/open-dial-in',
    'POST',
  ] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialIn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['open-dial-in']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token']['open-dial-in'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/spreed/api/:apiVersion/room/:token/rejected-dialout',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialout<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['room'][':token']['rejected-dialout']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].room[':token'][
            'rejected-dialout'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackendKey() {
  return ['ocs', '/ocs/v2.php/apps/spreed/api/:apiVersion/signaling/backend', 'POST'] as const
}

export function usePostOcsV2PhpAppsSpreedApiApiVersionSignalingBackend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsSpreedApiApiVersionSignalingBackendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['spreed']['api'][':apiVersion']['signaling']['backend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.spreed.api[':apiVersion'].signaling.backend.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
