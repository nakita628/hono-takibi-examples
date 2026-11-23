import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2013_04_01Key() {
  return ['2013-04-01'] as const
}

export function getPost20130401KeysigningkeyHostedZoneIdNameActivateKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey/:HostedZoneId/:Name/activate', 'POST'] as const
}

export function usePost20130401KeysigningkeyHostedZoneIdNameActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401KeysigningkeyHostedZoneIdNameActivateKey()
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
            (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdAssociatevpcKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/associatevpc', 'POST'] as const
}

export function usePost20130401HostedzoneIdAssociatevpc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdAssociatevpcKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].hostedzone[':Id'].associatevpc.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401CidrcollectionCidrCollectionIdKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', keyArgs] as const
}

export function useGet20130401CidrcollectionCidrCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
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
        ? getGet20130401CidrcollectionCidrCollectionIdKey(args)
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
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
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
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401CidrcollectionCidrCollectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
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
        ? getGet20130401CidrcollectionCidrCollectionIdKey(args)
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
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
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
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20130401CidrcollectionCidrCollectionIdKey() {
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', 'POST'] as const
}

export function usePost20130401CidrcollectionCidrCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401CidrcollectionCidrCollectionIdKey()
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
            (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20130401CidrcollectionCidrCollectionIdKey() {
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId', 'DELETE'] as const
}

export function useDelete20130401CidrcollectionCidrCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401CidrcollectionCidrCollectionIdKey()
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
            (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdRrsetIndexKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/rrset/', 'POST'] as const
}

export function usePost20130401HostedzoneIdRrsetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdRrsetIndexKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
          >
        },
      ) =>
        parseResponse(client['2013-04-01'].hostedzone[':Id'].rrset.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401TagsResourceTypeResourceIdKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType/:ResourceId', keyArgs] as const
}

export function useGet20130401TagsResourceTypeResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
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
        ? getGet20130401TagsResourceTypeResourceIdKey(args)
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
                (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
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
          client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TagsResourceTypeResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
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
        ? getGet20130401TagsResourceTypeResourceIdKey(args)
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
                (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
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
          client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20130401TagsResourceTypeResourceIdKey() {
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType/:ResourceId', 'POST'] as const
}

export function usePost20130401TagsResourceTypeResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TagsResourceTypeResourceIdKey()
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
            (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401CidrcollectionKey(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/cidrcollection', keyArgs] as const
}

export function useGet20130401Cidrcollection<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
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
        ? getGet20130401CidrcollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].cidrcollection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Cidrcollection<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
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
        ? getGet20130401CidrcollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].cidrcollection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401CidrcollectionKey() {
  return ['2013-04-01', '/2013-04-01/cidrcollection', 'POST'] as const
}

export function usePost20130401Cidrcollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['cidrcollection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401CidrcollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$post']> },
      ) => parseResponse(client['2013-04-01'].cidrcollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401HealthcheckKey(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheck', keyArgs] as const
}

export function useGet20130401Healthcheck<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
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
        ? getGet20130401HealthcheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].healthcheck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Healthcheck<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
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
        ? getGet20130401HealthcheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].healthcheck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401HealthcheckKey() {
  return ['2013-04-01', '/2013-04-01/healthcheck', 'POST'] as const
}

export function usePost20130401Healthcheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheck']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HealthcheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$post']> },
      ) => parseResponse(client['2013-04-01'].healthcheck.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401HostedzoneKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone', keyArgs] as const
}

export function useGet20130401Hostedzone<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
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
        ? getGet20130401HostedzoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Hostedzone<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
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
        ? getGet20130401HostedzoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401HostedzoneKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone', 'POST'] as const
}

export function usePost20130401Hostedzone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$post']> },
      ) => parseResponse(client['2013-04-01'].hostedzone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20130401KeysigningkeyKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey', 'POST'] as const
}

export function usePost20130401Keysigningkey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['keysigningkey']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['keysigningkey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401KeysigningkeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2013-04-01']['keysigningkey']['$post']> },
      ) => parseResponse(client['2013-04-01'].keysigningkey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401QueryloggingconfigKey(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/queryloggingconfig', keyArgs] as const
}

export function useGet20130401Queryloggingconfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
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
        ? getGet20130401QueryloggingconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].queryloggingconfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Queryloggingconfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
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
        ? getGet20130401QueryloggingconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].queryloggingconfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401QueryloggingconfigKey() {
  return ['2013-04-01', '/2013-04-01/queryloggingconfig', 'POST'] as const
}

