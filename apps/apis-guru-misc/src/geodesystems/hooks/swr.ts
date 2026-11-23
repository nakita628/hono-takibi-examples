import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRepositoryKey() {
  return ['repository'] as const
}

export function getGetRepositoryEntryShowKey(
  args: InferRequestType<typeof client.repository.entry.show.$get>,
) {
  return ['repository', '/repository/entry/show', args] as const
}

export function useGetRepositoryEntryShow<TError = unknown>(
  args: InferRequestType<typeof client.repository.entry.show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositoryEntryShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.entry.show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositoryEntryShow<TError = unknown>(
  args: InferRequestType<typeof client.repository.entry.show.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositoryEntryShowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.entry.show.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.entry.show.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchType2017BoulderElectionExpendituresKey(
  args: InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
) {
  return ['repository', '/repository/search/type/2017_boulder_election_expenditures', args] as const
}

export function useGetRepositorySearchType2017BoulderElectionExpenditures<TError = unknown>(
  args: InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchType2017BoulderElectionExpendituresKey(args)
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
                (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type['2017_boulder_election_expenditures'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchType2017BoulderElectionExpenditures<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchType2017BoulderElectionExpendituresKey(args)
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
                (typeof client.repository.search.type)['2017_boulder_election_expenditures']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type['2017_boulder_election_expenditures'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeAnyKey(
  args: InferRequestType<typeof client.repository.search.type.any.$get>,
) {
  return ['repository', '/repository/search/type/any', args] as const
}

export function useGetRepositorySearchTypeAny<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.any.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeAnyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.any.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeAny<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.any.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeAnyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.any.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.any.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBeforeafterKey(
  args: InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
) {
  return ['repository', '/repository/search/type/beforeafter', args] as const
}

export function useGetRepositorySearchTypeBeforeafter<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBeforeafterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.beforeafter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBeforeafter<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.beforeafter.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBeforeafterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.beforeafter.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.beforeafter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBiblioKey(
  args: InferRequestType<typeof client.repository.search.type.biblio.$get>,
) {
  return ['repository', '/repository/search/type/biblio', args] as const
}

export function useGetRepositorySearchTypeBiblio<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.biblio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBiblioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.biblio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBiblio<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.biblio.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBiblioKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.biblio.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.biblio.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioDicomKey(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
) {
  return ['repository', '/repository/search/type/bio_dicom', args] as const
}

export function useGetRepositorySearchTypeBioDicom<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioDicomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_dicom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioDicom<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioDicomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_dicom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioDicomTestKey(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
) {
  return ['repository', '/repository/search/type/bio_dicom_test', args] as const
}

export function useGetRepositorySearchTypeBioDicomTest<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioDicomTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_dicom_test.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioDicomTest<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_dicom_test.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioDicomTestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_dicom_test.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_dicom_test.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioFastaKey(
  args: InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
) {
  return ['repository', '/repository/search/type/bio_fasta', args] as const
}

export function useGetRepositorySearchTypeBioFasta<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioFastaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_fasta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioFasta<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_fasta.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioFastaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fasta.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_fasta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioFastqKey(
  args: InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
) {
  return ['repository', '/repository/search/type/bio_fastq', args] as const
}

export function useGetRepositorySearchTypeBioFastq<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioFastqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_fastq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioFastq<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_fastq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioFastqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_fastq.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_fastq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioHmmerIndexKey(
  args: InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
) {
  return ['repository', '/repository/search/type/bio_hmmer_index', args] as const
}

export function useGetRepositorySearchTypeBioHmmerIndex<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioHmmerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_hmmer_index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioHmmerIndex<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_hmmer_index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioHmmerIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_hmmer_index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_hmmer_index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOmeTiffKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
) {
  return ['repository', '/repository/search/type/bio_ome_tiff', args] as const
}

export function useGetRepositorySearchTypeBioOmeTiff<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOmeTiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ome_tiff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOmeTiff<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ome_tiff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOmeTiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ome_tiff.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ome_tiff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOntologyAssayKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_assay', args] as const
}

export function useGetRepositorySearchTypeBioOntologyAssay<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyAssayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_assay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOntologyAssay<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_assay.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyAssayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_assay.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_assay.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOntologyCohortKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_cohort', args] as const
}

export function useGetRepositorySearchTypeBioOntologyCohort<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyCohortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_cohort.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOntologyCohort<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_cohort.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyCohortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_cohort.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_cohort.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOntologyPersonKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_person', args] as const
}

export function useGetRepositorySearchTypeBioOntologyPerson<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyPersonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_person.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOntologyPerson<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_person.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyPersonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_person.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_person.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOntologySampleKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_sample', args] as const
}

export function useGetRepositorySearchTypeBioOntologySample<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologySampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_sample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOntologySample<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_sample.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologySampleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_sample.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_sample.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOntologySeriesKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_series', args] as const
}

export function useGetRepositorySearchTypeBioOntologySeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologySeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOntologySeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologySeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioOntologyStudyKey(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
) {
  return ['repository', '/repository/search/type/bio_ontology_study', args] as const
}

export function useGetRepositorySearchTypeBioOntologyStudy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioOntologyStudy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_ontology_study.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioOntologyStudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_ontology_study.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_ontology_study.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioSamKey(
  args: InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
) {
  return ['repository', '/repository/search/type/bio_sam', args] as const
}

export function useGetRepositorySearchTypeBioSam<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioSamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_sam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioSam<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_sam.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioSamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sam.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_sam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioSfPdbKey(
  args: InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
) {
  return ['repository', '/repository/search/type/bio_sf_pdb', args] as const
}

export function useGetRepositorySearchTypeBioSfPdb<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioSfPdbKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_sf_pdb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioSfPdb<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_sf_pdb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioSfPdbKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sf_pdb.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_sf_pdb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioSraKey(
  args: InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
) {
  return ['repository', '/repository/search/type/bio_sra', args] as const
}

export function useGetRepositorySearchTypeBioSra<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioSraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_sra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioSra<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_sra.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioSraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_sra.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bio_sra.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioStockholmKey(
  args: InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
) {
  return ['repository', '/repository/search/type/bio_stockholm', args] as const
}

export function useGetRepositorySearchTypeBioStockholm<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioStockholmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_stockholm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioStockholm<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_stockholm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioStockholmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_stockholm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_stockholm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBioTaxonomyKey(
  args: InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
) {
  return ['repository', '/repository/search/type/bio_taxonomy', args] as const
}

export function useGetRepositorySearchTypeBioTaxonomy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioTaxonomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_taxonomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBioTaxonomy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bio_taxonomy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBioTaxonomyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bio_taxonomy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.bio_taxonomy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBlogentryKey(
  args: InferRequestType<typeof client.repository.search.type.blogentry.$get>,
) {
  return ['repository', '/repository/search/type/blogentry', args] as const
}

export function useGetRepositorySearchTypeBlogentry<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.blogentry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBlogentryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.blogentry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBlogentry<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.blogentry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBlogentryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.blogentry.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.blogentry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBolderRentalHousingKey(
  args: InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
) {
  return ['repository', '/repository/search/type/bolder_rental_housing', args] as const
}

export function useGetRepositorySearchTypeBolderRentalHousing<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBolderRentalHousingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.bolder_rental_housing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBolderRentalHousing<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bolder_rental_housing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBolderRentalHousingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bolder_rental_housing.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.bolder_rental_housing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBookmarksKey(
  args: InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
) {
  return ['repository', '/repository/search/type/bookmarks', args] as const
}

export function useGetRepositorySearchTypeBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.bookmarks.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBostonCrimeKey(
  args: InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
) {
  return ['repository', '/repository/search/type/boston_crime', args] as const
}

export function useGetRepositorySearchTypeBostonCrime<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBostonCrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.boston_crime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBostonCrime<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boston_crime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBostonCrimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boston_crime.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.boston_crime.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulder2017ElectionContributionsKey(
  args: InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/boulder_2017_election_contributions',
    args,
  ] as const
}

export function useGetRepositorySearchTypeBoulder2017ElectionContributions<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.boulder_2017_election_contributions.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulder2017ElectionContributionsKey(args)
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
                typeof client.repository.search.type.boulder_2017_election_contributions.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_2017_election_contributions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulder2017ElectionContributions<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.repository.search.type.boulder_2017_election_contributions.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.boulder_2017_election_contributions.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulder2017ElectionContributionsKey(args)
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
                typeof client.repository.search.type.boulder_2017_election_contributions.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_2017_election_contributions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulderCampaignContributionsKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>,
) {
  return ['repository', '/repository/search/type/boulder_campaign_contributions', args] as const
}

export function useGetRepositorySearchTypeBoulderCampaignContributions<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderCampaignContributionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_campaign_contributions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulderCampaignContributions<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_campaign_contributions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderCampaignContributionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_campaign_contributions.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_campaign_contributions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulderConsultingServicesKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>,
) {
  return ['repository', '/repository/search/type/boulder_consulting_services', args] as const
}

export function useGetRepositorySearchTypeBoulderConsultingServices<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderConsultingServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_consulting_services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulderConsultingServices<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_consulting_services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderConsultingServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_consulting_services.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_consulting_services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulderCountyVoterDetailsKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>,
) {
  return ['repository', '/repository/search/type/boulder_county_voter_details', args] as const
}

