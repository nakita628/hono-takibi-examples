import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2010_04_01Key() {
  return ['2010-04-01'] as const
}

export function getGet20100401AccountsJsonKey(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
) {
  return ['2010-04-01', '/2010-04-01/Accounts.json', args] as const
}

export function useGet20100401AccountsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
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
        ? getGet20100401AccountsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2010-04-01']['Accounts.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
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
        ? getGet20100401AccountsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2010-04-01']['Accounts.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts.json', 'POST'] as const
}

export function usePost20100401AccountsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2010-04-01']['Accounts.json']['$post']> },
      ) => parseResponse(client['2010-04-01']['Accounts.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsSidJsonKey(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:Sid.json', args] as const
}

export function useGet20100401AccountsSidJson<TError = unknown>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
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
        ? getGet20100401AccountsSidJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2010-04-01'].Accounts[':Sid.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsSidJson<TError = unknown>(
  args: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
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
        ? getGet20100401AccountsSidJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2010-04-01'].Accounts[':Sid.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsSidJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2010-04-01']['Accounts'][':Sid.json']['$post']>
        },
      ) => parseResponse(client['2010-04-01'].Accounts[':Sid.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAddressesJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses.json', args] as const
}

export function useGet20100401AccountsAccountSidAddressesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
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
        ? getGet20100401AccountsAccountSidAddressesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAddressesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
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
        ? getGet20100401AccountsAccountSidAddressesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidAddressesJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidAddressesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidAddressesJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Addresses.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAddressesSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidAddressesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidAddressesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAddressesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidAddressesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidAddressesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidAddressesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidAddressesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidAddressesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Addresses/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidAddressesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidAddressesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidApplicationsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications.json', args] as const
}

export function useGet20100401AccountsAccountSidApplicationsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
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
        ? getGet20100401AccountsAccountSidApplicationsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidApplicationsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
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
        ? getGet20100401AccountsAccountSidApplicationsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidApplicationsJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidApplicationsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidApplicationsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Applications.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidApplicationsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidApplicationsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidApplicationsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidApplicationsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidApplicationsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidApplicationsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidApplicationsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidApplicationsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidApplicationsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Applications/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidApplicationsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidApplicationsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Applications'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Applications[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps/:ConnectAppSid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
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
        ? getGet20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AuthorizedConnectApps[
            ':ConnectAppSid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
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
        ? getGet20100401AccountsAccountSidAuthorizedConnectAppsConnectAppSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps'][':ConnectAppSid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AuthorizedConnectApps[
            ':ConnectAppSid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAuthorizedConnectAppsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AuthorizedConnectApps.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAuthorizedConnectAppsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
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
        ? getGet20100401AccountsAccountSidAuthorizedConnectAppsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['AuthorizedConnectApps.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAuthorizedConnectAppsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
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
        ? getGet20100401AccountsAccountSidAuthorizedConnectAppsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AuthorizedConnectApps.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['AuthorizedConnectApps.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['AvailablePhoneNumbers.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['AvailablePhoneNumbers.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[
            ':CountryCode.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[
            ':CountryCode.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Local.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Local.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeLocalJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Local.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Local.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/MachineToMachine.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'MachineToMachine.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMachineToMachineJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['MachineToMachine.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'MachineToMachine.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Mobile.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Mobile.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeMobileJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Mobile.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Mobile.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/National.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'National.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeNationalJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['National.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'National.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/SharedCost.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'SharedCost.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeSharedCostJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['SharedCost.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'SharedCost.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/TollFree.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'TollFree.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeTollFreeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['TollFree.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'TollFree.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/AvailablePhoneNumbers/:CountryCode/Voip.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Voip.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
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
        ? getGet20100401AccountsAccountSidAvailablePhoneNumbersCountryCodeVoipJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['AvailablePhoneNumbers'][':CountryCode']['Voip.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].AvailablePhoneNumbers[':CountryCode'][
            'Voip.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidBalanceJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Balance.json', args] as const
}

export function useGet20100401AccountsAccountSidBalanceJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
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
        ? getGet20100401AccountsAccountSidBalanceJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Balance.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidBalanceJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
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
        ? getGet20100401AccountsAccountSidBalanceJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Balance.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Balance.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls.json', args] as const
}

export function useGet20100401AccountsAccountSidCallsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidCallsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Calls.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidCallsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidCallsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidCallsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Calls/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidCallsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidCallsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsCallSidEventsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Events.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidCallsCallSidEventsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidEventsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Events.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsCallSidEventsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidEventsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Events.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Events.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsCallSidNotificationsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidCallsCallSidNotificationsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidNotificationsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Notifications[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsCallSidNotificationsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidNotificationsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Notifications[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsCallSidNotificationsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Notifications.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidCallsCallSidNotificationsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidNotificationsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Notifications.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsCallSidNotificationsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidNotificationsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Notifications.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Notifications.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsCallSidRecordingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidCallsCallSidRecordingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidRecordingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsCallSidRecordingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidRecordingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidRecordingsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidRecordingsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidRecordingsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Recordings.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidCallsCallSidRecordingsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
            ':Sid.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Recordings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidCallsCallSidRecordingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Recordings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Recordings[
            ':Sid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConferencesSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidConferencesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConferencesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidConferencesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidConferencesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidConferencesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConferencesJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Conferences.json', args] as const
}

export function useGet20100401AccountsAccountSidConferencesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Conferences.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConferencesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Conferences.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidConferencesConferenceSidRecordingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Recordings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConferencesConferenceSidRecordingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidRecordingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Recordings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
            ':Sid.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Recordings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20100401AccountsAccountSidConferencesConferenceSidRecordingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Recordings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Recordings[
            ':Sid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConnectAppsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidConnectAppsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConnectAppsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConnectAppsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConnectAppsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidConnectAppsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidConnectAppsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidConnectAppsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidConnectAppsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidConnectAppsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidConnectAppsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].ConnectApps[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConnectAppsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/ConnectApps.json', args] as const
}

export function useGet20100401AccountsAccountSidConnectAppsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
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
        ? getGet20100401AccountsAccountSidConnectAppsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['ConnectApps.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConnectAppsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
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
        ? getGet20100401AccountsAccountSidConnectAppsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['ConnectApps.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['ConnectApps.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Addresses/:AddressSid/DependentPhoneNumbers.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
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
        ? getGet20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':AddressSid'][
            'DependentPhoneNumbers.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
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
        ? getGet20100401AccountsAccountSidAddressesAddressSidDependentPhoneNumbersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Addresses'][':AddressSid']['DependentPhoneNumbers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Addresses[':AddressSid'][
            'DependentPhoneNumbers.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidIncomingPhoneNumbersSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json', args] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidIncomingPhoneNumbersJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['IncomingPhoneNumbers.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
            'AssignedAddOns.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
            'AssignedAddOns.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[':ResourceSid'][
            'AssignedAddOns.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':AssignedAddOnSid'].Extensions[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':AssignedAddOnSid'].Extensions[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/:ResourceSid/AssignedAddOns/:AssignedAddOnSid/Extensions.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':AssignedAddOnSid']['Extensions.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersResourceSidAssignedAddOnsAssignedAddOnSidExtensionsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers'][':ResourceSid']['AssignedAddOns'][':AssignedAddOnSid']['Extensions.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers[
            ':ResourceSid'
          ].AssignedAddOns[':AssignedAddOnSid']['Extensions.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersLocalJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersLocalJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Local.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersLocalJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidIncomingPhoneNumbersLocalJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Local.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Local.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersMobileJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersMobileJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/Mobile.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersMobileJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidIncomingPhoneNumbersMobileJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['Mobile.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['Mobile.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
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
        ? getGet20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/IncomingPhoneNumbers/TollFree.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidIncomingPhoneNumbersTollFreeJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['IncomingPhoneNumbers']['TollFree.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].IncomingPhoneNumbers['TollFree.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidKeysSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidKeysSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidKeysSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidKeysSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidKeysSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidKeysSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidKeysSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidKeysSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidKeysSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidKeysSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidKeysSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Keys[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidKeysJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys.json', args] as const
}

export function useGet20100401AccountsAccountSidKeysJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
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
        ? getGet20100401AccountsAccountSidKeysJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidKeysJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
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
        ? getGet20100401AccountsAccountSidKeysJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidKeysJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Keys.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidKeysJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidKeysJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Keys.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Keys.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidMessagesMessageSidMediaSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidMessagesMessageSidMediaSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesMessageSidMediaSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidMessagesMessageSidMediaSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesMessageSidMediaSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidMessagesMessageSidMediaSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'].Media[
            ':Sid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidMessagesMessageSidMediaJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Media.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidMessagesMessageSidMediaJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesMessageSidMediaJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Media.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidMessagesMessageSidMediaJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesMessageSidMediaJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Media.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid']['Media.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
            ':CallSid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
            ':CallSid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members/:CallSid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members'][':CallSid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid'].Members[
            ':CallSid.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidQueuesQueueSidMembersJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Queues/:QueueSid/Members.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidQueuesQueueSidMembersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesQueueSidMembersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid']['Members.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidQueuesQueueSidMembersJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesQueueSidMembersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':QueueSid']['Members.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':QueueSid']['Members.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidMessagesJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages.json', args] as const
}

export function useGet20100401AccountsAccountSidMessagesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidMessagesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidMessagesJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidMessagesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidMessagesJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Messages.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidMessagesSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidMessagesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidMessagesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidMessagesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidMessagesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidMessagesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidMessagesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidMessagesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Messages/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidMessagesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidMessagesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidMessagesMessageSidFeedbackJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Messages/:MessageSid/Feedback.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidMessagesMessageSidFeedbackJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidMessagesMessageSidFeedbackJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Messages'][':MessageSid']['Feedback.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Messages[':MessageSid'][
            'Feedback.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSigningKeysJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys.json', args] as const
}

export function useGet20100401AccountsAccountSidSigningKeysJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
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
        ? getGet20100401AccountsAccountSidSigningKeysJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSigningKeysJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
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
        ? getGet20100401AccountsAccountSidSigningKeysJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSigningKeysJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidSigningKeysJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSigningKeysJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['SigningKeys.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidNotificationsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Notifications/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidNotificationsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidNotificationsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Notifications[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidNotificationsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidNotificationsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Notifications[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidNotificationsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Notifications.json', args] as const
}

export function useGet20100401AccountsAccountSidNotificationsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
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
        ? getGet20100401AccountsAccountSidNotificationsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Notifications.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidNotificationsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
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
        ? getGet20100401AccountsAccountSidNotificationsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Notifications.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Notifications.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidOutgoingCallerIdsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidOutgoingCallerIdsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidOutgoingCallerIdsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidOutgoingCallerIdsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidOutgoingCallerIdsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].OutgoingCallerIds[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidOutgoingCallerIdsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json', args] as const
}

export function useGet20100401AccountsAccountSidOutgoingCallerIdsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
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
        ? getGet20100401AccountsAccountSidOutgoingCallerIdsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidOutgoingCallerIdsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
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
        ? getGet20100401AccountsAccountSidOutgoingCallerIdsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidOutgoingCallerIdsJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/OutgoingCallerIds.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidOutgoingCallerIdsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidOutgoingCallerIdsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['OutgoingCallerIds.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['OutgoingCallerIds.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
            ':CallSid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
            ':CallSid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
            ':CallSid.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants/:CallSid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidConferencesConferenceSidParticipantsCallSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants'][':CallSid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'].Participants[
            ':CallSid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidConferencesConferenceSidParticipantsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Participants.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidConferencesConferenceSidParticipantsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
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
        ? getGet20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Participants.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Conferences/:ConferenceSid/Participants.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidConferencesConferenceSidParticipantsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20100401AccountsAccountSidConferencesConferenceSidParticipantsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Conferences'][':ConferenceSid']['Participants.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Conferences[':ConferenceSid'][
            'Participants.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidPaymentsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidPaymentsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidPaymentsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Payments.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidPaymentsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Payments/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidPaymentsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidPaymentsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Payments'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Payments[
            ':Sid.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidQueuesSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidQueuesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidQueuesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidQueuesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidQueuesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidQueuesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidQueuesSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidQueuesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidQueuesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Queues[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidQueuesJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues.json', args] as const
}

export function useGet20100401AccountsAccountSidQueuesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidQueuesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
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
        ? getGet20100401AccountsAccountSidQueuesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidQueuesJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Queues.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidQueuesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidQueuesJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Queues.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Queues.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidTranscriptionsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Transcriptions.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidTranscriptionsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidTranscriptionsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
            'Transcriptions.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Transcriptions/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20100401AccountsAccountSidCallsCallSidTranscriptionsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Transcriptions'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Transcriptions[
            ':Sid.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidRecordingsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidRecordingsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidRecordingsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidRecordingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Recordings.json', args] as const
}

export function useGet20100401AccountsAccountSidRecordingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Recordings.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Recordings.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':Sid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'][
            'AddOnResults.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'][
            'AddOnResults.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ]['Payloads.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ]['Payloads.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:ReferenceSid/AddOnResults/:AddOnResultSid/Payloads/:PayloadSid/Data.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':PayloadSid']['Data.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsReferenceSidAddOnResultsAddOnResultSidPayloadsPayloadSidDataJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':ReferenceSid']['AddOnResults'][':AddOnResultSid']['Payloads'][':PayloadSid']['Data.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':ReferenceSid'].AddOnResults[
            ':AddOnResultSid'
          ].Payloads[':PayloadSid']['Data.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
            ':Sid.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'].Transcriptions[
            ':Sid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Recordings/:RecordingSid/Transcriptions.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'][
            'Transcriptions.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
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
        ? getGet20100401AccountsAccountSidRecordingsRecordingSidTranscriptionsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Recordings'][':RecordingSid']['Transcriptions.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Recordings[':RecordingSid'][
            'Transcriptions.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSMSShortCodesSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidSMSShortCodesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSMSShortCodesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSMSShortCodesSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSMSShortCodesSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSMSShortCodesSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSMSShortCodesSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSMSShortCodesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SMS.ShortCodes[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSMSShortCodesJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SMS/ShortCodes.json', args] as const
}

export function useGet20100401AccountsAccountSidSMSShortCodesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
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
        ? getGet20100401AccountsAccountSidSMSShortCodesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SMS['ShortCodes.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSMSShortCodesJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
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
        ? getGet20100401AccountsAccountSidSMSShortCodesJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SMS']['ShortCodes.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SMS['ShortCodes.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSigningKeysSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidSigningKeysSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSigningKeysSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSigningKeysSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSigningKeysSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSigningKeysSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidSigningKeysSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSigningKeysSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSigningKeysSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SigningKeys/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidSigningKeysSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidSigningKeysSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SigningKeys'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SigningKeys[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'CredentialListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'CredentialListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'CredentialListMappings.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.CredentialListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.CredentialListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/CredentialListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsCredentialListMappingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['CredentialListMappings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.CredentialListMappings[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'IpAccessControlListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'IpAccessControlListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Calls[
            'IpAccessControlListMappings.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Calls/IpAccessControlListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthCallsIpAccessControlListMappingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Calls']['IpAccessControlListMappings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Calls.IpAccessControlListMappings[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
            'CredentialListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
            'CredentialListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'].Auth.Registrations[
            'CredentialListMappings.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Registrations.CredentialListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Registrations.CredentialListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/Auth/Registrations/CredentialListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidAuthRegistrationsCredentialListMappingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['Auth']['Registrations']['CredentialListMappings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].Auth.Registrations.CredentialListMappings[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
            'Credentials.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
            'Credentials.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':CredentialListSid'][
            'Credentials.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
            ':CredentialListSid'
          ].Credentials[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
            ':CredentialListSid'
          ].Credentials[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
            ':CredentialListSid'
          ].Credentials[':Sid.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:CredentialListSid/Credentials/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPCredentialListsCredentialListSidCredentialsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':CredentialListSid']['Credentials'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[
            ':CredentialListSid'
          ].Credentials[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPCredentialListsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists.json', args] as const
}

export function useGet20100401AccountsAccountSidSIPCredentialListsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPCredentialListsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPCredentialListsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPCredentialListsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSIPCredentialListsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP['CredentialLists.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPCredentialListsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPCredentialListsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPCredentialListsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPCredentialListsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPCredentialListsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPCredentialListsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSIPCredentialListsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPCredentialListsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/CredentialLists/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPCredentialListsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidSIPCredentialListsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['CredentialLists'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.CredentialLists[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'CredentialListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'CredentialListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'CredentialListMappings.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].CredentialListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].CredentialListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/CredentialListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidCredentialListMappingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['CredentialListMappings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].CredentialListMappings[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains.json', args] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSIPDomainsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP['Domains.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSIPDomainsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPDomainsSidJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:Sid.json', 'DELETE'] as const
}

export function useDelete20100401AccountsAccountSidSIPDomainsSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidSIPDomainsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPIpAccessControlListsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPIpAccessControlListsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPIpAccessControlListsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSIPIpAccessControlListsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP['IpAccessControlLists.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPIpAccessControlListsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidSIPIpAccessControlListsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':Sid.json'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].IpAccessControlListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].IpAccessControlListMappings[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[
            ':DomainSid'
          ].IpAccessControlListMappings[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'IpAccessControlListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'IpAccessControlListMappings.json'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/Domains/:DomainSid/IpAccessControlListMappings.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPDomainsDomainSidIpAccessControlListMappingsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['Domains'][':DomainSid']['IpAccessControlListMappings.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.Domains[':DomainSid'][
            'IpAccessControlListMappings.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ]['IpAddresses.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ]['IpAddresses.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ]['IpAddresses.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ].IpAddresses[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey(
            args,
          )
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ].IpAddresses[':Sid.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ].IpAddresses[':Sid.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/SIP/IpAccessControlLists/:IpAccessControlListSid/IpAddresses/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidSIPIpAccessControlListsIpAccessControlListSidIpAddressesSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['SIP']['IpAccessControlLists'][':IpAccessControlListSid']['IpAddresses'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].SIP.IpAccessControlLists[
            ':IpAccessControlListSid'
          ].IpAddresses[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidSiprecJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Siprec.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidSiprecJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidSiprecJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Siprec.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidSiprecSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Siprec/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidSiprecSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidSiprecSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Siprec'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Siprec[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidStreamsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Streams.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidStreamsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidStreamsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid']['Streams.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidStreamsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/Streams/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidStreamsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidCallsCallSidStreamsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['Streams'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'].Streams[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidTokensJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Tokens.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidTokensJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidTokensJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Tokens.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid']['Tokens.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidTranscriptionsSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Transcriptions/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidTranscriptionsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidTranscriptionsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidTranscriptionsSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidTranscriptionsSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidTranscriptionsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Transcriptions/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidTranscriptionsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidTranscriptionsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Transcriptions[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidTranscriptionsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Transcriptions.json', args] as const
}

export function useGet20100401AccountsAccountSidTranscriptionsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
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
        ? getGet20100401AccountsAccountSidTranscriptionsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Transcriptions.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidTranscriptionsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
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
        ? getGet20100401AccountsAccountSidTranscriptionsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Transcriptions.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid']['Transcriptions.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records.json', args] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Records.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Records.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsAllTimeJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/AllTime.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsAllTimeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsAllTimeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['AllTime.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsAllTimeJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsAllTimeJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['AllTime.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['AllTime.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsDailyJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records/Daily.json', args] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsDailyJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsDailyJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Daily.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsDailyJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsDailyJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Daily.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Daily.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsLastMonthJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/LastMonth.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsLastMonthJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsLastMonthJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['LastMonth.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsLastMonthJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsLastMonthJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['LastMonth.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['LastMonth.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsMonthlyJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Monthly.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsMonthlyJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsMonthlyJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Monthly.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsMonthlyJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsMonthlyJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Monthly.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Monthly.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsThisMonthJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/ThisMonth.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsThisMonthJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsThisMonthJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['ThisMonth.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsThisMonthJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsThisMonthJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['ThisMonth.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['ThisMonth.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsTodayJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records/Today.json', args] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsTodayJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsTodayJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Today.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsTodayJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsTodayJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Today.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Today.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsYearlyJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yearly.json', args] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsYearlyJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsYearlyJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yearly.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsYearlyJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsYearlyJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yearly.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yearly.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageRecordsYesterdayJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
) {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Records/Yesterday.json',
    args,
  ] as const
}

export function useGet20100401AccountsAccountSidUsageRecordsYesterdayJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsYesterdayJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yesterday.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageRecordsYesterdayJson<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageRecordsYesterdayJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Records']['Yesterday.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Records['Yesterday.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageTriggersSidJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json', args] as const
}

export function useGet20100401AccountsAccountSidUsageTriggersSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageTriggersSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageTriggersSidJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageTriggersSidJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidUsageTriggersSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidUsageTriggersSidJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidUsageTriggersSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidUsageTriggersSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Usage/Triggers/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidUsageTriggersSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20100401AccountsAccountSidUsageTriggersSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage.Triggers[':Sid.json'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20100401AccountsAccountSidUsageTriggersJsonKey(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
) {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Triggers.json', args] as const
}

export function useGet20100401AccountsAccountSidUsageTriggersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageTriggersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20100401AccountsAccountSidUsageTriggersJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
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
        ? getGet20100401AccountsAccountSidUsageTriggersJsonKey(args)
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
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$get']
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
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidUsageTriggersJsonKey() {
  return ['2010-04-01', '/2010-04-01/Accounts/:AccountSid/Usage/Triggers.json', 'POST'] as const
}

export function usePost20100401AccountsAccountSidUsageTriggersJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20100401AccountsAccountSidUsageTriggersJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Usage']['Triggers.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Usage['Triggers.json'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessages.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessages.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
            'UserDefinedMessages.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessageSubscriptions.json',
    'POST',
  ] as const
}

export function usePost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPost20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[':CallSid'][
            'UserDefinedMessageSubscriptions.json'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonKey() {
  return [
    '2010-04-01',
    '/2010-04-01/Accounts/:AccountSid/Calls/:CallSid/UserDefinedMessageSubscriptions/:Sid.json',
    'DELETE',
  ] as const
}

export function useDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJson<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDelete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonKey()
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
            (typeof client)['2010-04-01']['Accounts'][':AccountSid']['Calls'][':CallSid']['UserDefinedMessageSubscriptions'][':Sid.json']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2010-04-01'].Accounts[':AccountSid'].Calls[
            ':CallSid'
          ].UserDefinedMessageSubscriptions[':Sid.json'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