export function usePost20130401Queryloggingconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401QueryloggingconfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']> },
      ) => parseResponse(client['2013-04-01'].queryloggingconfig.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401DelegationsetKey(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/delegationset', keyArgs] as const
}

export function useGet20130401Delegationset<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
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
        ? getGet20130401DelegationsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].delegationset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Delegationset<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
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
        ? getGet20130401DelegationsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].delegationset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401DelegationsetKey() {
  return ['2013-04-01', '/2013-04-01/delegationset', 'POST'] as const
}

export function usePost20130401Delegationset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['delegationset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401DelegationsetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$post']> },
      ) => parseResponse(client['2013-04-01'].delegationset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20130401TrafficpolicyKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy', 'POST'] as const
}

export function usePost20130401Trafficpolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TrafficpolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy']['$post']> },
      ) => parseResponse(client['2013-04-01'].trafficpolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20130401TrafficpolicyinstanceKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance', 'POST'] as const
}

export function usePost20130401Trafficpolicyinstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TrafficpolicyinstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>
        },
      ) => parseResponse(client['2013-04-01'].trafficpolicyinstance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20130401TrafficpolicyIdKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id', 'POST'] as const
}

export function usePost20130401TrafficpolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TrafficpolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>
        },
      ) => parseResponse(client['2013-04-01'].trafficpolicy[':Id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401HostedzoneIdAuthorizevpcassociationKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/authorizevpcassociation', keyArgs] as const
}

export function useGet20130401HostedzoneIdAuthorizevpcassociation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
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
        ? getGet20130401HostedzoneIdAuthorizevpcassociationKey(args)
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
                (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
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
          client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HostedzoneIdAuthorizevpcassociation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
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
        ? getGet20130401HostedzoneIdAuthorizevpcassociationKey(args)
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
                (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
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
          client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdAuthorizevpcassociationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/authorizevpcassociation', 'POST'] as const
}

export function usePost20130401HostedzoneIdAuthorizevpcassociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdAuthorizevpcassociationKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401KeysigningkeyHostedZoneIdNameDeactivateKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey/:HostedZoneId/:Name/deactivate', 'POST'] as const
}

export function usePost20130401KeysigningkeyHostedZoneIdNameDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401KeysigningkeyHostedZoneIdNameDeactivateKey()
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
            (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].deactivate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401HealthcheckHealthCheckIdKey(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', keyArgs] as const
}

export function useGet20130401HealthcheckHealthCheckId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
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
        ? getGet20130401HealthcheckHealthCheckIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].healthcheck[':HealthCheckId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HealthcheckHealthCheckId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
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
        ? getGet20130401HealthcheckHealthCheckIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].healthcheck[':HealthCheckId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401HealthcheckHealthCheckIdKey() {
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', 'POST'] as const
}

export function usePost20130401HealthcheckHealthCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HealthcheckHealthCheckIdKey()
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
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']
          >
        },
      ) =>
        parseResponse(client['2013-04-01'].healthcheck[':HealthCheckId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20130401HealthcheckHealthCheckIdKey() {
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId', 'DELETE'] as const
}

export function useDelete20130401HealthcheckHealthCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401HealthcheckHealthCheckIdKey()
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
            (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].healthcheck[':HealthCheckId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401HostedzoneIdKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', keyArgs] as const
}

export function useGet20130401HostedzoneId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
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
        ? getGet20130401HostedzoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzone[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HostedzoneId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
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
        ? getGet20130401HostedzoneIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzone[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', 'POST'] as const
}

export function usePost20130401HostedzoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']> },
      ) => parseResponse(client['2013-04-01'].hostedzone[':Id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20130401HostedzoneIdKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id', 'DELETE'] as const
}