export function useGetRepositorySearchTypeBoulderCountyVoterDetails<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderCountyVoterDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_county_voter_details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulderCountyVoterDetails<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_county_voter_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderCountyVoterDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.boulder_county_voter_details.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_county_voter_details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulderCrimesKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
) {
  return ['repository', '/repository/search/type/boulder_crimes', args] as const
}

export function useGetRepositorySearchTypeBoulderCrimes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderCrimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.boulder_crimes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulderCrimes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_crimes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderCrimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_crimes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.boulder_crimes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulderEmailsKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
) {
  return ['repository', '/repository/search/type/boulder_emails', args] as const
}

export function useGetRepositorySearchTypeBoulderEmails<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderEmailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.boulder_emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulderEmails<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_emails.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderEmailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_emails.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.boulder_emails.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeBoulderEmployeeSalariesKey(
  args: InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
) {
  return ['repository', '/repository/search/type/boulder_employee_salaries', args] as const
}

export function useGetRepositorySearchTypeBoulderEmployeeSalaries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderEmployeeSalariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_employee_salaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeBoulderEmployeeSalaries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.boulder_employee_salaries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeBoulderEmployeeSalariesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.boulder_employee_salaries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.boulder_employee_salaries.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCalendarKey(
  args: InferRequestType<typeof client.repository.search.type.calendar.$get>,
) {
  return ['repository', '/repository/search/type/calendar', args] as const
}

export function useGetRepositorySearchTypeCalendar<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCalendar<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.calendar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCalendarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.calendar.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.calendar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCampaignDonorsKey(
  args: InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
) {
  return ['repository', '/repository/search/type/campaign_donors', args] as const
}

export function useGetRepositorySearchTypeCampaignDonors<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCampaignDonorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.campaign_donors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCampaignDonors<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.campaign_donors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCampaignDonorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_donors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.campaign_donors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCampaignExpendituresKey(
  args: InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
) {
  return ['repository', '/repository/search/type/campaign_expenditures', args] as const
}

export function useGetRepositorySearchTypeCampaignExpenditures<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCampaignExpendituresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.campaign_expenditures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCampaignExpenditures<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.campaign_expenditures.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCampaignExpendituresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.campaign_expenditures.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.campaign_expenditures.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCataloglinkKey(
  args: InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
) {
  return ['repository', '/repository/search/type/cataloglink', args] as const
}

export function useGetRepositorySearchTypeCataloglink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCataloglinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.cataloglink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCataloglink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.cataloglink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCataloglinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cataloglink.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.cataloglink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCdmGridKey(
  args: InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
) {
  return ['repository', '/repository/search/type/cdm_grid', args] as const
}

export function useGetRepositorySearchTypeCdmGrid<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCdmGridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.cdm_grid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCdmGrid<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.cdm_grid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCdmGridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.cdm_grid.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.cdm_grid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeChatroomKey(
  args: InferRequestType<typeof client.repository.search.type.chatroom.$get>,
) {
  return ['repository', '/repository/search/type/chatroom', args] as const
}

export function useGetRepositorySearchTypeChatroom<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.chatroom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeChatroomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.chatroom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeChatroom<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.chatroom.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeChatroomKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.chatroom.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.chatroom.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeColoradoWaterRightsKey(
  args: InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
) {
  return ['repository', '/repository/search/type/colorado_water_rights', args] as const
}

export function useGetRepositorySearchTypeColoradoWaterRights<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeColoradoWaterRightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.colorado_water_rights.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeColoradoWaterRights<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.colorado_water_rights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeColoradoWaterRightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.colorado_water_rights.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.colorado_water_rights.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCommitteeDonationsKey(
  args: InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
) {
  return ['repository', '/repository/search/type/committee_donations', args] as const
}

export function useGetRepositorySearchTypeCommitteeDonations<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCommitteeDonationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.committee_donations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCommitteeDonations<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.committee_donations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCommitteeDonationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.committee_donations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.committee_donations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCommunityDatahubKey(
  args: InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
) {
  return ['repository', '/repository/search/type/community_datahub', args] as const
}

export function useGetRepositorySearchTypeCommunityDatahub<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCommunityDatahubKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.community_datahub.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCommunityDatahub<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.community_datahub.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCommunityDatahubKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_datahub.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.community_datahub.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeCommunityResourceKey(
  args: InferRequestType<typeof client.repository.search.type.community_resource.$get>,
) {
  return ['repository', '/repository/search/type/community_resource', args] as const
}

export function useGetRepositorySearchTypeCommunityResource<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.community_resource.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCommunityResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.community_resource.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeCommunityResource<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.community_resource.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeCommunityResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.community_resource.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.community_resource.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeConstructionPermitsKey(
  args: InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
) {
  return ['repository', '/repository/search/type/construction_permits', args] as const
}

export function useGetRepositorySearchTypeConstructionPermits<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeConstructionPermitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.construction_permits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeConstructionPermits<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.construction_permits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeConstructionPermitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.construction_permits.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.construction_permits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeContactKey(
  args: InferRequestType<typeof client.repository.search.type.contact.$get>,
) {
  return ['repository', '/repository/search/type/contact', args] as const
}

export function useGetRepositorySearchTypeContact<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.contact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeContact<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.contact.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeContactKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.contact.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.contact.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeDbCoIndicatorsKey(
  args: InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
) {
  return ['repository', '/repository/search/type/db_co_indicators', args] as const
}

export function useGetRepositorySearchTypeDbCoIndicators<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeDbCoIndicatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.db_co_indicators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeDbCoIndicators<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.db_co_indicators.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeDbCoIndicatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.db_co_indicators.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.db_co_indicators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeEarthSatelliteLandsatKey(
  args: InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
) {
  return ['repository', '/repository/search/type/earth_satellite_landsat', args] as const
}

export function useGetRepositorySearchTypeEarthSatelliteLandsat<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeEarthSatelliteLandsatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.earth_satellite_landsat.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeEarthSatelliteLandsat<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.earth_satellite_landsat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeEarthSatelliteLandsatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.earth_satellite_landsat.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.earth_satellite_landsat.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFaqKey(
  args: InferRequestType<typeof client.repository.search.type.faq.$get>,
) {
  return ['repository', '/repository/search/type/faq', args] as const
}

export function useGetRepositorySearchTypeFaq<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.faq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFaqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.faq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFaq<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.faq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFaqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.faq.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.faq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFecPacsKey(
  args: InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
) {
  return ['repository', '/repository/search/type/fec_pacs', args] as const
}

export function useGetRepositorySearchTypeFecPacs<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFecPacsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.fec_pacs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFecPacs<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.fec_pacs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFecPacsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fec_pacs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.fec_pacs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFeccandidatesKey(
  args: InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
) {
  return ['repository', '/repository/search/type/feccandidates', args] as const
}

export function useGetRepositorySearchTypeFeccandidates<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFeccandidatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.feccandidates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFeccandidates<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.feccandidates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFeccandidatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.feccandidates.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.feccandidates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFeedKey(
  args: InferRequestType<typeof client.repository.search.type.feed.$get>,
) {
  return ['repository', '/repository/search/type/feed', args] as const
}

export function useGetRepositorySearchTypeFeed<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFeed<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.feed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFileKey(
  args: InferRequestType<typeof client.repository.search.type.file.$get>,
) {
  return ['repository', '/repository/search/type/file', args] as const
}

export function useGetRepositorySearchTypeFile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.file.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.file.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.file.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFitsDataKey(
  args: InferRequestType<typeof client.repository.search.type.fits_data.$get>,
) {
  return ['repository', '/repository/search/type/fits_data', args] as const
}

export function useGetRepositorySearchTypeFitsData<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.fits_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFitsDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.fits_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFitsData<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.fits_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFitsDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.fits_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.fits_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeFtpKey(
  args: InferRequestType<typeof client.repository.search.type.ftp.$get>,
) {
  return ['repository', '/repository/search/type/ftp', args] as const
}

export function useGetRepositorySearchTypeFtp<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.ftp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFtpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.ftp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeFtp<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.ftp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeFtpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.ftp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.ftp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGadgetsCountdownKey(
  args: InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
) {
  return ['repository', '/repository/search/type/gadgets_countdown', args] as const
}

export function useGetRepositorySearchTypeGadgetsCountdown<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGadgetsCountdownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gadgets_countdown.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGadgetsCountdown<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_countdown.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGadgetsCountdownKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_countdown.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gadgets_countdown.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGadgetsStockKey(
  args: InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
) {
  return ['repository', '/repository/search/type/gadgets_stock', args] as const
}

export function useGetRepositorySearchTypeGadgetsStock<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGadgetsStockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gadgets_stock.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGadgetsStock<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_stock.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGadgetsStockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_stock.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gadgets_stock.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGadgetsWeatherKey(
  args: InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
) {
  return ['repository', '/repository/search/type/gadgets_weather', args] as const
}

export function useGetRepositorySearchTypeGadgetsWeather<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGadgetsWeatherKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gadgets_weather.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGadgetsWeather<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gadgets_weather.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGadgetsWeatherKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gadgets_weather.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gadgets_weather.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGazeteerCensusTractsKey(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
) {
  return ['repository', '/repository/search/type/gazeteer_census_tracts', args] as const
}

