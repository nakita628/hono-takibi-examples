import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplyYaraRulesKey() {
  return ['apply-yara-rules'] as const
}

export function getCleanKey() {
  return ['clean'] as const
}

export function getEmulationOutputKey() {
  return ['emulation-output'] as const
}

export function getGeneratePartialYaraRulesKey() {
  return ['generate-partial-yara-rules'] as const
}

export function getUnpackKey() {
  return ['unpack'] as const
}

export function getPostApplyYaraRulesKey() {
  return ['apply-yara-rules', '/apply-yara-rules', 'POST'] as const
}

export function usePostApplyYaraRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apply-yara-rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['apply-yara-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApplyYaraRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['apply-yara-rules']['$post']> },
      ) => parseResponse(client['apply-yara-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadCleanKey() {
  return ['clean', '/clean', 'HEAD'] as const
}

export function useHeadClean<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$head>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadCleanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.clean.$head(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmulationOutputKey() {
  return ['emulation-output', '/emulation-output', 'POST'] as const
}

export function usePostEmulationOutput<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['emulation-output']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['emulation-output']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmulationOutputKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['emulation-output']['$post']> },
      ) => parseResponse(client['emulation-output'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGeneratePartialYaraRulesKey() {
  return ['generate-partial-yara-rules', '/generate-partial-yara-rules', 'POST'] as const
}

export function usePostGeneratePartialYaraRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['generate-partial-yara-rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['generate-partial-yara-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeneratePartialYaraRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['generate-partial-yara-rules']['$post']> },
      ) => parseResponse(client['generate-partial-yara-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnpackKey() {
  return ['unpack', '/unpack', 'POST'] as const
}

export function usePostUnpack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unpack.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.unpack.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnpackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.unpack.$post> }) =>
        parseResponse(client.unpack.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