export function useDelete20130401HostedzoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401HostedzoneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']> },
      ) => parseResponse(client['2013-04-01'].hostedzone[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20130401KeysigningkeyHostedZoneIdNameKey() {
  return ['2013-04-01', '/2013-04-01/keysigningkey/:HostedZoneId/:Name', 'DELETE'] as const
}

export function useDelete20130401KeysigningkeyHostedZoneIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401KeysigningkeyHostedZoneIdNameKey()
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
            (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401QueryloggingconfigIdKey(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/queryloggingconfig/:Id', keyArgs] as const
}

export function useGet20130401QueryloggingconfigId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
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
        ? getGet20130401QueryloggingconfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].queryloggingconfig[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401QueryloggingconfigId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
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
        ? getGet20130401QueryloggingconfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].queryloggingconfig[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20130401QueryloggingconfigIdKey() {
  return ['2013-04-01', '/2013-04-01/queryloggingconfig/:Id', 'DELETE'] as const
}

export function useDelete20130401QueryloggingconfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401QueryloggingconfigIdKey()
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
            (typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(client['2013-04-01'].queryloggingconfig[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401DelegationsetIdKey(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/delegationset/:Id', keyArgs] as const
}

export function useGet20130401DelegationsetId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
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
        ? getGet20130401DelegationsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].delegationset[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401DelegationsetId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
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
        ? getGet20130401DelegationsetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].delegationset[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20130401DelegationsetIdKey() {
  return ['2013-04-01', '/2013-04-01/delegationset/:Id', 'DELETE'] as const
}

export function useDelete20130401DelegationsetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401DelegationsetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>
        },
      ) => parseResponse(client['2013-04-01'].delegationset[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401TrafficpolicyIdVersionKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', keyArgs] as const
}

export function useGet20130401TrafficpolicyIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
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
        ? getGet20130401TrafficpolicyIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-04-01'].trafficpolicy[':Id'][':Version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TrafficpolicyIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
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
        ? getGet20130401TrafficpolicyIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-04-01'].trafficpolicy[':Id'][':Version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20130401TrafficpolicyIdVersionKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', 'POST'] as const
}

export function usePost20130401TrafficpolicyIdVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TrafficpolicyIdVersionKey()
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
            (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].trafficpolicy[':Id'][':Version'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20130401TrafficpolicyIdVersionKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicy/:Id/:Version', 'DELETE'] as const
}

export function useDelete20130401TrafficpolicyIdVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401TrafficpolicyIdVersionKey()
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
            (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].trafficpolicy[':Id'][':Version'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401TrafficpolicyinstanceIdKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', keyArgs] as const
}

export function useGet20130401TrafficpolicyinstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
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
        ? getGet20130401TrafficpolicyinstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TrafficpolicyinstanceId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
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
        ? getGet20130401TrafficpolicyinstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401TrafficpolicyinstanceIdKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', 'POST'] as const
}

export function usePost20130401TrafficpolicyinstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TrafficpolicyinstanceIdKey()
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
            (typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']
          >
        },
      ) =>
        parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20130401TrafficpolicyinstanceIdKey() {
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstance/:Id', 'DELETE'] as const
}

export function useDelete20130401TrafficpolicyinstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20130401TrafficpolicyinstanceIdKey()
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
            (typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].trafficpolicyinstance[':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdDeauthorizevpcassociationKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/deauthorizevpcassociation', 'POST'] as const
}

export function usePost20130401HostedzoneIdDeauthorizevpcassociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdDeauthorizevpcassociationKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].hostedzone[':Id'].deauthorizevpcassociation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdDisableDnssecKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/disable-dnssec', 'POST'] as const
}

export function usePost20130401HostedzoneIdDisableDnssec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdDisableDnssecKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].hostedzone[':Id']['disable-dnssec'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdDisassociatevpcKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/disassociatevpc', 'POST'] as const
}

export function usePost20130401HostedzoneIdDisassociatevpc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdDisassociatevpcKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].hostedzone[':Id'].disassociatevpc.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20130401HostedzoneIdEnableDnssecKey() {
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/enable-dnssec', 'POST'] as const
}

export function usePost20130401HostedzoneIdEnableDnssec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401HostedzoneIdEnableDnssecKey()
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
            (typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2013-04-01'].hostedzone[':Id']['enable-dnssec'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20130401AccountlimitTypeKey(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/accountlimit/:Type', keyArgs] as const
}

export function useGet20130401AccountlimitType<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
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
        ? getGet20130401AccountlimitTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].accountlimit[':Type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401AccountlimitType<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
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
        ? getGet20130401AccountlimitTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].accountlimit[':Type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401ChangeIdKey(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/change/:Id', keyArgs] as const
}

export function useGet20130401ChangeId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
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
        ? getGet20130401ChangeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].change[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401ChangeId<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
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
        ? getGet20130401ChangeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['change'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].change[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401CheckeriprangesKey(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/checkeripranges', keyArgs] as const
}

export function useGet20130401Checkeripranges<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
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
        ? getGet20130401CheckeriprangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].checkeripranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Checkeripranges<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
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
        ? getGet20130401CheckeriprangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['checkeripranges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].checkeripranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HostedzoneIdDnssecKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/dnssec', keyArgs] as const
}

export function useGet20130401HostedzoneIdDnssec<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
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
        ? getGet20130401HostedzoneIdDnssecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].hostedzone[':Id'].dnssec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HostedzoneIdDnssec<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
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
        ? getGet20130401HostedzoneIdDnssecKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].hostedzone[':Id'].dnssec.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401GeolocationKey(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/geolocation', keyArgs] as const
}