export function useGetRepositorySearchTypeGazeteerCensusTracts<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGazeteerCensusTractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.gazeteer_census_tracts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGazeteerCensusTracts<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_census_tracts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGazeteerCensusTractsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_census_tracts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.gazeteer_census_tracts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGazeteerCountiesKey(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
) {
  return ['repository', '/repository/search/type/gazeteer_counties', args] as const
}

export function useGetRepositorySearchTypeGazeteerCounties<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGazeteerCountiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gazeteer_counties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGazeteerCounties<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gazeteer_counties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGazeteerCountiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gazeteer_counties.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gazeteer_counties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoGeojsonKey(
  args: InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
) {
  return ['repository', '/repository/search/type/geo_geojson', args] as const
}

export function useGetRepositorySearchTypeGeoGeojson<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoGeojsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_geojson.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoGeojson<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_geojson.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoGeojsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geojson.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_geojson.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoGeotiffKey(
  args: InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
) {
  return ['repository', '/repository/search/type/geo_geotiff', args] as const
}

export function useGetRepositorySearchTypeGeoGeotiff<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoGeotiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_geotiff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoGeotiff<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_geotiff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoGeotiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_geotiff.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_geotiff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoGpxKey(
  args: InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
) {
  return ['repository', '/repository/search/type/geo_gpx', args] as const
}

export function useGetRepositorySearchTypeGeoGpx<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoGpxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.geo_gpx.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoGpx<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_gpx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoGpxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_gpx.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.geo_gpx.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoHdf5Key(
  args: InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
) {
  return ['repository', '/repository/search/type/geo_hdf5', args] as const
}

export function useGetRepositorySearchTypeGeoHdf5<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoHdf5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.geo_hdf5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoHdf5<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_hdf5.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoHdf5Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_hdf5.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.geo_hdf5.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoKmlKey(
  args: InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
) {
  return ['repository', '/repository/search/type/geo_kml', args] as const
}

export function useGetRepositorySearchTypeGeoKml<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoKmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.geo_kml.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoKml<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_kml.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoKmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_kml.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.geo_kml.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoShapefileKey(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
) {
  return ['repository', '/repository/search/type/geo_shapefile', args] as const
}

export function useGetRepositorySearchTypeGeoShapefile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoShapefileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_shapefile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoShapefile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoShapefileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_shapefile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGeoShapefileFipsKey(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
) {
  return ['repository', '/repository/search/type/geo_shapefile_fips', args] as const
}

export function useGetRepositorySearchTypeGeoShapefileFips<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoShapefileFipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_shapefile_fips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGeoShapefileFips<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.geo_shapefile_fips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGeoShapefileFipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.geo_shapefile_fips.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.geo_shapefile_fips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGlossaryKey(
  args: InferRequestType<typeof client.repository.search.type.glossary.$get>,
) {
  return ['repository', '/repository/search/type/glossary', args] as const
}

export function useGetRepositorySearchTypeGlossary<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.glossary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGlossaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.glossary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGlossary<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.glossary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGlossaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.glossary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.glossary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGridaggregationKey(
  args: InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
) {
  return ['repository', '/repository/search/type/gridaggregation', args] as const
}

export function useGetRepositorySearchTypeGridaggregation<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGridaggregationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gridaggregation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGridaggregation<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.gridaggregation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGridaggregationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.gridaggregation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.gridaggregation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeGroupKey(
  args: InferRequestType<typeof client.repository.search.type.group.$get>,
) {
  return ['repository', '/repository/search/type/group', args] as const
}

export function useGetRepositorySearchTypeGroup<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeGroup<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.group.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeHipchatGroupKey(
  args: InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
) {
  return ['repository', '/repository/search/type/hipchat_group', args] as const
}

export function useGetRepositorySearchTypeHipchatGroup<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeHipchatGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.hipchat_group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeHipchatGroup<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.hipchat_group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeHipchatGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.hipchat_group.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.hipchat_group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeHomepageKey(
  args: InferRequestType<typeof client.repository.search.type.homepage.$get>,
) {
  return ['repository', '/repository/search/type/homepage', args] as const
}

export function useGetRepositorySearchTypeHomepage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.homepage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeHomepageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.homepage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeHomepage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.homepage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeHomepageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.homepage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.homepage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeIncidentKey(
  args: InferRequestType<typeof client.repository.search.type.incident.$get>,
) {
  return ['repository', '/repository/search/type/incident', args] as const
}

export function useGetRepositorySearchTypeIncident<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.incident.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeIncidentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.incident.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeIncident<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.incident.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeIncidentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.incident.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.incident.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeJeopardyKey(
  args: InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
) {
  return ['repository', '/repository/search/type/jeopardy', args] as const
}

export function useGetRepositorySearchTypeJeopardy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeJeopardyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.jeopardy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeJeopardy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.jeopardy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeJeopardyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.jeopardy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.jeopardy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLatlonimageKey(
  args: InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
) {
  return ['repository', '/repository/search/type/latlonimage', args] as const
}

export function useGetRepositorySearchTypeLatlonimage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLatlonimageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.latlonimage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLatlonimage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.latlonimage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLatlonimageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.latlonimage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.latlonimage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLidarCollectionKey(
  args: InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
) {
  return ['repository', '/repository/search/type/lidar_collection', args] as const
}

export function useGetRepositorySearchTypeLidarCollection<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLidarCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.lidar_collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLidarCollection<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.lidar_collection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLidarCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_collection.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.lidar_collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLidarLasKey(
  args: InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
) {
  return ['repository', '/repository/search/type/lidar_las', args] as const
}

export function useGetRepositorySearchTypeLidarLas<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLidarLasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.lidar_las.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLidarLas<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.lidar_las.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLidarLasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_las.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.lidar_las.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLidarLvisKey(
  args: InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
) {
  return ['repository', '/repository/search/type/lidar_lvis', args] as const
}

export function useGetRepositorySearchTypeLidarLvis<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLidarLvisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.lidar_lvis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLidarLvis<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.lidar_lvis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLidarLvisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.lidar_lvis.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.lidar_lvis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLinkKey(
  args: InferRequestType<typeof client.repository.search.type.link.$get>,
) {
  return ['repository', '/repository/search/type/link', args] as const
}

export function useGetRepositorySearchTypeLink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.link.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.link.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.link.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLocalfilesKey(
  args: InferRequestType<typeof client.repository.search.type.localfiles.$get>,
) {
  return ['repository', '/repository/search/type/localfiles', args] as const
}

export function useGetRepositorySearchTypeLocalfiles<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.localfiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLocalfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.localfiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLocalfiles<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.localfiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLocalfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.localfiles.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.localfiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeLocationsKey(
  args: InferRequestType<typeof client.repository.search.type.locations.$get>,
) {
  return ['repository', '/repository/search/type/locations', args] as const
}

export function useGetRepositorySearchTypeLocations<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeLocations<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.locations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMapGooglemapKey(
  args: InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
) {
  return ['repository', '/repository/search/type/map_googlemap', args] as const
}

export function useGetRepositorySearchTypeMapGooglemap<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMapGooglemapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.map_googlemap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMapGooglemap<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.map_googlemap.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMapGooglemapKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.map_googlemap.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.map_googlemap.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMediaAudiofileKey(
  args: InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
) {
  return ['repository', '/repository/search/type/media_audiofile', args] as const
}

export function useGetRepositorySearchTypeMediaAudiofile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaAudiofileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_audiofile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMediaAudiofile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_audiofile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaAudiofileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_audiofile.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_audiofile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMediaImageloopKey(
  args: InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
) {
  return ['repository', '/repository/search/type/media_imageloop', args] as const
}

export function useGetRepositorySearchTypeMediaImageloop<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaImageloopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_imageloop.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMediaImageloop<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_imageloop.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaImageloopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_imageloop.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_imageloop.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMediaPhotoalbumKey(
  args: InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
) {
  return ['repository', '/repository/search/type/media_photoalbum', args] as const
}

export function useGetRepositorySearchTypeMediaPhotoalbum<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaPhotoalbumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_photoalbum.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMediaPhotoalbum<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_photoalbum.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaPhotoalbumKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_photoalbum.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_photoalbum.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMediaVideoChannelKey(
  args: InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
) {
  return ['repository', '/repository/search/type/media_video_channel', args] as const
}

export function useGetRepositorySearchTypeMediaVideoChannel<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaVideoChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_video_channel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMediaVideoChannel<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_video_channel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaVideoChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_channel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_video_channel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMediaVideoQuicktimeKey(
  args: InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
) {
  return ['repository', '/repository/search/type/media_video_quicktime', args] as const
}

export function useGetRepositorySearchTypeMediaVideoQuicktime<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaVideoQuicktimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.media_video_quicktime.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMediaVideoQuicktime<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_video_quicktime.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaVideoQuicktimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_video_quicktime.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.media_video_quicktime.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeMediaYoutubevideoKey(
  args: InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
) {
  return ['repository', '/repository/search/type/media_youtubevideo', args] as const
}

export function useGetRepositorySearchTypeMediaYoutubevideo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaYoutubevideoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_youtubevideo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeMediaYoutubevideo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.media_youtubevideo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeMediaYoutubevideoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.media_youtubevideo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.media_youtubevideo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeNotesKey(
  args: InferRequestType<typeof client.repository.search.type.notes.$get>,
) {
  return ['repository', '/repository/search/type/notes', args] as const
}