export function useGet20130401Geolocation<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
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
        ? getGet20130401GeolocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].geolocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Geolocation<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
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
        ? getGet20130401GeolocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocation']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].geolocation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HealthcheckcountKey(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheckcount', keyArgs] as const
}

export function useGet20130401Healthcheckcount<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
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
        ? getGet20130401HealthcheckcountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].healthcheckcount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Healthcheckcount<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
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
        ? getGet20130401HealthcheckcountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].healthcheckcount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HealthcheckHealthCheckIdLastfailurereasonKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2013-04-01',
    '/2013-04-01/healthcheck/:HealthCheckId/lastfailurereason',
    keyArgs,
  ] as const
}

export function useGet20130401HealthcheckHealthCheckIdLastfailurereason<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
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
        ? getGet20130401HealthcheckHealthCheckIdLastfailurereasonKey(args)
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
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
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
          client['2013-04-01'].healthcheck[':HealthCheckId'].lastfailurereason.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HealthcheckHealthCheckIdLastfailurereason<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
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
        ? getGet20130401HealthcheckHealthCheckIdLastfailurereasonKey(args)
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
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
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
          client['2013-04-01'].healthcheck[':HealthCheckId'].lastfailurereason.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HealthcheckHealthCheckIdStatusKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/healthcheck/:HealthCheckId/status', keyArgs] as const
}

export function useGet20130401HealthcheckHealthCheckIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
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
        ? getGet20130401HealthcheckHealthCheckIdStatusKey(args)
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
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
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
          client['2013-04-01'].healthcheck[':HealthCheckId'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HealthcheckHealthCheckIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
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
        ? getGet20130401HealthcheckHealthCheckIdStatusKey(args)
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
                (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
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
          client['2013-04-01'].healthcheck[':HealthCheckId'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HostedzonecountKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonecount', keyArgs] as const
}

export function useGet20130401Hostedzonecount<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
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
        ? getGet20130401HostedzonecountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzonecount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Hostedzonecount<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
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
        ? getGet20130401HostedzonecountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzonecount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HostedzonelimitIdTypeKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonelimit/:Id/:Type', keyArgs] as const
}

export function useGet20130401HostedzonelimitIdType<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
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
        ? getGet20130401HostedzonelimitIdTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-04-01'].hostedzonelimit[':Id'][':Type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HostedzonelimitIdType<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
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
        ? getGet20130401HostedzonelimitIdTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-04-01'].hostedzonelimit[':Id'][':Type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401ReusabledelegationsetlimitIdTypeKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/reusabledelegationsetlimit/:Id/:Type', keyArgs] as const
}

export function useGet20130401ReusabledelegationsetlimitIdType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
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
        ? getGet20130401ReusabledelegationsetlimitIdTypeKey(args)
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
                (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
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
          client['2013-04-01'].reusabledelegationsetlimit[':Id'][':Type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401ReusabledelegationsetlimitIdType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
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
        ? getGet20130401ReusabledelegationsetlimitIdTypeKey(args)
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
                (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
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
          client['2013-04-01'].reusabledelegationsetlimit[':Id'][':Type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401TrafficpolicyinstancecountKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstancecount', keyArgs] as const
}

export function useGet20130401Trafficpolicyinstancecount<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
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
        ? getGet20130401TrafficpolicyinstancecountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].trafficpolicyinstancecount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Trafficpolicyinstancecount<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
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
        ? getGet20130401TrafficpolicyinstancecountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].trafficpolicyinstancecount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401CidrcollectionCidrCollectionIdCidrblocksKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/cidrcollection/:CidrCollectionId/cidrblocks', keyArgs] as const
}

export function useGet20130401CidrcollectionCidrCollectionIdCidrblocks<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
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
        ? getGet20130401CidrcollectionCidrCollectionIdCidrblocksKey(args)
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
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
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
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].cidrblocks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401CidrcollectionCidrCollectionIdCidrblocks<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
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
        ? getGet20130401CidrcollectionCidrCollectionIdCidrblocksKey(args)
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
                (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
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
          client['2013-04-01'].cidrcollection[':CidrCollectionId'].cidrblocks.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401GeolocationsKey(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/geolocations', keyArgs] as const
}

export function useGet20130401Geolocations<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
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
        ? getGet20130401GeolocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].geolocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Geolocations<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
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
        ? getGet20130401GeolocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['geolocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].geolocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HostedzonesbynameKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonesbyname', keyArgs] as const
}