export function useGetRepositorySearchTypeNotes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeNotes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.notes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeNotesJsonfileKey(
  args: InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
) {
  return ['repository', '/repository/search/type/notes_jsonfile', args] as const
}

export function useGetRepositorySearchTypeNotesJsonfile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesJsonfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.notes_jsonfile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeNotesJsonfile<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes_jsonfile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesJsonfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_jsonfile.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.notes_jsonfile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeNotesNoteKey(
  args: InferRequestType<typeof client.repository.search.type.notes_note.$get>,
) {
  return ['repository', '/repository/search/type/notes_note', args] as const
}

export function useGetRepositorySearchTypeNotesNote<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes_note.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesNoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.notes_note.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeNotesNote<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes_note.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesNoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_note.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.notes_note.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeNotesNotebookKey(
  args: InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
) {
  return ['repository', '/repository/search/type/notes_notebook', args] as const
}

export function useGetRepositorySearchTypeNotesNotebook<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesNotebookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.notes_notebook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeNotesNotebook<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.notes_notebook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNotesNotebookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.notes_notebook.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.notes_notebook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeNwsfeedKey(
  args: InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
) {
  return ['repository', '/repository/search/type/nwsfeed', args] as const
}

export function useGetRepositorySearchTypeNwsfeed<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNwsfeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.nwsfeed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeNwsfeed<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.nwsfeed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeNwsfeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.nwsfeed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.nwsfeed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeOpendaplinkKey(
  args: InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
) {
  return ['repository', '/repository/search/type/opendaplink', args] as const
}

export function useGetRepositorySearchTypeOpendaplink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeOpendaplinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.opendaplink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeOpendaplink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.opendaplink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeOpendaplinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.opendaplink.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.opendaplink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeOwlClassKey(
  args: InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
) {
  return ['repository', '/repository/search/type/owl.class', args] as const
}

export function useGetRepositorySearchTypeOwlClass<TError = unknown>(
  args: InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeOwlClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type['owl.class'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeOwlClass<TError = unknown>(
  args: InferRequestType<(typeof client.repository.search.type)['owl.class']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeOwlClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.class']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type['owl.class'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeOwlOntologyKey(
  args: InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
) {
  return ['repository', '/repository/search/type/owl.ontology', args] as const
}

export function useGetRepositorySearchTypeOwlOntology<TError = unknown>(
  args: InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeOwlOntologyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type['owl.ontology'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeOwlOntology<TError = unknown>(
  args: InferRequestType<(typeof client.repository.search.type)['owl.ontology']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeOwlOntologyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repository.search.type)['owl.ontology']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type['owl.ontology'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePasteitentryKey(
  args: InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
) {
  return ['repository', '/repository/search/type/pasteitentry', args] as const
}

export function useGetRepositorySearchTypePasteitentry<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePasteitentryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.pasteitentry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePasteitentry<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.pasteitentry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePasteitentryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.pasteitentry.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.pasteitentry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePointTextKey(
  args: InferRequestType<typeof client.repository.search.type.point_text.$get>,
) {
  return ['repository', '/repository/search/type/point_text', args] as const
}

export function useGetRepositorySearchTypePointText<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.point_text.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePointTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.point_text.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePointText<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.point_text.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePointTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.point_text.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.point_text.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePoliceStopDataKey(
  args: InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
) {
  return ['repository', '/repository/search/type/police_stop_data', args] as const
}

export function useGetRepositorySearchTypePoliceStopData<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePoliceStopDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.police_stop_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePoliceStopData<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.police_stop_data.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePoliceStopDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.police_stop_data.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.police_stop_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePollKey(
  args: InferRequestType<typeof client.repository.search.type.poll.$get>,
) {
  return ['repository', '/repository/search/type/poll', args] as const
}

export function useGetRepositorySearchTypePoll<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.poll.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.poll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePoll<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.poll.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.poll.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.poll.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectCampaignKey(
  args: InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
) {
  return ['repository', '/repository/search/type/project_campaign', args] as const
}

export function useGetRepositorySearchTypeProjectCampaign<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectCampaignKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_campaign.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectCampaign<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectCampaignKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_campaign.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_campaign.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectCasestudyKey(
  args: InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
) {
  return ['repository', '/repository/search/type/project_casestudy', args] as const
}

export function useGetRepositorySearchTypeProjectCasestudy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectCasestudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_casestudy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectCasestudy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_casestudy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectCasestudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_casestudy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_casestudy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectContributionKey(
  args: InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
) {
  return ['repository', '/repository/search/type/project_contribution', args] as const
}

export function useGetRepositorySearchTypeProjectContribution<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectContributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_contribution.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectContribution<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_contribution.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectContributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_contribution.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_contribution.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectDataformatKey(
  args: InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
) {
  return ['repository', '/repository/search/type/project_dataformat', args] as const
}

export function useGetRepositorySearchTypeProjectDataformat<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectDataformatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_dataformat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectDataformat<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_dataformat.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectDataformatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataformat.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_dataformat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectDatasetKey(
  args: InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
) {
  return ['repository', '/repository/search/type/project_dataset', args] as const
}

export function useGetRepositorySearchTypeProjectDataset<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectDatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectDataset<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_dataset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectDatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_dataset.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectDeploymentKey(
  args: InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
) {
  return ['repository', '/repository/search/type/project_deployment', args] as const
}

export function useGetRepositorySearchTypeProjectDeployment<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_deployment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectDeployment<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_deployment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectDeploymentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_deployment.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_deployment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectExperimentKey(
  args: InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
) {
  return ['repository', '/repository/search/type/project_experiment', args] as const
}

export function useGetRepositorySearchTypeProjectExperiment<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectExperimentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_experiment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectExperiment<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_experiment.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectExperimentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_experiment.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_experiment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectFieldnoteKey(
  args: InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
) {
  return ['repository', '/repository/search/type/project_fieldnote', args] as const
}

export function useGetRepositorySearchTypeProjectFieldnote<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectFieldnoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_fieldnote.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectFieldnote<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_fieldnote.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectFieldnoteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_fieldnote.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_fieldnote.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectGpsControlpointsKey(
  args: InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
) {
  return ['repository', '/repository/search/type/project_gps_controlpoints', args] as const
}

export function useGetRepositorySearchTypeProjectGpsControlpoints<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectGpsControlpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_gps_controlpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectGpsControlpoints<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_controlpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectGpsControlpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_controlpoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_gps_controlpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectGpsRawKey(
  args: InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
) {
  return ['repository', '/repository/search/type/project_gps_raw', args] as const
}

export function useGetRepositorySearchTypeProjectGpsRaw<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectGpsRawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_gps_raw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectGpsRaw<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_raw.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectGpsRawKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_raw.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_gps_raw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectGpsRinexKey(
  args: InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
) {
  return ['repository', '/repository/search/type/project_gps_rinex', args] as const
}

export function useGetRepositorySearchTypeProjectGpsRinex<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectGpsRinexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_gps_rinex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectGpsRinex<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_gps_rinex.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectGpsRinexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_gps_rinex.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_gps_rinex.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectInstrumentKey(
  args: InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
) {
  return ['repository', '/repository/search/type/project_instrument', args] as const
}

export function useGetRepositorySearchTypeProjectInstrument<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectInstrumentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_instrument.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectInstrument<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_instrument.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectInstrumentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_instrument.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_instrument.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectLearningResourceKey(
  args: InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
) {
  return ['repository', '/repository/search/type/project_learning_resource', args] as const
}

export function useGetRepositorySearchTypeProjectLearningResource<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectLearningResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_learning_resource.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectLearningResource<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_learning_resource.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectLearningResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_learning_resource.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_learning_resource.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectMeetingKey(
  args: InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
) {
  return ['repository', '/repository/search/type/project_meeting', args] as const
}

export function useGetRepositorySearchTypeProjectMeeting<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectMeetingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_meeting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectMeeting<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_meeting.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectMeetingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_meeting.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_meeting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectOrganizationKey(
  args: InferRequestType<typeof client.repository.search.type.project_organization.$get>,
) {
  return ['repository', '/repository/search/type/project_organization', args] as const
}

export function useGetRepositorySearchTypeProjectOrganization<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectOrganization<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_organization.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectProgramKey(
  args: InferRequestType<typeof client.repository.search.type.project_program.$get>,
) {
  return ['repository', '/repository/search/type/project_program', args] as const
}

export function useGetRepositorySearchTypeProjectProgram<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_program.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectProgramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_program.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectProgram<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_program.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectProgramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_program.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_program.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectProjectKey(
  args: InferRequestType<typeof client.repository.search.type.project_project.$get>,
) {
  return ['repository', '/repository/search/type/project_project', args] as const
}

export function useGetRepositorySearchTypeProjectProject<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_project.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectProject<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_project.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_project.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectServiceKey(
  args: InferRequestType<typeof client.repository.search.type.project_service.$get>,
) {
  return ['repository', '/repository/search/type/project_service', args] as const
}

export function useGetRepositorySearchTypeProjectService<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_service.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectServiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_service.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectService<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_service.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectServiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_service.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_service.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectSiteKey(
  args: InferRequestType<typeof client.repository.search.type.project_site.$get>,
) {
  return ['repository', '/repository/search/type/project_site', args] as const
}

export function useGetRepositorySearchTypeProjectSite<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_site.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectSiteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_site.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectSite<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_site.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectSiteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_site.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_site.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectSoftwarepackageKey(
  args: InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
) {
  return ['repository', '/repository/search/type/project_softwarepackage', args] as const
}

export function useGetRepositorySearchTypeProjectSoftwarepackage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectSoftwarepackageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_softwarepackage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectSoftwarepackage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_softwarepackage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectSoftwarepackageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_softwarepackage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_softwarepackage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectStandardNameKey(
  args: InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
) {
  return ['repository', '/repository/search/type/project_standard_name', args] as const
}

export function useGetRepositorySearchTypeProjectStandardName<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectStandardNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_standard_name.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectStandardName<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_standard_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectStandardNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_standard_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_standard_name.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectSurveylocationKey(
  args: InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
) {
  return ['repository', '/repository/search/type/project_surveylocation', args] as const
}

export function useGetRepositorySearchTypeProjectSurveylocation<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectSurveylocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_surveylocation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectSurveylocation<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_surveylocation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectSurveylocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_surveylocation.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.project_surveylocation.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectTermKey(
  args: InferRequestType<typeof client.repository.search.type.project_term.$get>,
) {
  return ['repository', '/repository/search/type/project_term', args] as const
}

export function useGetRepositorySearchTypeProjectTerm<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_term.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_term.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectTerm<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_term.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_term.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_term.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectVisitKey(
  args: InferRequestType<typeof client.repository.search.type.project_visit.$get>,
) {
  return ['repository', '/repository/search/type/project_visit', args] as const
}

export function useGetRepositorySearchTypeProjectVisit<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_visit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectVisitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_visit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectVisit<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_visit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectVisitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_visit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_visit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeProjectVocabularyKey(
  args: InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
) {
  return ['repository', '/repository/search/type/project_vocabulary', args] as const
}

export function useGetRepositorySearchTypeProjectVocabulary<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectVocabularyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_vocabulary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeProjectVocabulary<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.project_vocabulary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeProjectVocabularyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.project_vocabulary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.project_vocabulary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePropertySalesKey(
  args: InferRequestType<typeof client.repository.search.type.property_sales.$get>,
) {
  return ['repository', '/repository/search/type/property_sales', args] as const
}

export function useGetRepositorySearchTypePropertySales<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.property_sales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePropertySalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.property_sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePropertySales<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.property_sales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePropertySalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.property_sales.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.property_sales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePropertydbKey(
  args: InferRequestType<typeof client.repository.search.type.propertydb.$get>,
) {
  return ['repository', '/repository/search/type/propertydb', args] as const
}

export function useGetRepositorySearchTypePropertydb<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.propertydb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePropertydbKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.propertydb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePropertydb<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.propertydb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePropertydbKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.propertydb.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.propertydb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypePythonNotebookKey(
  args: InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
) {
  return ['repository', '/repository/search/type/python_notebook', args] as const
}

export function useGetRepositorySearchTypePythonNotebook<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePythonNotebookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.python_notebook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypePythonNotebook<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.python_notebook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypePythonNotebookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.python_notebook.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.python_notebook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeSlackTeamKey(
  args: InferRequestType<typeof client.repository.search.type.slack_team.$get>,
) {
  return ['repository', '/repository/search/type/slack_team', args] as const
}

export function useGetRepositorySearchTypeSlackTeam<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.slack_team.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeSlackTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.slack_team.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeSlackTeam<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.slack_team.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeSlackTeamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.slack_team.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.slack_team.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeStatusboardKey(
  args: InferRequestType<typeof client.repository.search.type.statusboard.$get>,
) {
  return ['repository', '/repository/search/type/statusboard', args] as const
}

export function useGetRepositorySearchTypeStatusboard<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.statusboard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeStatusboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.statusboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeStatusboard<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.statusboard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeStatusboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.statusboard.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.statusboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeSunrisesunsetKey(
  args: InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
) {
  return ['repository', '/repository/search/type/sunrisesunset', args] as const
}

export function useGetRepositorySearchTypeSunrisesunset<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeSunrisesunsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.sunrisesunset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeSunrisesunset<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.sunrisesunset.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeSunrisesunsetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.sunrisesunset.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.sunrisesunset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTasksKey(
  args: InferRequestType<typeof client.repository.search.type.tasks.$get>,
) {
  return ['repository', '/repository/search/type/tasks', args] as const
}

export function useGetRepositorySearchTypeTasks<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTasks<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.tasks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.tasks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTmdbmoviesKey(
  args: InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
) {
  return ['repository', '/repository/search/type/tmdbmovies', args] as const
}

export function useGetRepositorySearchTypeTmdbmovies<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTmdbmoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.tmdbmovies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTmdbmovies<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.tmdbmovies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTmdbmoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.tmdbmovies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.tmdbmovies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTodoKey(
  args: InferRequestType<typeof client.repository.search.type.todo.$get>,
) {
  return ['repository', '/repository/search/type/todo', args] as const
}

export function useGetRepositorySearchTypeTodo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.todo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTodoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.todo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTodo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.todo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTodoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.repository.search.type.todo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.todo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTripEventKey(
  args: InferRequestType<typeof client.repository.search.type.trip_event.$get>,
) {
  return ['repository', '/repository/search/type/trip_event', args] as const
}

export function useGetRepositorySearchTypeTripEvent<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.trip_event.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTripEvent<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_event.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.trip_event.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTripFlightKey(
  args: InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
) {
  return ['repository', '/repository/search/type/trip_flight', args] as const
}

export function useGetRepositorySearchTypeTripFlight<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripFlightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.trip_flight.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTripFlight<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_flight.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripFlightKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_flight.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.trip_flight.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTripHotelKey(
  args: InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
) {
  return ['repository', '/repository/search/type/trip_hotel', args] as const
}

export function useGetRepositorySearchTypeTripHotel<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripHotelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.trip_hotel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTripHotel<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_hotel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripHotelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_hotel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.trip_hotel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTripReportKey(
  args: InferRequestType<typeof client.repository.search.type.trip_report.$get>,
) {
  return ['repository', '/repository/search/type/trip_report', args] as const
}

export function useGetRepositorySearchTypeTripReport<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.trip_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTripReport<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_report.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.trip_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTripTripKey(
  args: InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
) {
  return ['repository', '/repository/search/type/trip_trip', args] as const
}

export function useGetRepositorySearchTypeTripTrip<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripTripKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.trip_trip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTripTrip<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.trip_trip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTripTripKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.trip_trip.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.trip_trip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeAwcMetarKey(
  args: InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
) {
  return ['repository', '/repository/search/type/type_awc_metar', args] as const
}

export function useGetRepositorySearchTypeTypeAwcMetar<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeAwcMetarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_awc_metar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeAwcMetar<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_awc_metar.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeAwcMetarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_awc_metar.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_awc_metar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeBizStockseriesKey(
  args: InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
) {
  return ['repository', '/repository/search/type/type_biz_stockseries', args] as const
}

export function useGetRepositorySearchTypeTypeBizStockseries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeBizStockseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_biz_stockseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeBizStockseries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_biz_stockseries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeBizStockseriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_biz_stockseries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_biz_stockseries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeBlsSeriesKey(
  args: InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
) {
  return ['repository', '/repository/search/type/type_bls_series', args] as const
}

export function useGetRepositorySearchTypeTypeBlsSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeBlsSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_bls_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeBlsSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_bls_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeBlsSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_bls_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeBlsSurveyKey(
  args: InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
) {
  return ['repository', '/repository/search/type/type_bls_survey', args] as const
}

export function useGetRepositorySearchTypeTypeBlsSurvey<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeBlsSurveyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_bls_survey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeBlsSurvey<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_bls_survey.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeBlsSurveyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_bls_survey.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_bls_survey.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeCensusAcsKey(
  args: InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
) {
  return ['repository', '/repository/search/type/type_census_acs', args] as const
}

export function useGetRepositorySearchTypeTypeCensusAcs<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeCensusAcsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_census_acs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeCensusAcs<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_census_acs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeCensusAcsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_census_acs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_census_acs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDaymetKey(
  args: InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
) {
  return ['repository', '/repository/search/type/type_daymet', args] as const
}

export function useGetRepositorySearchTypeTypeDaymet<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDaymetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_daymet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDaymet<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_daymet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDaymetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_daymet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_daymet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDbTableKey(
  args: InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
) {
  return ['repository', '/repository/search/type/type_db_table', args] as const
}

export function useGetRepositorySearchTypeTypeDbTable<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDbTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_db_table.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDbTable<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_db_table.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDbTableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_db_table.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_db_table.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDocumentCsvKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
) {
  return ['repository', '/repository/search/type/type_document_csv', args] as const
}

export function useGetRepositorySearchTypeTypeDocumentCsv<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDocumentCsv<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_csv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentCsvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_csv.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_csv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDocumentDocKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
) {
  return ['repository', '/repository/search/type/type_document_doc', args] as const
}

export function useGetRepositorySearchTypeTypeDocumentDoc<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentDocKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_doc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDocumentDoc<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_doc.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentDocKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_doc.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_doc.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDocumentHtmlKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
) {
  return ['repository', '/repository/search/type/type_document_html', args] as const
}

export function useGetRepositorySearchTypeTypeDocumentHtml<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_html.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDocumentHtml<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_html.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentHtmlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_html.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_html.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDocumentPdfKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
) {
  return ['repository', '/repository/search/type/type_document_pdf', args] as const
}

export function useGetRepositorySearchTypeTypeDocumentPdf<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDocumentPdf<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_pdf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentPdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_pdf.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDocumentPptKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
) {
  return ['repository', '/repository/search/type/type_document_ppt', args] as const
}