export function useGet20130401Hostedzonesbyname<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
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
        ? getGet20130401HostedzonesbynameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzonesbyname.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Hostedzonesbyname<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
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
        ? getGet20130401HostedzonesbynameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].hostedzonesbyname.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HostedzonesbyvpcVpcidVpcregionKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzonesbyvpc#vpcid&vpcregion', keyArgs] as const
}

export function useGet20130401HostedzonesbyvpcVpcidVpcregion<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
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
        ? getGet20130401HostedzonesbyvpcVpcidVpcregionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HostedzonesbyvpcVpcidVpcregion<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
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
        ? getGet20130401HostedzonesbyvpcVpcidVpcregionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401HostedzoneIdRrsetKey(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/hostedzone/:Id/rrset', keyArgs] as const
}

export function useGet20130401HostedzoneIdRrset<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
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
        ? getGet20130401HostedzoneIdRrsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].hostedzone[':Id'].rrset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401HostedzoneIdRrset<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
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
        ? getGet20130401HostedzoneIdRrsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].hostedzone[':Id'].rrset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20130401TagsResourceTypeKey() {
  return ['2013-04-01', '/2013-04-01/tags/:ResourceType', 'POST'] as const
}

export function usePost20130401TagsResourceType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20130401TagsResourceTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>
        },
      ) => parseResponse(client['2013-04-01'].tags[':ResourceType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20130401TrafficpoliciesKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicies', keyArgs] as const
}

export function useGet20130401Trafficpolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
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
        ? getGet20130401TrafficpoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].trafficpolicies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Trafficpolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
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
        ? getGet20130401TrafficpoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2013-04-01'].trafficpolicies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401TrafficpolicyinstancesKey(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstances', keyArgs] as const
}

export function useGet20130401Trafficpolicyinstances<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
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
        ? getGet20130401TrafficpolicyinstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].trafficpolicyinstances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401Trafficpolicyinstances<TError = unknown>(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
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
        ? getGet20130401TrafficpolicyinstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2013-04-01'].trafficpolicyinstances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20130401TrafficpolicyinstancesHostedzoneIdKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicyinstances/hostedzone#id', keyArgs] as const
}

export function useGet20130401TrafficpolicyinstancesHostedzoneId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
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
        ? getGet20130401TrafficpolicyinstancesHostedzoneIdKey(args)
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
                (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
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
          client['2013-04-01'].trafficpolicyinstances['hostedzone#id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TrafficpolicyinstancesHostedzoneId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
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
        ? getGet20130401TrafficpolicyinstancesHostedzoneIdKey(args)
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
                (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
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
          client['2013-04-01'].trafficpolicyinstances['hostedzone#id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401TrafficpolicyinstancesTrafficpolicyIdVersionKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2013-04-01',
    '/2013-04-01/trafficpolicyinstances/trafficpolicy#id&version',
    keyArgs,
  ] as const
}

export function useGet20130401TrafficpolicyinstancesTrafficpolicyIdVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
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
        ? getGet20130401TrafficpolicyinstancesTrafficpolicyIdVersionKey(args)
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
                (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
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
          client['2013-04-01'].trafficpolicyinstances['trafficpolicy#id&version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TrafficpolicyinstancesTrafficpolicyIdVersion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
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
        ? getGet20130401TrafficpolicyinstancesTrafficpolicyIdVersionKey(args)
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
                (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
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
          client['2013-04-01'].trafficpolicyinstances['trafficpolicy#id&version'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401TrafficpoliciesIdVersionsKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2013-04-01', '/2013-04-01/trafficpolicies/:Id/versions', keyArgs] as const
}

export function useGet20130401TrafficpoliciesIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
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
        ? getGet20130401TrafficpoliciesIdVersionsKey(args)
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
                (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
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
          client['2013-04-01'].trafficpolicies[':Id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TrafficpoliciesIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
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
        ? getGet20130401TrafficpoliciesIdVersionsKey(args)
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
                (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
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
          client['2013-04-01'].trafficpolicies[':Id'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20130401TestdnsanswerHostedzoneidRecordnameRecordtypeKey(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2013-04-01',
    '/2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype',
    keyArgs,
  ] as const
}

export function useGet20130401TestdnsanswerHostedzoneidRecordnameRecordtype<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
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
        ? getGet20130401TestdnsanswerHostedzoneidRecordnameRecordtypeKey(args)
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
                (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
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
          client['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20130401TestdnsanswerHostedzoneidRecordnameRecordtype<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
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
        ? getGet20130401TestdnsanswerHostedzoneidRecordnameRecordtypeKey(args)
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
                (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
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
          client['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