export function useGetRepositorySearchTypeTypeDocumentPpt<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentPptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_ppt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDocumentPpt<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_ppt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentPptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_ppt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_ppt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDocumentXlsKey(
  args: InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
) {
  return ['repository', '/repository/search/type/type_document_xls', args] as const
}

export function useGetRepositorySearchTypeTypeDocumentXls<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentXlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_xls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDocumentXls<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_document_xls.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDocumentXlsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_document_xls.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_document_xls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeDrilsdownCasestudyKey(
  args: InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
) {
  return ['repository', '/repository/search/type/type_drilsdown_casestudy', args] as const
}

export function useGetRepositorySearchTypeTypeDrilsdownCasestudy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDrilsdownCasestudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_drilsdown_casestudy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeDrilsdownCasestudy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeDrilsdownCasestudyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_drilsdown_casestudy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_drilsdown_casestudy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEdgarFilingKey(
  args: InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
) {
  return ['repository', '/repository/search/type/type_edgar_filing', args] as const
}

export function useGetRepositorySearchTypeTypeEdgarFiling<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEdgarFilingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_edgar_filing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEdgarFiling<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_edgar_filing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEdgarFilingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_edgar_filing.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_edgar_filing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEiaCategoryKey(
  args: InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
) {
  return ['repository', '/repository/search/type/type_eia_category', args] as const
}

export function useGetRepositorySearchTypeTypeEiaCategory<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEiaCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_eia_category.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEiaCategory<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_eia_category.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEiaCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_category.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_eia_category.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEiaSeriesKey(
  args: InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
) {
  return ['repository', '/repository/search/type/type_eia_series', args] as const
}

export function useGetRepositorySearchTypeTypeEiaSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEiaSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_eia_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEiaSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_eia_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEiaSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_eia_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_eia_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriFeatureserverKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_featureserver', args] as const
}

export function useGetRepositorySearchTypeTypeEsriFeatureserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriFeatureserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_featureserver.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriFeatureserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_featureserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriFeatureserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_featureserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_featureserver.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriGeometryserverKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_geometryserver', args] as const
}

export function useGetRepositorySearchTypeTypeEsriGeometryserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriGeometryserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_geometryserver.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriGeometryserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_geometryserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriGeometryserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_geometryserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_geometryserver.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriGpserverKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_gpserver', args] as const
}

export function useGetRepositorySearchTypeTypeEsriGpserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriGpserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_gpserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriGpserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_gpserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriGpserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_gpserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_gpserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriImageserverKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_imageserver', args] as const
}

export function useGetRepositorySearchTypeTypeEsriImageserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriImageserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_imageserver.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriImageserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_imageserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriImageserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_imageserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_imageserver.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriLayerKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_layer', args] as const
}

export function useGetRepositorySearchTypeTypeEsriLayer<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriLayerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_layer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriLayer<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_layer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriLayerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_layer.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_layer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriMapserverKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_mapserver', args] as const
}

export function useGetRepositorySearchTypeTypeEsriMapserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriMapserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_mapserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriMapserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_mapserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriMapserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_mapserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_mapserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriRestfolderKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_restfolder', args] as const
}

export function useGetRepositorySearchTypeTypeEsriRestfolder<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriRestfolderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_restfolder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriRestfolder<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restfolder.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriRestfolderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restfolder.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_restfolder.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriRestserverKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_restserver', args] as const
}

export function useGetRepositorySearchTypeTypeEsriRestserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriRestserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_restserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriRestserver<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriRestserverKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restserver.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_esri_restserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeEsriRestserviceKey(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
) {
  return ['repository', '/repository/search/type/type_esri_restservice', args] as const
}

export function useGetRepositorySearchTypeTypeEsriRestservice<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriRestserviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_restservice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeEsriRestservice<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_esri_restservice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeEsriRestserviceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_esri_restservice.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_esri_restservice.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeExtremesKey(
  args: InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
) {
  return ['repository', '/repository/search/type/type_extremes', args] as const
}

export function useGetRepositorySearchTypeTypeExtremes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeExtremesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_extremes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeExtremes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_extremes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeExtremesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_extremes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_extremes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeFredCategoryKey(
  args: InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
) {
  return ['repository', '/repository/search/type/type_fred_category', args] as const
}

export function useGetRepositorySearchTypeTypeFredCategory<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeFredCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_fred_category.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeFredCategory<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_fred_category.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeFredCategoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_category.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_fred_category.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeFredSeriesKey(
  args: InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
) {
  return ['repository', '/repository/search/type/type_fred_series', args] as const
}

export function useGetRepositorySearchTypeTypeFredSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeFredSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_fred_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeFredSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_fred_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeFredSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_fred_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_fred_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeGtfsAgencyKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_agency', args] as const
}

export function useGetRepositorySearchTypeTypeGtfsAgency<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsAgencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_agency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeGtfsAgency<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_agency.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsAgencyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_agency.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_agency.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeGtfsRouteKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_route', args] as const
}

export function useGetRepositorySearchTypeTypeGtfsRoute<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeGtfsRoute<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsRouteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_route.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_route.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeGtfsRoutesKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_routes', args] as const
}

export function useGetRepositorySearchTypeTypeGtfsRoutes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeGtfsRoutes<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_routes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeGtfsStopKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_stop', args] as const
}

export function useGetRepositorySearchTypeTypeGtfsStop<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsStopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_stop.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeGtfsStop<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stop.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsStopKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stop.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_stop.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeGtfsStopsKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_stops', args] as const
}

export function useGetRepositorySearchTypeTypeGtfsStops<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsStopsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_stops.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeGtfsStops<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_stops.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsStopsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_stops.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_stops.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeGtfsTripKey(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
) {
  return ['repository', '/repository/search/type/type_gtfs_trip', args] as const
}

export function useGetRepositorySearchTypeTypeGtfsTrip<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsTripKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_trip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeGtfsTrip<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_gtfs_trip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeGtfsTripKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_gtfs_trip.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_gtfs_trip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeHazarddataKey(
  args: InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
) {
  return ['repository', '/repository/search/type/type_hazarddata', args] as const
}

export function useGetRepositorySearchTypeTypeHazarddata<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeHazarddataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_hazarddata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeHazarddata<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_hazarddata.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeHazarddataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hazarddata.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_hazarddata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeHydroColoradoKey(
  args: InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
) {
  return ['repository', '/repository/search/type/type_hydro_colorado', args] as const
}

export function useGetRepositorySearchTypeTypeHydroColorado<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeHydroColoradoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_hydro_colorado.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeHydroColorado<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_hydro_colorado.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeHydroColoradoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_hydro_colorado.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_hydro_colorado.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeIdvBundleKey(
  args: InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
) {
  return ['repository', '/repository/search/type/type_idv_bundle', args] as const
}

export function useGetRepositorySearchTypeTypeIdvBundle<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeIdvBundleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_idv_bundle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeIdvBundle<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_idv_bundle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeIdvBundleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_idv_bundle.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_idv_bundle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeImageKey(
  args: InferRequestType<typeof client.repository.search.type.type_image.$get>,
) {
  return ['repository', '/repository/search/type/type_image', args] as const
}

export function useGetRepositorySearchTypeTypeImage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeImage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_image.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeImageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_image.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeImageAirportKey(
  args: InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
) {
  return ['repository', '/repository/search/type/type_image_airport', args] as const
}

export function useGetRepositorySearchTypeTypeImageAirport<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeImageAirportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_image_airport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeImageAirport<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_image_airport.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeImageAirportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_airport.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_image_airport.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeImageWebcamKey(
  args: InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
) {
  return ['repository', '/repository/search/type/type_image_webcam', args] as const
}

export function useGetRepositorySearchTypeTypeImageWebcam<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeImageWebcamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_image_webcam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeImageWebcam<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_image_webcam.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeImageWebcamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_image_webcam.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_image_webcam.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeMbKey(
  args: InferRequestType<typeof client.repository.search.type.type_mb.$get>,
) {
  return ['repository', '/repository/search/type/type_mb', args] as const
}

export function useGetRepositorySearchTypeTypeMb<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_mb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMbKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_mb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeMb<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_mb.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMbKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_mb.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeMbCollectionKey(
  args: InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
) {
  return ['repository', '/repository/search/type/type_mb_collection', args] as const
}

export function useGetRepositorySearchTypeTypeMbCollection<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMbCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_mb_collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeMbCollection<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_mb_collection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMbCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_collection.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_mb_collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeMbPointBasicKey(
  args: InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
) {
  return ['repository', '/repository/search/type/type_mb_point_basic', args] as const
}

export function useGetRepositorySearchTypeTypeMbPointBasic<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMbPointBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_mb_point_basic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeMbPointBasic<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_mb_point_basic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMbPointBasicKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_mb_point_basic.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_mb_point_basic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeMetametaDictionaryKey(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
) {
  return ['repository', '/repository/search/type/type_metameta_dictionary', args] as const
}

export function useGetRepositorySearchTypeTypeMetametaDictionary<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMetametaDictionaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_metameta_dictionary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeMetametaDictionary<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_dictionary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMetametaDictionaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_dictionary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_metameta_dictionary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeMetametaFieldKey(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
) {
  return ['repository', '/repository/search/type/type_metameta_field', args] as const
}

export function useGetRepositorySearchTypeTypeMetametaField<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMetametaFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_metameta_field.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeMetametaField<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_metameta_field.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeMetametaFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_metameta_field.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_metameta_field.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeNasaamesKey(
  args: InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
) {
  return ['repository', '/repository/search/type/type_nasaames', args] as const
}

export function useGetRepositorySearchTypeTypeNasaames<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeNasaamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_nasaames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeNasaames<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_nasaames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeNasaamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nasaames.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_nasaames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeNcssKey(
  args: InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
) {
  return ['repository', '/repository/search/type/type_ncss', args] as const
}

export function useGetRepositorySearchTypeTypeNcss<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeNcssKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_ncss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeNcss<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_ncss.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeNcssKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_ncss.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_ncss.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeNitfKey(
  args: InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
) {
  return ['repository', '/repository/search/type/type_nitf', args] as const
}

export function useGetRepositorySearchTypeTypeNitf<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeNitfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_nitf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeNitf<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_nitf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeNitfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_nitf.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_nitf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointAmerifluxLevel2Key(
  args: InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ameriflux_level2', args] as const
}

export function useGetRepositorySearchTypeTypePointAmerifluxLevel2<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointAmerifluxLevel2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ameriflux_level2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointAmerifluxLevel2<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointAmerifluxLevel2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ameriflux_level2.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ameriflux_level2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointAmrcFinalKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
) {
  return ['repository', '/repository/search/type/type_point_amrc_final', args] as const
}

export function useGetRepositorySearchTypeTypePointAmrcFinal<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointAmrcFinalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_amrc_final.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointAmrcFinal<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_final.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointAmrcFinalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_final.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_amrc_final.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointAmrcFreewaveKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
) {
  return ['repository', '/repository/search/type/type_point_amrc_freewave', args] as const
}

export function useGetRepositorySearchTypeTypePointAmrcFreewave<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointAmrcFreewaveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_amrc_freewave.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointAmrcFreewave<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_amrc_freewave.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointAmrcFreewaveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_amrc_freewave.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_amrc_freewave.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointCzoKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
) {
  return ['repository', '/repository/search/type/type_point_czo', args] as const
}

export function useGetRepositorySearchTypeTypePointCzo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointCzoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_czo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointCzo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_czo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointCzoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_czo.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_czo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointGcnetKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
) {
  return ['repository', '/repository/search/type/type_point_gcnet', args] as const
}

export function useGetRepositorySearchTypeTypePointGcnet<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointGcnetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_gcnet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointGcnet<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_gcnet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointGcnetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_gcnet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_gcnet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointGeomagIaga2002Key(
  args: InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>,
) {
  return ['repository', '/repository/search/type/type_point_geomag_iaga2002', args] as const
}

export function useGetRepositorySearchTypeTypePointGeomagIaga2002<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointGeomagIaga2002Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_geomag_iaga2002.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointGeomagIaga2002<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointGeomagIaga2002Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_geomag_iaga2002.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_geomag_iaga2002.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointHydroWatermlKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
) {
  return ['repository', '/repository/search/type/type_point_hydro_waterml', args] as const
}

export function useGetRepositorySearchTypeTypePointHydroWaterml<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointHydroWatermlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_hydro_waterml.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointHydroWaterml<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_hydro_waterml.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointHydroWatermlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_hydro_waterml.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_hydro_waterml.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointIcebridgeAtmIcessnKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>,
) {
  return ['repository', '/repository/search/type/type_point_icebridge_atm_icessn', args] as const
}

export function useGetRepositorySearchTypeTypePointIcebridgeAtmIcessn<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeAtmIcessnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_atm_icessn.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointIcebridgeAtmIcessn<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeAtmIcessnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_icessn.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_atm_icessn.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointIcebridgeAtmQfitKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>,
) {
  return ['repository', '/repository/search/type/type_point_icebridge_atm_qfit', args] as const
}

export function useGetRepositorySearchTypeTypePointIcebridgeAtmQfit<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeAtmQfitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_atm_qfit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointIcebridgeAtmQfit<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeAtmQfitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_atm_qfit.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_atm_qfit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Key(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_mccords_irmcr2',
    args,
  ] as const
}

export function useGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Key(args)
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
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr2Key(args)
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
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_mccords_irmcr2.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Key(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_icebridge_mccords_irmcr3',
    args,
  ] as const
}

export function useGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Key(args)
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
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeMccordsIrmcr3Key(args)
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
                typeof client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_mccords_irmcr3.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointIcebridgeParisKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>,
) {
  return ['repository', '/repository/search/type/type_point_icebridge_paris', args] as const
}

export function useGetRepositorySearchTypeTypePointIcebridgeParis<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeParisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_paris.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointIcebridgeParis<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_icebridge_paris.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIcebridgeParisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_icebridge_paris.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_icebridge_paris.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointIdvKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
) {
  return ['repository', '/repository/search/type/type_point_idv', args] as const
}

export function useGetRepositorySearchTypeTypePointIdv<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIdvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_idv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointIdv<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_idv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointIdvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_idv.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_idv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointInlineKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
) {
  return ['repository', '/repository/search/type/type_point_inline', args] as const
}

export function useGetRepositorySearchTypeTypePointInline<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointInlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_inline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointInline<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_inline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointInlineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_inline.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_inline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNcdcClimateKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ncdc_climate', args] as const
}

export function useGetRepositorySearchTypeTypePointNcdcClimate<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNcdcClimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ncdc_climate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNcdcClimate<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ncdc_climate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNcdcClimateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ncdc_climate.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ncdc_climate.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNetcdfKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
) {
  return ['repository', '/repository/search/type/type_point_netcdf', args] as const
}

export function useGetRepositorySearchTypeTypePointNetcdf<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNetcdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_netcdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNetcdf<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_netcdf.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNetcdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_netcdf.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_netcdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNoaaCarbonKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_carbon', args] as const
}

export function useGetRepositorySearchTypeTypePointNoaaCarbon<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaCarbonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_carbon.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNoaaCarbon<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_carbon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaCarbonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_carbon.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_carbon.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNoaaFlaskEventKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_flask_event', args] as const
}

export function useGetRepositorySearchTypeTypePointNoaaFlaskEvent<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaFlaskEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_flask_event.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNoaaFlaskEvent<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaFlaskEventKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_event.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_flask_event.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNoaaFlaskMonthKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_flask_month', args] as const
}

export function useGetRepositorySearchTypeTypePointNoaaFlaskMonth<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaFlaskMonthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_flask_month.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNoaaFlaskMonth<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaFlaskMonthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_noaa_flask_month.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_flask_month.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNoaaMadisKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_madis', args] as const
}

export function useGetRepositorySearchTypeTypePointNoaaMadis<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaMadisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_madis.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNoaaMadis<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_madis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaMadisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_madis.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_madis.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointNoaaTowerKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
) {
  return ['repository', '/repository/search/type/type_point_noaa_tower', args] as const
}

export function useGetRepositorySearchTypeTypePointNoaaTower<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaTowerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_tower.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointNoaaTower<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_noaa_tower.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointNoaaTowerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_noaa_tower.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_noaa_tower.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanCnvKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_cnv', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanCnv<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_ocean_cnv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanCnv<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_cnv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_cnv.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_ocean_cnv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanCsvSadoTTSKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_csv_sado_TTS', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanCsvSadoTTS<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCsvSadoTTSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_TTS.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanCsvSadoTTS<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCsvSadoTTSKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_TTS.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_TTS.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanCsvSadoMeteoKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_csv_sado_meteo', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanCsvSadoMeteo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCsvSadoMeteoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_meteo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanCsvSadoMeteo<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCsvSadoMeteoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_csv_sado_meteo.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_meteo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanCsvSadoPositionKey(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
) {
  return ['repository', '/repository/search/type/type_point_ocean_csv_sado_position', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanCsvSadoPosition<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCsvSadoPositionKey(args)
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
                typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_position.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanCsvSadoPosition<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanCsvSadoPositionKey(args)
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
                typeof client.repository.search.type.type_point_ocean_csv_sado_position.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_csv_sado_position.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanNetcdfGliderKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_netcdf_glider', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanNetcdfGlider<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanNetcdfGliderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_netcdf_glider.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanNetcdfGlider<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanNetcdfGliderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_glider.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_netcdf_glider.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanNetcdfTrackKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_netcdf_track', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanNetcdfTrack<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanNetcdfTrackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_netcdf_track.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanNetcdfTrack<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanNetcdfTrackKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_point_ocean_netcdf_track.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_netcdf_track.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOceanOoiDmgxKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
) {
  return ['repository', '/repository/search/type/type_point_ocean_ooi_dmgx', args] as const
}

export function useGetRepositorySearchTypeTypePointOceanOoiDmgx<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanOoiDmgxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_ooi_dmgx.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOceanOoiDmgx<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOceanOoiDmgxKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_ocean_ooi_dmgx.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_ocean_ooi_dmgx.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointOpenaqKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
) {
  return ['repository', '/repository/search/type/type_point_openaq', args] as const
}

export function useGetRepositorySearchTypeTypePointOpenaq<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOpenaqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_openaq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointOpenaq<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_openaq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointOpenaqKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_openaq.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_openaq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointPboPositionTimeSeriesKey(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
) {
  return [
    'repository',
    '/repository/search/type/type_point_pbo_position_time_series',
    args,
  ] as const
}

export function useGetRepositorySearchTypeTypePointPboPositionTimeSeries<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_pbo_position_time_series.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointPboPositionTimeSeriesKey(args)
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
                typeof client.repository.search.type.type_point_pbo_position_time_series.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_pbo_position_time_series.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointPboPositionTimeSeries<TError = unknown>(
  args: InferRequestType<
    typeof client.repository.search.type.type_point_pbo_position_time_series.$get
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                typeof client.repository.search.type.type_point_pbo_position_time_series.$get
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointPboPositionTimeSeriesKey(args)
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
                typeof client.repository.search.type.type_point_pbo_position_time_series.$get
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_pbo_position_time_series.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointSimpleRecordsKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
) {
  return ['repository', '/repository/search/type/type_point_simple_records', args] as const
}

export function useGetRepositorySearchTypeTypePointSimpleRecords<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointSimpleRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_simple_records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointSimpleRecords<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_simple_records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointSimpleRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_simple_records.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_point_simple_records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointSnotelKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
) {
  return ['repository', '/repository/search/type/type_point_snotel', args] as const
}

export function useGetRepositorySearchTypeTypePointSnotel<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointSnotelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_snotel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointSnotel<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_snotel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointSnotelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_snotel.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_snotel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointTextKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
) {
  return ['repository', '/repository/search/type/type_point_text', args] as const
}

export function useGetRepositorySearchTypeTypePointText<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_text.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointText<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_text.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_text.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_text.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePointWsbbGgpKey(
  args: InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
) {
  return ['repository', '/repository/search/type/type_point_wsbb_ggp', args] as const
}

export function useGetRepositorySearchTypeTypePointWsbbGgp<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointWsbbGgpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_wsbb_ggp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePointWsbbGgp<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePointWsbbGgpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_point_wsbb_ggp.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_point_wsbb_ggp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypePsdMonthlyClimateIndexKey(
  args: InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>,
) {
  return ['repository', '/repository/search/type/type_psd_monthly_climate_index', args] as const
}

export function useGetRepositorySearchTypeTypePsdMonthlyClimateIndex<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePsdMonthlyClimateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_psd_monthly_climate_index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypePsdMonthlyClimateIndex<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypePsdMonthlyClimateIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.repository.search.type.type_psd_monthly_climate_index.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_psd_monthly_climate_index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeQuandlSeriesKey(
  args: InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
) {
  return ['repository', '/repository/search/type/type_quandl_series', args] as const
}

export function useGetRepositorySearchTypeTypeQuandlSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeQuandlSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_quandl_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeQuandlSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_quandl_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeQuandlSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_quandl_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_quandl_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeServiceGroupKey(
  args: InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
) {
  return ['repository', '/repository/search/type/type_service_group', args] as const
}

export function useGetRepositorySearchTypeTypeServiceGroup<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeServiceGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_service_group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeServiceGroup<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_service_group.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeServiceGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_group.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_service_group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeServiceLinkKey(
  args: InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
) {
  return ['repository', '/repository/search/type/type_service_link', args] as const
}

export function useGetRepositorySearchTypeTypeServiceLink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeServiceLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_service_link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeServiceLink<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_service_link.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeServiceLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_service_link.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_service_link.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeSocrataSeriesKey(
  args: InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
) {
  return ['repository', '/repository/search/type/type_socrata_series', args] as const
}

export function useGetRepositorySearchTypeTypeSocrataSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSocrataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_socrata_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeSocrataSeries<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_socrata_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSocrataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_socrata_series.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_socrata_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeSoundingCodKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_cod', args] as const
}

export function useGetRepositorySearchTypeTypeSoundingCod<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingCodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_sounding_cod.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeSoundingCod<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_cod.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingCodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_cod.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_sounding_cod.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeSoundingFrdKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_frd', args] as const
}

export function useGetRepositorySearchTypeTypeSoundingFrd<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingFrdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_sounding_frd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeSoundingFrd<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_frd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingFrdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_frd.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_sounding_frd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeSoundingGsdKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_gsd', args] as const
}

export function useGetRepositorySearchTypeTypeSoundingGsd<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingGsdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_sounding_gsd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeSoundingGsd<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_gsd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingGsdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_gsd.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_sounding_gsd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeSoundingWyomingKey(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
) {
  return ['repository', '/repository/search/type/type_sounding_wyoming', args] as const
}

export function useGetRepositorySearchTypeTypeSoundingWyoming<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingWyomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_sounding_wyoming.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeSoundingWyoming<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_sounding_wyoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeSoundingWyomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_sounding_wyoming.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_sounding_wyoming.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeTmyKey(
  args: InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
) {
  return ['repository', '/repository/search/type/type_tmy', args] as const
}

export function useGetRepositorySearchTypeTypeTmy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeTmyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_tmy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeTmy<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_tmy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeTmyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tmy.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_tmy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeTweetKey(
  args: InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
) {
  return ['repository', '/repository/search/type/type_tweet', args] as const
}

export function useGetRepositorySearchTypeTypeTweet<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeTweetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_tweet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeTweet<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_tweet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeTweetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_tweet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.type_tweet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeUsgsGaugeKey(
  args: InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
) {
  return ['repository', '/repository/search/type/type_usgs_gauge', args] as const
}

export function useGetRepositorySearchTypeTypeUsgsGauge<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeUsgsGaugeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_usgs_gauge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeUsgsGauge<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_usgs_gauge.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeUsgsGaugeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_usgs_gauge.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_usgs_gauge.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeVirtualKey(
  args: InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
) {
  return ['repository', '/repository/search/type/type_virtual', args] as const
}

export function useGetRepositorySearchTypeTypeVirtual<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeVirtualKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_virtual.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeVirtual<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_virtual.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeVirtualKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_virtual.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_virtual.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeWmsCapabilitiesKey(
  args: InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
) {
  return ['repository', '/repository/search/type/type_wms_capabilities', args] as const
}

export function useGetRepositorySearchTypeTypeWmsCapabilities<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeWmsCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_wms_capabilities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeWmsCapabilities<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_wms_capabilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeWmsCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_capabilities.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.repository.search.type.type_wms_capabilities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeTypeWmsLayerKey(
  args: InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
) {
  return ['repository', '/repository/search/type/type_wms_layer', args] as const
}

export function useGetRepositorySearchTypeTypeWmsLayer<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeWmsLayerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_wms_layer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeTypeWmsLayer<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.type_wms_layer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeTypeWmsLayerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.type_wms_layer.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.type_wms_layer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeUfoSightingsKey(
  args: InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
) {
  return ['repository', '/repository/search/type/ufo_sightings', args] as const
}

export function useGetRepositorySearchTypeUfoSightings<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeUfoSightingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.ufo_sightings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeUfoSightings<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.ufo_sightings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeUfoSightingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.ufo_sightings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.repository.search.type.ufo_sightings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeUsPlacesKey(
  args: InferRequestType<typeof client.repository.search.type.us_places.$get>,
) {
  return ['repository', '/repository/search/type/us_places', args] as const
}

export function useGetRepositorySearchTypeUsPlaces<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.us_places.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeUsPlacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.us_places.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeUsPlaces<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.us_places.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeUsPlacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.us_places.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.us_places.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeVoteYesnoKey(
  args: InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
) {
  return ['repository', '/repository/search/type/vote_yesno', args] as const
}

export function useGetRepositorySearchTypeVoteYesno<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeVoteYesnoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.vote_yesno.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeVoteYesno<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.vote_yesno.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeVoteYesnoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.vote_yesno.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.vote_yesno.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeWeblogKey(
  args: InferRequestType<typeof client.repository.search.type.weblog.$get>,
) {
  return ['repository', '/repository/search/type/weblog', args] as const
}

export function useGetRepositorySearchTypeWeblog<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.weblog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeWeblogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.weblog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeWeblog<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.weblog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeWeblogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.weblog.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.weblog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRepositorySearchTypeWikipageKey(
  args: InferRequestType<typeof client.repository.search.type.wikipage.$get>,
) {
  return ['repository', '/repository/search/type/wikipage', args] as const
}

export function useGetRepositorySearchTypeWikipage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.wikipage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeWikipageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.wikipage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRepositorySearchTypeWikipage<TError = unknown>(
  args: InferRequestType<typeof client.repository.search.type.wikipage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRepositorySearchTypeWikipageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.repository.search.type.wikipage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.repository.search.type.wikipage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
