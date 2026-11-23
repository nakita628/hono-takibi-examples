import { createRoute, z } from '@hono/zod-openapi'

const AccelerationModeSchema = z
  .enum(['DISABLED', 'ENABLED', 'PREFERRED'])
  .openapi({
    description:
      "Specify whether the service runs your job with accelerated transcoding. Choose DISABLED if you don't want accelerated transcoding. Choose ENABLED if you want your job to run with accelerated transcoding and to fail if your input files or your job settings aren't compatible with accelerated transcoding. Choose PREFERRED if you want your job to run with accelerated transcoding if the job is compatible with the feature and to run at standard speed if it's not.",
  })
  .openapi('AccelerationMode')

const AccelerationSettingsSchema = z
  .object({
    Mode: AccelerationModeSchema.openapi({
      xml: { name: 'mode' },
      description:
        'Specify the conditions when the service will run your job with accelerated transcoding.',
    }),
  })
  .openapi({
    required: ['Mode'],
    description:
      'Accelerated transcoding can significantly speed up jobs with long, visually complex content.',
  })
  .openapi('AccelerationSettings')

const AccelerationStatusSchema = z
  .enum(['NOT_APPLICABLE', 'IN_PROGRESS', 'ACCELERATED', 'NOT_ACCELERATED'])
  .openapi({
    description:
      "Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.",
  })
  .openapi('AccelerationStatus')

const StringSchema = z.string().openapi('String')

const BillingTagsSourceSchema = z
  .enum(['QUEUE', 'PRESET', 'JOB_TEMPLATE', 'JOB'])
  .openapi({
    description:
      'The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.',
  })
  .openapi('BillingTagsSource')

const TimestampUnixSchema = z.iso.datetime({ offset: true }).openapi('TimestampUnix')

const JobPhaseSchema = z
  .enum(['PROBING', 'TRANSCODING', 'UPLOADING'])
  .openapi({ description: "A job's phase can be PROBING, TRANSCODING OR UPLOADING" })
  .openapi('JobPhase')

const IntegerSchema = z.int().openapi('Integer')

const IntegerMinNegative50Max50Schema = z
  .int()
  .min(-50)
  .max(50)
  .openapi('IntegerMinNegative50Max50')

const HopDestinationSchema = z
  .object({
    Priority: IntegerMinNegative50Max50Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description:
        "Optional. When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.",
    }),
    Queue: StringSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "Optional unless the job is submitted on the default queue. When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.",
    }),
    WaitMinutes: IntegerSchema.exactOptional().openapi({
      xml: { name: 'waitMinutes' },
      description:
        'Required for setting up a job to use queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 4320 minutes, inclusive.',
    }),
  })
  .openapi({
    description:
      'Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.',
    required: [],
  })
  .openapi('HopDestination')

const ListOfHopDestinationSchema = z.array(HopDestinationSchema).openapi('ListOfHopDestination')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const JobMessagesSchema = z
  .object({
    Info: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'info' },
      description:
        "List of messages that are informational only and don't indicate a problem with your job.",
    }),
    Warning: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'warning' },
      description:
        'List of messages that warn about conditions that might cause your job not to run or to fail.',
    }),
  })
  .openapi({
    description:
      'Provides messages from the service about jobs that you have already successfully submitted.',
    required: [],
  })
  .openapi('JobMessages')

const VideoDetailSchema = z
  .object({
    HeightInPx: IntegerSchema.exactOptional().openapi({
      xml: { name: 'heightInPx' },
      description: 'Height in pixels for the output',
    }),
    WidthInPx: IntegerSchema.exactOptional().openapi({
      xml: { name: 'widthInPx' },
      description: 'Width in pixels for the output',
    }),
  })
  .openapi({ description: "Contains details about the output's video stream", required: [] })
  .openapi('VideoDetail')

const OutputDetailSchema = z
  .object({
    DurationInMs: IntegerSchema.exactOptional().openapi({
      xml: { name: 'durationInMs' },
      description: 'Duration in milliseconds',
    }),
    VideoDetails: VideoDetailSchema.exactOptional().openapi({
      xml: { name: 'videoDetails' },
      description: "Contains details about the output's video stream",
    }),
  })
  .openapi({ description: 'Details regarding output', required: [] })
  .openapi('OutputDetail')

const ListOfOutputDetailSchema = z.array(OutputDetailSchema).openapi('ListOfOutputDetail')

const OutputGroupDetailSchema = z
  .object({
    OutputDetails: ListOfOutputDetailSchema.exactOptional().openapi({
      xml: { name: 'outputDetails' },
      description: 'Details about the output',
    }),
  })
  .openapi({
    description: 'Contains details about the output groups specified in the job settings.',
    required: [],
  })
  .openapi('OutputGroupDetail')

const ListOfOutputGroupDetailSchema = z
  .array(OutputGroupDetailSchema)
  .openapi('ListOfOutputGroupDetail')

const QueueTransitionSchema = z
  .object({
    DestinationQueue: StringSchema.exactOptional().openapi({
      xml: { name: 'destinationQueue' },
      description: 'The queue that the job was on after the transition.',
    }),
    SourceQueue: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceQueue' },
      description: 'The queue that the job was on before the transition.',
    }),
    Timestamp: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'timestamp' },
      description:
        'The time, in Unix epoch format, that the job moved from the source queue to the destination queue.',
    }),
  })
  .openapi({
    description:
      'Description of the source and destination queues between which the job has moved, along with the timestamp of the move',
    required: [],
  })
  .openapi('QueueTransition')

const ListOfQueueTransitionSchema = z.array(QueueTransitionSchema).openapi('ListOfQueueTransition')

const IntegerMinNegative1000Max1000Schema = z
  .int()
  .min(-1000)
  .max(1000)
  .openapi('IntegerMinNegative1000Max1000')

const StringMin14PatternS3BmpBMPPngPNGHttpsBmpBMPPngPNGSchema = z
  .string()
  .regex(
    /^((s3:\/\/(.*?)\.(bmp|BMP|png|PNG))|(https?:\/\/(.*?)\.(bmp|BMP|png|PNG)(\?([^&=]+=[^&]+&)*[^&=]+=[^&]+)?))$/,
  )
  .min(14)
  .openapi('StringMin14PatternS3BmpBMPPngPNGHttpsBmpBMPPngPNG')

const AvailBlankingSchema = z
  .object({
    AvailBlankingImage:
      StringMin14PatternS3BmpBMPPngPNGHttpsBmpBMPPngPNGSchema.exactOptional().openapi({
        xml: { name: 'availBlankingImage' },
        description:
          'Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.',
      }),
  })
  .openapi({
    description:
      'Use ad avail blanking settings to specify your output content during SCTE-35 triggered ad avails. You can blank your video or overlay it with an image. MediaConvert also removes any audio and embedded captions during the ad avail. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ad-avail-blanking.html.',
    required: [],
  })
  .openapi('AvailBlanking')

const StringPatternSNManifestConfirmConditionNotificationNSSchema = z
  .string()
  .regex(/^\s*<(.|\n)*ManifestConfirmConditionNotification(.|\n)*>\s*$/)
  .openapi('StringPatternSNManifestConfirmConditionNotificationNS')

const EsamManifestConfirmConditionNotificationSchema = z
  .object({
    MccXml: StringPatternSNManifestConfirmConditionNotificationNSSchema.exactOptional().openapi({
      xml: { name: 'mccXml' },
      description:
        'Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.',
    }),
  })
  .openapi({
    description: 'ESAM ManifestConfirmConditionNotification defined by OC-SP-ESAM-API-I03-131025.',
    required: [],
  })
  .openapi('EsamManifestConfirmConditionNotification')

const IntegerMin0Max30000Schema = z.int().min(0).max(30000).openapi('IntegerMin0Max30000')

const StringPatternSNSignalProcessingNotificationNSSchema = z
  .string()
  .regex(/^\s*<(.|\n)*SignalProcessingNotification(.|\n)*>\s*$/)
  .openapi('StringPatternSNSignalProcessingNotificationNS')

const EsamSignalProcessingNotificationSchema = z
  .object({
    SccXml: StringPatternSNSignalProcessingNotificationNSSchema.exactOptional().openapi({
      xml: { name: 'sccXml' },
      description:
        "Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM (scte35Esam). Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.",
    }),
  })
  .openapi({
    description: 'ESAM SignalProcessingNotification data defined by OC-SP-ESAM-API-I03-131025.',
    required: [],
  })
  .openapi('EsamSignalProcessingNotification')

const EsamSettingsSchema = z
  .object({
    ManifestConfirmConditionNotification:
      EsamManifestConfirmConditionNotificationSchema.exactOptional().openapi({
        xml: { name: 'manifestConfirmConditionNotification' },
        description:
          'Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).',
      }),
    ResponseSignalPreroll: IntegerMin0Max30000Schema.exactOptional().openapi({
      xml: { name: 'responseSignalPreroll' },
      description:
        'Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.',
    }),
    SignalProcessingNotification: EsamSignalProcessingNotificationSchema.exactOptional().openapi({
      xml: { name: 'signalProcessingNotification' },
      description:
        'Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).',
    }),
  })
  .openapi({
    description:
      "Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.",
    required: [],
  })
  .openapi('EsamSettings')

const CopyProtectionActionSchema = z
  .enum(['PASSTHROUGH', 'STRIP'])
  .openapi({
    description:
      'The action to take on copy and redistribution control XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.',
  })
  .openapi('CopyProtectionAction')

const VchipActionSchema = z
  .enum(['PASSTHROUGH', 'STRIP'])
  .openapi({
    description:
      'The action to take on content advisory XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.',
  })
  .openapi('VchipAction')

const ExtendedDataServicesSchema = z
  .object({
    CopyProtectionAction: CopyProtectionActionSchema.exactOptional().openapi({
      xml: { name: 'copyProtectionAction' },
      description:
        'The action to take on copy and redistribution control XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.',
    }),
    VchipAction: VchipActionSchema.exactOptional().openapi({
      xml: { name: 'vchipAction' },
      description:
        'The action to take on content advisory XDS packets. If you select PASSTHROUGH, packets will not be changed. If you select STRIP, any packets will be removed in output captions.',
    }),
  })
  .openapi({
    description:
      'If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.',
    required: [],
  })
  .openapi('ExtendedDataServices')

const StringMin1Schema = z.string().min(1).openapi('StringMin1')

const ListOfStringMin1Schema = z.array(StringMin1Schema).openapi('ListOfStringMin1')

const AudioSelectorGroupSchema = z
  .object({
    AudioSelectorNames: ListOfStringMin1Schema.exactOptional().openapi({
      xml: { name: 'audioSelectorNames' },
      description:
        'Name of an Audio Selector within the same input to include in the group. Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.',
    }),
  })
  .openapi({
    description:
      "Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab (AudioDescription). Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.",
    required: [],
  })
  .openapi('AudioSelectorGroup')

const MapOfAudioSelectorGroupSchema = z
  .record(z.string(), AudioSelectorGroupSchema)
  .openapi('MapOfAudioSelectorGroup')

const AudioDurationCorrectionSchema = z
  .enum(['DISABLED', 'AUTO', 'TRACK', 'FRAME'])
  .openapi({
    description:
      'Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion.',
  })
  .openapi('AudioDurationCorrection')

const StringMin3Max3PatternAZaZ3Schema = z
  .string()
  .regex(/^[A-Za-z]{3}$/)
  .length(3)
  .openapi('StringMin3Max3PatternAZaZ3')

const AudioDefaultSelectionSchema = z
  .enum(['DEFAULT', 'NOT_DEFAULT'])
  .openapi({
    description:
      "Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.",
  })
  .openapi('AudioDefaultSelection')

const StringPatternS3HttpsSchema = z
  .string()
  .regex(/^s3:\/\/([^\/]+\/+)+((([^\/]*)))|^https?:\/\/[^\/].*[^&]$/)
  .openapi('StringPatternS3Https')

const LanguageCodeSchema = z
  .enum([
    'ENG',
    'SPA',
    'FRA',
    'DEU',
    'GER',
    'ZHO',
    'ARA',
    'HIN',
    'JPN',
    'RUS',
    'POR',
    'ITA',
    'URD',
    'VIE',
    'KOR',
    'PAN',
    'ABK',
    'AAR',
    'AFR',
    'AKA',
    'SQI',
    'AMH',
    'ARG',
    'HYE',
    'ASM',
    'AVA',
    'AVE',
    'AYM',
    'AZE',
    'BAM',
    'BAK',
    'EUS',
    'BEL',
    'BEN',
    'BIH',
    'BIS',
    'BOS',
    'BRE',
    'BUL',
    'MYA',
    'CAT',
    'KHM',
    'CHA',
    'CHE',
    'NYA',
    'CHU',
    'CHV',
    'COR',
    'COS',
    'CRE',
    'HRV',
    'CES',
    'DAN',
    'DIV',
    'NLD',
    'DZO',
    'ENM',
    'EPO',
    'EST',
    'EWE',
    'FAO',
    'FIJ',
    'FIN',
    'FRM',
    'FUL',
    'GLA',
    'GLG',
    'LUG',
    'KAT',
    'ELL',
    'GRN',
    'GUJ',
    'HAT',
    'HAU',
    'HEB',
    'HER',
    'HMO',
    'HUN',
    'ISL',
    'IDO',
    'IBO',
    'IND',
    'INA',
    'ILE',
    'IKU',
    'IPK',
    'GLE',
    'JAV',
    'KAL',
    'KAN',
    'KAU',
    'KAS',
    'KAZ',
    'KIK',
    'KIN',
    'KIR',
    'KOM',
    'KON',
    'KUA',
    'KUR',
    'LAO',
    'LAT',
    'LAV',
    'LIM',
    'LIN',
    'LIT',
    'LUB',
    'LTZ',
    'MKD',
    'MLG',
    'MSA',
    'MAL',
    'MLT',
    'GLV',
    'MRI',
    'MAR',
    'MAH',
    'MON',
    'NAU',
    'NAV',
    'NDE',
    'NBL',
    'NDO',
    'NEP',
    'SME',
    'NOR',
    'NOB',
    'NNO',
    'OCI',
    'OJI',
    'ORI',
    'ORM',
    'OSS',
    'PLI',
    'FAS',
    'POL',
    'PUS',
    'QUE',
    'QAA',
    'RON',
    'ROH',
    'RUN',
    'SMO',
    'SAG',
    'SAN',
    'SRD',
    'SRB',
    'SNA',
    'III',
    'SND',
    'SIN',
    'SLK',
    'SLV',
    'SOM',
    'SOT',
    'SUN',
    'SWA',
    'SSW',
    'SWE',
    'TGL',
    'TAH',
    'TGK',
    'TAM',
    'TAT',
    'TEL',
    'THA',
    'BOD',
    'TIR',
    'TON',
    'TSO',
    'TSN',
    'TUR',
    'TUK',
    'TWI',
    'UIG',
    'UKR',
    'UZB',
    'VEN',
    'VOL',
    'WLN',
    'CYM',
    'FRY',
    'WOL',
    'XHO',
    'YID',
    'YOR',
    'ZHA',
    'ZUL',
    'ORJ',
    'QPC',
    'TNG',
    'SRP',
  ])
  .openapi({
    description:
      'Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.',
  })
  .openapi('LanguageCode')

const HlsRenditionGroupSettingsSchema = z
  .object({
    RenditionGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'renditionGroupId' },
      description: 'Optional. Specify alternative group ID',
    }),
    RenditionLanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'renditionLanguageCode' },
      description: 'Optional. Specify ISO 639-2 or ISO 639-3 code in the language property',
    }),
    RenditionName: StringSchema.exactOptional().openapi({
      xml: { name: 'renditionName' },
      description: 'Optional. Specify media name',
    }),
  })
  .openapi({
    description:
      'Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.',
    required: [],
  })
  .openapi('HlsRenditionGroupSettings')

const IntegerMinNegative2147483648Max2147483647Schema = z
  .int()
  .min(-2147483648)
  .max(2147483647)
  .openapi('IntegerMinNegative2147483648Max2147483647')

const IntegerMin1Max2147483647Schema = z
  .int()
  .min(1)
  .max(2147483647)
  .openapi('IntegerMin1Max2147483647')

const ListOfIntegerMin1Max2147483647Schema = z
  .array(IntegerMin1Max2147483647Schema)
  .openapi('ListOfIntegerMin1Max2147483647')

const IntegerMin0Max8Schema = z.int().min(0).max(8).openapi('IntegerMin0Max8')

const IntegerMinNegative60Max6Schema = z.int().min(-60).max(6).openapi('IntegerMinNegative60Max6')

const ListOfIntegerMinNegative60Max6Schema = z
  .array(IntegerMinNegative60Max6Schema)
  .openapi('ListOfIntegerMinNegative60Max6')

const DoubleMinNegative60Max6Schema = z.float64().openapi('DoubleMinNegative60Max6')

const ListOfDoubleMinNegative60Max6Schema = z
  .array(DoubleMinNegative60Max6Schema)
  .openapi('ListOfDoubleMinNegative60Max6')

const OutputChannelMappingSchema = z
  .object({
    InputChannels: ListOfIntegerMinNegative60Max6Schema.exactOptional().openapi({
      xml: { name: 'inputChannels' },
      description:
        'Use this setting to specify your remix values when they are integers, such as -10, 0, or 4.',
    }),
    InputChannelsFineTune: ListOfDoubleMinNegative60Max6Schema.exactOptional().openapi({
      xml: { name: 'inputChannelsFineTune' },
      description:
        'Use this setting to specify your remix values when they have a decimal component, such as -10.312, 0.08, or 4.9. MediaConvert rounds your remixing values to the nearest thousandth.',
    }),
  })
  .openapi({ description: 'OutputChannel mapping settings.', required: [] })
  .openapi('OutputChannelMapping')

const ListOfOutputChannelMappingSchema = z
  .array(OutputChannelMappingSchema)
  .openapi('ListOfOutputChannelMapping')

const ChannelMappingSchema = z
  .object({
    OutputChannels: ListOfOutputChannelMappingSchema.exactOptional().openapi({
      xml: { name: 'outputChannels' },
      description:
        'In your JSON job specification, include one child of OutputChannels for each audio channel that you want in your output. Each child should contain one instance of InputChannels or InputChannelsFineTune.',
    }),
  })
  .openapi({
    description:
      "Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.",
    required: [],
  })
  .openapi('ChannelMapping')

const IntegerMin1Max64Schema = z.int().min(1).max(64).openapi('IntegerMin1Max64')

const RemixSettingsSchema = z
  .object({
    ChannelMapping: ChannelMappingSchema.exactOptional().openapi({
      xml: { name: 'channelMapping' },
      description:
        "Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel, in dB. Specify remix values to indicate how much of the content from your input audio channel you want in your output audio channels. Each instance of the InputChannels or InputChannelsFineTune array specifies these values for one output channel. Use one instance of this array for each output channel. In the console, each array corresponds to a column in the graphical depiction of the mapping matrix. The rows of the graphical matrix correspond to input channels. Valid values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification). Use InputChannels or InputChannelsFineTune to specify your remix values. Don't use both.",
    }),
    ChannelsIn: IntegerMin1Max64Schema.exactOptional().openapi({
      xml: { name: 'channelsIn' },
      description:
        'Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different. If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.',
    }),
    ChannelsOut: IntegerMin1Max64Schema.exactOptional().openapi({
      xml: { name: 'channelsOut' },
      description:
        'Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.) If you are doing both input channel mapping and output channel mapping, the number of output channels in your input mapping must be the same as the number of input channels in your output mapping.',
    }),
  })
  .openapi({
    description:
      'Use Manual audio remixing (RemixSettings) to adjust audio levels for each audio channel in each output of your job. With audio remixing, you can output more or fewer audio channels than your input audio source provides.',
    required: [],
  })
  .openapi('RemixSettings')

const AudioSelectorTypeSchema = z
  .enum(['PID', 'TRACK', 'LANGUAGE_CODE', 'HLS_RENDITION_GROUP'])
  .openapi({ description: 'Specifies the type of the audio selector.' })
  .openapi('AudioSelectorType')

const AudioSelectorSchema = z
  .object({
    AudioDurationCorrection: AudioDurationCorrectionSchema.exactOptional().openapi({
      xml: { name: 'audioDurationCorrection' },
      description:
        'Apply audio timing corrections to help synchronize audio and video in your output. To apply timing corrections, your input must meet the following requirements: * Container: MP4, or MOV, with an accurate time-to-sample (STTS) table. * Audio track: AAC. Choose from the following audio timing correction settings: * Disabled (Default): Apply no correction. * Auto: Recommended for most inputs. MediaConvert analyzes the audio timing in your input and determines which correction setting to use, if needed. * Track: Adjust the duration of each audio frame by a constant amount to align the audio track length with STTS duration. Track-level correction does not affect pitch, and is recommended for tonal audio content such as music. * Frame: Adjust the duration of each audio frame by a variable amount to align audio frames with STTS timestamps. No corrections are made to already-aligned frames. Frame-level correction may affect the pitch of corrected frames, and is recommended for atonal audio content such as speech or percussion.',
    }),
    CustomLanguageCode: StringMin3Max3PatternAZaZ3Schema.exactOptional().openapi({
      xml: { name: 'customLanguageCode' },
      description:
        'Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code',
    }),
    DefaultSelection: AudioDefaultSelectionSchema.exactOptional().openapi({
      xml: { name: 'defaultSelection' },
      description:
        "Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.",
    }),
    ExternalAudioFileInput: StringPatternS3HttpsSchema.exactOptional().openapi({
      xml: { name: 'externalAudioFileInput' },
      description: 'Specifies audio data from an external file source.',
    }),
    HlsRenditionGroupSettings: HlsRenditionGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsRenditionGroupSettings' },
      description:
        'Settings specific to audio sources in an HLS alternate rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique audio track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the properties provided, the job fails. If no properties in hlsRenditionGroupSettings are specified, the default audio track within the video segment is chosen. If there is no audio within video segment, the alternative audio with DEFAULT=YES is chosen instead.',
    }),
    LanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description: 'Selects a specific language code from within an audio source.',
    }),
    Offset: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'offset' },
      description:
        'Specifies a time delta in milliseconds to offset the audio from the input video.',
    }),
    Pids: ListOfIntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'pids' },
      description:
        'Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).',
    }),
    ProgramSelection: IntegerMin0Max8Schema.exactOptional().openapi({
      xml: { name: 'programSelection' },
      description:
        'Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.',
    }),
    RemixSettings: RemixSettingsSchema.exactOptional().openapi({
      xml: { name: 'remixSettings' },
      description:
        'Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.',
    }),
    SelectorType: AudioSelectorTypeSchema.exactOptional().openapi({
      xml: { name: 'selectorType' },
      description: 'Specifies the type of the audio selector.',
    }),
    Tracks: ListOfIntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'tracks' },
      description:
        'Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].',
    }),
  })
  .openapi({
    description:
      'Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.',
    required: [],
  })
  .openapi('AudioSelector')

const MapOfAudioSelectorSchema = z
  .record(z.string(), AudioSelectorSchema)
  .openapi('MapOfAudioSelector')

const AncillaryConvert608To708Schema = z
  .enum(['UPCONVERT', 'DISABLED'])
  .openapi({
    description:
      'Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.',
  })
  .openapi('AncillaryConvert608To708')

const IntegerMin1Max4Schema = z.int().min(1).max(4).openapi('IntegerMin1Max4')

const AncillaryTerminateCaptionsSchema = z
  .enum(['END_OF_INPUT', 'DISABLED'])
  .openapi({
    description:
      'By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.',
  })
  .openapi('AncillaryTerminateCaptions')

const AncillarySourceSettingsSchema = z
  .object({
    Convert608To708: AncillaryConvert608To708Schema.exactOptional().openapi({
      xml: { name: 'convert608To708' },
      description:
        'Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.',
    }),
    SourceAncillaryChannelNumber: IntegerMin1Max4Schema.exactOptional().openapi({
      xml: { name: 'sourceAncillaryChannelNumber' },
      description:
        'Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.',
    }),
    TerminateCaptions: AncillaryTerminateCaptionsSchema.exactOptional().openapi({
      xml: { name: 'terminateCaptions' },
      description:
        'By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.',
    }),
  })
  .openapi({ description: 'Settings for ancillary captions source.', required: [] })
  .openapi('AncillarySourceSettings')

const DvbSubSourceSettingsSchema = z
  .object({
    Pid: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'pid' },
      description:
        'When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.',
    }),
  })
  .openapi({ description: 'DVB Sub Source Settings', required: [] })
  .openapi('DvbSubSourceSettings')

const EmbeddedConvert608To708Schema = z
  .enum(['UPCONVERT', 'DISABLED'])
  .openapi({
    description:
      'Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.',
  })
  .openapi('EmbeddedConvert608To708')

const IntegerMin1Max1Schema = z.int().min(1).max(1).openapi('IntegerMin1Max1')

const EmbeddedTerminateCaptionsSchema = z
  .enum(['END_OF_INPUT', 'DISABLED'])
  .openapi({
    description:
      'By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.',
  })
  .openapi('EmbeddedTerminateCaptions')

const EmbeddedSourceSettingsSchema = z
  .object({
    Convert608To708: EmbeddedConvert608To708Schema.exactOptional().openapi({
      xml: { name: 'convert608To708' },
      description:
        'Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.',
    }),
    Source608ChannelNumber: IntegerMin1Max4Schema.exactOptional().openapi({
      xml: { name: 'source608ChannelNumber' },
      description:
        'Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.',
    }),
    Source608TrackNumber: IntegerMin1Max1Schema.exactOptional().openapi({
      xml: { name: 'source608TrackNumber' },
      description:
        "Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.",
    }),
    TerminateCaptions: EmbeddedTerminateCaptionsSchema.exactOptional().openapi({
      xml: { name: 'terminateCaptions' },
      description:
        'By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.',
    }),
  })
  .openapi({ description: 'Settings for embedded captions Source', required: [] })
  .openapi('EmbeddedSourceSettings')

const FileSourceConvert608To708Schema = z
  .enum(['UPCONVERT', 'DISABLED'])
  .openapi({
    description:
      'Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.',
  })
  .openapi('FileSourceConvert608To708')

const IntegerMin1Max1001Schema = z.int().min(1).max(1001).openapi('IntegerMin1Max1001')

const IntegerMin1Max60000Schema = z.int().min(1).max(60000).openapi('IntegerMin1Max60000')

const CaptionSourceFramerateSchema = z
  .object({
    FramerateDenominator: IntegerMin1Max1001Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'Specify the denominator of the fraction that represents the frame rate for the setting Caption source frame rate (CaptionSourceFramerate). Use this setting along with the setting Framerate numerator (framerateNumerator).',
    }),
    FramerateNumerator: IntegerMin1Max60000Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'Specify the numerator of the fraction that represents the frame rate for the setting Caption source frame rate (CaptionSourceFramerate). Use this setting along with the setting Framerate denominator (framerateDenominator).',
    }),
  })
  .openapi({
    description:
      'Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. When you work directly in your JSON job specification, use the settings framerateNumerator and framerateDenominator. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.',
    required: [],
  })
  .openapi('CaptionSourceFramerate')

const StringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTTHttpsSccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTTSchema =
  z
    .string()
    .regex(
      /^((s3:\/\/(.*?)\.(scc|SCC|ttml|TTML|dfxp|DFXP|stl|STL|srt|SRT|xml|XML|smi|SMI|vtt|VTT|webvtt|WEBVTT))|(https?:\/\/(.*?)\.(scc|SCC|ttml|TTML|dfxp|DFXP|stl|STL|srt|SRT|xml|XML|smi|SMI|vtt|VTT|webvtt|WEBVTT)(\?([^&=]+=[^&]+&)*[^&=]+=[^&]+)?))$/,
    )
    .min(14)
    .openapi(
      'StringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTTHttpsSccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTT',
    )

const FileSourceTimeDeltaUnitsSchema = z
  .enum(['SECONDS', 'MILLISECONDS'])
  .openapi({
    description:
      "When you use the setting Time delta (TimeDelta) to adjust the sync between your sidecar captions and your video, use this setting to specify the units for the delta that you specify. When you don't specify a value for Time delta units (TimeDeltaUnits), MediaConvert uses seconds by default.",
  })
  .openapi('FileSourceTimeDeltaUnits')

const FileSourceSettingsSchema = z
  .object({
    Convert608To708: FileSourceConvert608To708Schema.exactOptional().openapi({
      xml: { name: 'convert608To708' },
      description:
        'Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.',
    }),
    Framerate: CaptionSourceFramerateSchema.exactOptional().openapi({
      xml: { name: 'framerate' },
      description:
        'Ignore this setting unless your input captions format is SCC. To have the service compensate for differing frame rates between your input captions and input video, specify the frame rate of the captions file. Specify this value as a fraction. When you work directly in your JSON job specification, use the settings framerateNumerator and framerateDenominator. For example, you might specify 24 / 1 for 24 fps, 25 / 1 for 25 fps, 24000 / 1001 for 23.976 fps, or 30000 / 1001 for 29.97 fps.',
    }),
    SourceFile:
      StringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTTHttpsSccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMIVttVTTWebvttWEBVTTSchema.exactOptional().openapi(
        {
          xml: { name: 'sourceFile' },
          description:
            "External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', 'smi', 'webvtt', and 'vtt'.",
        },
      ),
    TimeDelta: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'timeDelta' },
      description:
        "Optional. Use this setting when you need to adjust the sync between your sidecar captions and your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/time-delta-use-cases.html. Enter a positive or negative number to modify the times in the captions file. For example, type 15 to add 15 seconds to all the times in the captions file. Type -5 to subtract 5 seconds from the times in the captions file. You can optionally specify your time delta in milliseconds instead of seconds. When you do so, set the related setting, Time delta units (TimeDeltaUnits) to Milliseconds (MILLISECONDS). Note that, when you specify a time delta for timecode-based caption sources, such as SCC and STL, and your time delta isn't a multiple of the input frame rate, MediaConvert snaps the captions to the nearest frame. For example, when your input video frame rate is 25 fps and you specify 1010ms for time delta, MediaConvert delays your captions by 1000 ms.",
    }),
    TimeDeltaUnits: FileSourceTimeDeltaUnitsSchema.exactOptional().openapi({
      xml: { name: 'timeDeltaUnits' },
      description:
        "When you use the setting Time delta (TimeDelta) to adjust the sync between your sidecar captions and your video, use this setting to specify the units for the delta that you specify. When you don't specify a value for Time delta units (TimeDeltaUnits), MediaConvert uses seconds by default.",
    }),
  })
  .openapi({
    description:
      'If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.',
    required: [],
  })
  .openapi('FileSourceSettings')

const CaptionSourceTypeSchema = z
  .enum([
    'ANCILLARY',
    'DVB_SUB',
    'EMBEDDED',
    'SCTE20',
    'SCC',
    'TTML',
    'STL',
    'SRT',
    'SMI',
    'SMPTE_TT',
    'TELETEXT',
    'NULL_SOURCE',
    'IMSC',
    'WEBVTT',
  ])
  .openapi({
    description:
      'Use Source (SourceType) to identify the format of your input captions. The service cannot auto-detect caption format.',
  })
  .openapi('CaptionSourceType')

const StringMin3Max3Pattern1809aFAF09aEAESchema = z
  .string()
  .regex(/^[1-8][0-9a-fA-F][0-9a-eA-E]$/)
  .length(3)
  .openapi('StringMin3Max3Pattern1809aFAF09aEAE')

const TeletextSourceSettingsSchema = z
  .object({
    PageNumber: StringMin3Max3Pattern1809aFAF09aEAESchema.exactOptional().openapi({
      xml: { name: 'pageNumber' },
      description:
        'Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.',
    }),
  })
  .openapi({
    description: 'Settings specific to Teletext caption sources, including Page number.',
    required: [],
  })
  .openapi('TeletextSourceSettings')

const TrackSourceSettingsSchema = z
  .object({
    TrackNumber: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'trackNumber' },
      description:
        'Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.',
    }),
  })
  .openapi({
    description:
      'Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.',
    required: [],
  })
  .openapi('TrackSourceSettings')

const WebvttHlsSourceSettingsSchema = z
  .object({
    RenditionGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'renditionGroupId' },
      description: 'Optional. Specify alternative group ID',
    }),
    RenditionLanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'renditionLanguageCode' },
      description: 'Optional. Specify ISO 639-2 or ISO 639-3 code in the language property',
    }),
    RenditionName: StringSchema.exactOptional().openapi({
      xml: { name: 'renditionName' },
      description: 'Optional. Specify media name',
    }),
  })
  .openapi({
    description:
      'Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.',
    required: [],
  })
  .openapi('WebvttHlsSourceSettings')

const CaptionSourceSettingsSchema = z
  .object({
    AncillarySourceSettings: AncillarySourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'ancillarySourceSettings' },
      description: 'Settings for ancillary captions source.',
    }),
    DvbSubSourceSettings: DvbSubSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbSubSourceSettings' },
      description: 'DVB Sub Source Settings',
    }),
    EmbeddedSourceSettings: EmbeddedSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'embeddedSourceSettings' },
      description: 'Settings for embedded captions Source',
    }),
    FileSourceSettings: FileSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'fileSourceSettings' },
      description:
        'If your input captions are SCC, SMI, SRT, STL, TTML, WebVTT, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.',
    }),
    SourceType: CaptionSourceTypeSchema.exactOptional().openapi({
      xml: { name: 'sourceType' },
      description:
        'Use Source (SourceType) to identify the format of your input captions. The service cannot auto-detect caption format.',
    }),
    TeletextSourceSettings: TeletextSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'teletextSourceSettings' },
      description: 'Settings specific to Teletext caption sources, including Page number.',
    }),
    TrackSourceSettings: TrackSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'trackSourceSettings' },
      description:
        'Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.',
    }),
    WebvttHlsSourceSettings: WebvttHlsSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'webvttHlsSourceSettings' },
      description:
        'Settings specific to WebVTT sources in HLS alternative rendition group. Specify the properties (renditionGroupId, renditionName or renditionLanguageCode) to identify the unique subtitle track among the alternative rendition groups present in the HLS manifest. If no unique track is found, or multiple tracks match the specified properties, the job fails. If there is only one subtitle track in the rendition group, the settings can be left empty and the default subtitle track will be chosen. If your caption source is a sidecar file, use FileSourceSettings instead of WebvttHlsSourceSettings.',
    }),
  })
  .openapi({
    description:
      'If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.',
    required: [],
  })
  .openapi('CaptionSourceSettings')

const CaptionSelectorSchema = z
  .object({
    CustomLanguageCode: StringMin3Max3PatternAZaZ3Schema.exactOptional().openapi({
      xml: { name: 'customLanguageCode' },
      description:
        'The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.',
    }),
    LanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        'The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.',
    }),
    SourceSettings: CaptionSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'sourceSettings' },
      description:
        'If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.',
    }),
  })
  .openapi({
    description:
      'Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.',
    required: [],
  })
  .openapi('CaptionSelector')

const MapOfCaptionSelectorSchema = z
  .record(z.string(), CaptionSelectorSchema)
  .openapi('MapOfCaptionSelector')

const IntegerMin2Max2147483647Schema = z
  .int()
  .min(2)
  .max(2147483647)
  .openapi('IntegerMin2Max2147483647')

const IntegerMin0Max2147483647Schema = z
  .int()
  .min(0)
  .max(2147483647)
  .openapi('IntegerMin0Max2147483647')

const RectangleSchema = z
  .object({
    Height: IntegerMin2Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'Height of rectangle in pixels. Specify only even numbers.',
    }),
    Width: IntegerMin2Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'Width of rectangle in pixels. Specify only even numbers.',
    }),
    X: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'x' },
      description:
        'The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.',
    }),
    Y: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'y' },
      description:
        'The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.',
    }),
  })
  .openapi({
    description: 'Use Rectangle to identify a specific area of the video frame.',
    required: [],
  })
  .openapi('Rectangle')

const InputDeblockFilterSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.',
  })
  .openapi('InputDeblockFilter')

const DecryptionModeSchema = z
  .enum(['AES_CTR', 'AES_CBC', 'AES_GCM'])
  .openapi({
    description: 'Specify the encryption mode that you used to encrypt your input files.',
  })
  .openapi('DecryptionMode')

const StringMin24Max512PatternAZaZ0902Schema = z
  .string()
  .regex(/^[A-Za-z0-9+\/]+={0,2}$/)
  .min(24)
  .max(512)
  .openapi('StringMin24Max512PatternAZaZ0902')

const StringMin16Max24PatternAZaZ0922AZaZ0916Schema = z
  .string()
  .regex(/^[A-Za-z0-9+\/]{22}==$|^[A-Za-z0-9+\/]{16}$/)
  .min(16)
  .max(24)
  .openapi('StringMin16Max24PatternAZaZ0922AZaZ0916')

const StringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912Schema = z
  .string()
  .regex(/^[a-z-]{2,6}-(east|west|central|((north|south)(east|west)?))-[1-9]{1,2}$/)
  .min(9)
  .max(19)
  .openapi('StringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912')

const InputDecryptionSettingsSchema = z
  .object({
    DecryptionMode: DecryptionModeSchema.exactOptional().openapi({
      xml: { name: 'decryptionMode' },
      description: 'Specify the encryption mode that you used to encrypt your input files.',
    }),
    EncryptedDecryptionKey: StringMin24Max512PatternAZaZ0902Schema.exactOptional().openapi({
      xml: { name: 'encryptedDecryptionKey' },
      description:
        "Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.",
    }),
    InitializationVector: StringMin16Max24PatternAZaZ0922AZaZ0916Schema.exactOptional().openapi({
      xml: { name: 'initializationVector' },
      description:
        'Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.',
    }),
    KmsKeyRegion:
      StringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912Schema.exactOptional().openapi(
        {
          xml: { name: 'kmsKeyRegion' },
          description:
            'Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.',
        },
      ),
  })
  .openapi({
    description:
      'Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.',
    required: [],
  })
  .openapi('InputDecryptionSettings')

const InputDenoiseFilterSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Enable Denoise (InputDenoiseFilter) to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.',
  })
  .openapi('InputDenoiseFilter')

const StringMin14PatternS3XmlXMLHttpsXmlXMLSchema = z
  .string()
  .regex(
    /^((s3:\/\/(.*?)\.(xml|XML))|(https?:\/\/(.*?)\.(xml|XML)(\?([^&=]+=[^&]+&)*[^&=]+=[^&]+)?))$/,
  )
  .min(14)
  .openapi('StringMin14PatternS3XmlXMLHttpsXmlXML')

const InputFilterEnableSchema = z
  .enum(['AUTO', 'DISABLE', 'FORCE'])
  .openapi({
    description:
      'Specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The input is filtered regardless of input type.',
  })
  .openapi('InputFilterEnable')

const IntegerMin0Max5Schema = z.int().min(0).max(5).openapi('IntegerMin0Max5')

const StringMin14PatternS3BmpBMPPngPNGTgaTGAHttpsBmpBMPPngPNGTgaTGASchema = z
  .string()
  .regex(
    /^((s3:\/\/(.*?)\.(bmp|BMP|png|PNG|tga|TGA))|(https?:\/\/(.*?)\.(bmp|BMP|png|PNG|tga|TGA)(\?([^&=]+=[^&]+&)*[^&=]+=[^&]+)?))$/,
  )
  .min(14)
  .openapi('StringMin14PatternS3BmpBMPPngPNGTgaTGAHttpsBmpBMPPngPNGTgaTGA')

const IntegerMin0Max99Schema = z.int().min(0).max(99).openapi('IntegerMin0Max99')

const IntegerMin0Max100Schema = z.int().min(0).max(100).openapi('IntegerMin0Max100')

const StringPattern01D20305D205DSchema = z
  .string()
  .regex(/^((([0-1]\d)|(2[0-3]))(:[0-5]\d){2}([:;][0-5]\d))$/)
  .openapi('StringPattern01D20305D205D')

const InsertableImageSchema = z
  .object({
    Duration: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'duration' },
      description:
        'Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.',
    }),
    FadeIn: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'fadeIn' },
      description:
        "Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.",
    }),
    FadeOut: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'fadeOut' },
      description:
        "Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.",
    }),
    Height: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description:
        "Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.",
    }),
    ImageInserterInput:
      StringMin14PatternS3BmpBMPPngPNGTgaTGAHttpsBmpBMPPngPNGTgaTGASchema.exactOptional().openapi({
        xml: { name: 'imageInserterInput' },
        description:
          'Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.',
      }),
    ImageX: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'imageX' },
      description:
        'Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.',
    }),
    ImageY: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'imageY' },
      description:
        'Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.',
    }),
    Layer: IntegerMin0Max99Schema.exactOptional().openapi({
      xml: { name: 'layer' },
      description:
        'Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.',
    }),
    Opacity: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'opacity' },
      description:
        'Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.',
    }),
    StartTime: StringPattern01D20305D205DSchema.exactOptional().openapi({
      xml: { name: 'startTime' },
      description:
        'Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.',
    }),
    Width: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description:
        "Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.",
    }),
  })
  .openapi({
    description:
      'These settings apply to a specific graphic overlay. You can include multiple overlays in your job.',
    required: [],
  })
  .openapi('InsertableImage')

const ListOfInsertableImageSchema = z.array(InsertableImageSchema).openapi('ListOfInsertableImage')

const IntegerMin100Max1000Schema = z.int().min(100).max(1000).openapi('IntegerMin100Max1000')

const ImageInserterSchema = z
  .object({
    InsertableImages: ListOfInsertableImageSchema.exactOptional().openapi({
      xml: { name: 'insertableImages' },
      description:
        'Specify the images that you want to overlay on your video. The images must be PNG or TGA files.',
    }),
    SdrReferenceWhiteLevel: IntegerMin100Max1000Schema.exactOptional().openapi({
      xml: { name: 'sdrReferenceWhiteLevel' },
      description:
        'Specify the reference white level, in nits, for all of your image inserter images. Use to correct brightness levels within HDR10 outputs. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.',
    }),
  })
  .openapi({
    description:
      'Use the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input or output individually. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/graphic-overlay.html. This setting is disabled by default.',
    required: [],
  })
  .openapi('ImageInserter')

const StringPattern010920405090509092Schema = z
  .string()
  .regex(/^([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9][:;][0-9]{2}$/)
  .openapi('StringPattern010920405090509092')

const InputClippingSchema = z
  .object({
    EndTimecode: StringPattern010920405090509092Schema.exactOptional().openapi({
      xml: { name: 'endTimecode' },
      description:
        'Set End timecode (EndTimecode) to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings (InputTimecodeSource). For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.',
    }),
    StartTimecode: StringPattern010920405090509092Schema.exactOptional().openapi({
      xml: { name: 'startTimecode' },
      description:
        'Set Start timecode (StartTimecode) to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.',
    }),
  })
  .openapi({
    description:
      'To transcode only portions of your input, include one input clip for each part of your input that you want in your output. All input clips that you specify will be included in every output of the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html.',
    required: [],
  })
  .openapi('InputClipping')

const ListOfInputClippingSchema = z.array(InputClippingSchema).openapi('ListOfInputClipping')

const InputScanTypeSchema = z
  .enum(['AUTO', 'PSF'])
  .openapi({
    description:
      "When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.",
  })
  .openapi('InputScanType')

const InputPsiControlSchema = z
  .enum(['IGNORE_PSI', 'USE_PSI'])
  .openapi({
    description:
      'Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.',
  })
  .openapi('InputPsiControl')

const StringPatternS3ASSETMAPXmlSchema = z
  .string()
  .regex(/^s3:\/\/.*\/(ASSETMAP.xml)?$/)
  .openapi('StringPatternS3ASSETMAPXml')

const ListOfStringPatternS3ASSETMAPXmlSchema = z
  .array(StringPatternS3ASSETMAPXmlSchema)
  .openapi('ListOfStringPatternS3ASSETMAPXml')

const InputTimecodeSourceSchema = z
  .enum(['EMBEDDED', 'ZEROBASED', 'SPECIFIEDSTART'])
  .openapi({
    description:
      "Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.",
  })
  .openapi('InputTimecodeSource')

const StringMin11Max11Pattern01D20305D205DSchema = z
  .string()
  .regex(/^((([0-1]\d)|(2[0-3]))(:[0-5]\d){2}([:;][0-5]\d))$/)
  .length(11)
  .openapi('StringMin11Max11Pattern01D20305D205D')

const IntegerMin50Max86400000Schema = z
  .int()
  .min(50)
  .max(86400000)
  .openapi('IntegerMin50Max86400000')

const InputVideoGeneratorSchema = z
  .object({
    Duration: IntegerMin50Max86400000Schema.exactOptional().openapi({
      xml: { name: 'duration' },
      description:
        'Specify an integer value for Black video duration from 50 to 86400000 to generate a black video input for that many milliseconds. Required when you include Video generator.',
    }),
  })
  .openapi({
    description:
      'When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html',
    required: [],
  })
  .openapi('InputVideoGenerator')

const AlphaBehaviorSchema = z
  .enum(['DISCARD', 'REMAP_TO_LUMA'])
  .openapi({
    description:
      'Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.',
  })
  .openapi('AlphaBehavior')

const ColorSpaceSchema = z
  .enum(['FOLLOW', 'REC_601', 'REC_709', 'HDR10', 'HLG_2020', 'P3DCI', 'P3D65_SDR', 'P3D65_HDR'])
  .openapi({
    description:
      "If your input video has accurate color space metadata, or if you don't know about color space: Keep the default value, Follow. MediaConvert will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or has missing metadata: Specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate: Choose Force HDR 10. Specify correct values in the input HDR 10 metadata settings. For more information about HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. When you specify an input color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:\n * HDR 10: BT.2020, PQ, BT.2020 non-constant\n * HLG 2020: BT.2020, HLG, BT.2020 non-constant\n * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709\n * P3D65 (SDR): Display P3, sRGB, BT.709\n * P3D65 (HDR): Display P3, PQ, BT.709",
  })
  .openapi('ColorSpace')

const ColorSpaceUsageSchema = z
  .enum(['FORCE', 'FALLBACK'])
  .openapi({
    description:
      "There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.",
  })
  .openapi('ColorSpaceUsage')

const EmbeddedTimecodeOverrideSchema = z
  .enum(['NONE', 'USE_MDPM'])
  .openapi({
    description:
      'Set Embedded timecode override (embeddedTimecodeOverride) to Use MDPM (USE_MDPM) when your AVCHD input contains timecode tag data in the Modified Digital Video Pack Metadata (MDPM). When you do, we recommend you also set Timecode source (inputTimecodeSource) to Embedded (EMBEDDED). Leave Embedded timecode override blank, or set to None (NONE), when your input does not contain MDPM timecode.',
  })
  .openapi('EmbeddedTimecodeOverride')

const IntegerMin0Max50000Schema = z.int().min(0).max(50000).openapi('IntegerMin0Max50000')

const IntegerMin0Max65535Schema = z.int().min(0).max(65535).openapi('IntegerMin0Max65535')

const Hdr10MetadataSchema = z
  .object({
    BluePrimaryX: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'bluePrimaryX' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    BluePrimaryY: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'bluePrimaryY' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    GreenPrimaryX: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'greenPrimaryX' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    GreenPrimaryY: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'greenPrimaryY' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    MaxContentLightLevel: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'maxContentLightLevel' },
      description:
        "Maximum light level among all samples in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.",
    }),
    MaxFrameAverageLightLevel: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'maxFrameAverageLightLevel' },
      description:
        "Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.",
    }),
    MaxLuminance: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'maxLuminance' },
      description:
        'Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.',
    }),
    MinLuminance: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minLuminance' },
      description:
        'Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter',
    }),
    RedPrimaryX: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'redPrimaryX' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    RedPrimaryY: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'redPrimaryY' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    WhitePointX: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'whitePointX' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
    WhitePointY: IntegerMin0Max50000Schema.exactOptional().openapi({
      xml: { name: 'whitePointY' },
      description:
        'HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.',
    }),
  })
  .openapi({
    description:
      "Use these settings to specify static color calibration metadata, as defined by SMPTE ST 2086. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator.",
    required: [],
  })
  .openapi('Hdr10Metadata')

const PadVideoSchema = z
  .enum(['DISABLED', 'BLACK'])
  .openapi({
    description:
      "Use this setting if your input has video and audio durations that don't align, and your output or player has strict alignment requirements. Examples: Input audio track has a delayed start. Input video track ends before audio ends. When you set Pad video (padVideo) to Black (BLACK), MediaConvert generates black video frames so that output video and audio durations match. Black video frames are added at the beginning or end, depending on your input. To keep the default behavior and not generate black video, set Pad video to Disabled (DISABLED) or leave blank.",
  })
  .openapi('PadVideo')

const InputRotateSchema = z
  .enum(['DEGREE_0', 'DEGREES_90', 'DEGREES_180', 'DEGREES_270', 'AUTO'])
  .openapi({
    description:
      "Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.",
  })
  .openapi('InputRotate')

const InputSampleRangeSchema = z
  .enum(['FOLLOW', 'FULL_RANGE', 'LIMITED_RANGE'])
  .openapi({
    description:
      "If the sample range metadata in your input video is accurate, or if you don't know about sample range, keep the default value, Follow (FOLLOW), for this setting. When you do, the service automatically detects your input sample range. If your input video has metadata indicating the wrong sample range, specify the accurate sample range here. When you do, MediaConvert ignores any sample range information in the input metadata. Regardless of whether MediaConvert uses the input sample range or the sample range that you specify, MediaConvert uses the sample range for transcoding and also writes it to the output metadata.",
  })
  .openapi('InputSampleRange')

const VideoSelectorSchema = z
  .object({
    AlphaBehavior: AlphaBehaviorSchema.exactOptional().openapi({
      xml: { name: 'alphaBehavior' },
      description:
        'Ignore this setting unless this input is a QuickTime animation with an alpha channel. Use this setting to create separate Key and Fill outputs. In each output, specify which part of the input MediaConvert uses. Leave this setting at the default value DISCARD to delete the alpha channel and preserve the video. Set it to REMAP_TO_LUMA to delete the video and map the alpha channel to the luma channel of your outputs.',
    }),
    ColorSpace: ColorSpaceSchema.exactOptional().openapi({
      xml: { name: 'colorSpace' },
      description:
        "If your input video has accurate color space metadata, or if you don't know about color space: Keep the default value, Follow. MediaConvert will automatically detect your input color space. If your input video has metadata indicating the wrong color space, or has missing metadata: Specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate: Choose Force HDR 10. Specify correct values in the input HDR 10 metadata settings. For more information about HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr. When you specify an input color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:\n * HDR 10: BT.2020, PQ, BT.2020 non-constant\n * HLG 2020: BT.2020, HLG, BT.2020 non-constant\n * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709\n * P3D65 (SDR): Display P3, sRGB, BT.709\n * P3D65 (HDR): Display P3, PQ, BT.709",
    }),
    ColorSpaceUsage: ColorSpaceUsageSchema.exactOptional().openapi({
      xml: { name: 'colorSpaceUsage' },
      description:
        "There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.",
    }),
    EmbeddedTimecodeOverride: EmbeddedTimecodeOverrideSchema.exactOptional().openapi({
      xml: { name: 'embeddedTimecodeOverride' },
      description:
        'Set Embedded timecode override (embeddedTimecodeOverride) to Use MDPM (USE_MDPM) when your AVCHD input contains timecode tag data in the Modified Digital Video Pack Metadata (MDPM). When you do, we recommend you also set Timecode source (inputTimecodeSource) to Embedded (EMBEDDED). Leave Embedded timecode override blank, or set to None (NONE), when your input does not contain MDPM timecode.',
    }),
    Hdr10Metadata: Hdr10MetadataSchema.exactOptional().openapi({
      xml: { name: 'hdr10Metadata' },
      description:
        'Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space (ColorSpace) to HDR 10 (HDR10). To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage (ColorSpaceUsage). To specify whether color metadata is included in an output, set Color metadata (ColorMetadata). For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.',
    }),
    PadVideo: PadVideoSchema.exactOptional().openapi({
      xml: { name: 'padVideo' },
      description:
        "Use this setting if your input has video and audio durations that don't align, and your output or player has strict alignment requirements. Examples: Input audio track has a delayed start. Input video track ends before audio ends. When you set Pad video (padVideo) to Black (BLACK), MediaConvert generates black video frames so that output video and audio durations match. Black video frames are added at the beginning or end, depending on your input. To keep the default behavior and not generate black video, set Pad video to Disabled (DISABLED) or leave blank.",
    }),
    Pid: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'pid' },
      description:
        'Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.',
    }),
    ProgramNumber: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'programNumber' },
      description:
        'Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.',
    }),
    Rotate: InputRotateSchema.exactOptional().openapi({
      xml: { name: 'rotate' },
      description:
        "Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.",
    }),
    SampleRange: InputSampleRangeSchema.exactOptional().openapi({
      xml: { name: 'sampleRange' },
      description:
        "If the sample range metadata in your input video is accurate, or if you don't know about sample range, keep the default value, Follow (FOLLOW), for this setting. When you do, the service automatically detects your input sample range. If your input video has metadata indicating the wrong sample range, specify the accurate sample range here. When you do, MediaConvert ignores any sample range information in the input metadata. Regardless of whether MediaConvert uses the input sample range or the sample range that you specify, MediaConvert uses the sample range for transcoding and also writes it to the output metadata.",
    }),
  })
  .openapi({
    description:
      'Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.',
    required: [],
  })
  .openapi('VideoSelector')

type InputType = {
  AudioSelectorGroups?: z.infer<typeof MapOfAudioSelectorGroupSchema>
  AudioSelectors?: z.infer<typeof MapOfAudioSelectorSchema>
  CaptionSelectors?: z.infer<typeof MapOfCaptionSelectorSchema>
  Crop?: z.infer<typeof RectangleSchema>
  DeblockFilter?: z.infer<typeof InputDeblockFilterSchema>
  DecryptionSettings?: z.infer<typeof InputDecryptionSettingsSchema>
  DenoiseFilter?: z.infer<typeof InputDenoiseFilterSchema>
  DolbyVisionMetadataXml?: z.infer<typeof StringMin14PatternS3XmlXMLHttpsXmlXMLSchema>
  FileInput?: z.infer<typeof StringPatternS3HttpsSchema>
  FilterEnable?: z.infer<typeof InputFilterEnableSchema>
  FilterStrength?: z.infer<typeof IntegerMin0Max5Schema>
  ImageInserter?: z.infer<typeof ImageInserterSchema>
  InputClippings?: z.infer<typeof ListOfInputClippingSchema>
  InputScanType?: z.infer<typeof InputScanTypeSchema>
  Position?: z.infer<typeof RectangleSchema>
  ProgramNumber?: z.infer<typeof IntegerMin1Max2147483647Schema>
  PsiControl?: z.infer<typeof InputPsiControlSchema>
  SupplementalImps?: z.infer<typeof ListOfStringPatternS3ASSETMAPXmlSchema>
  TimecodeSource?: z.infer<typeof InputTimecodeSourceSchema>
  TimecodeStart?: z.infer<typeof StringMin11Max11Pattern01D20305D205DSchema>
  VideoGenerator?: z.infer<typeof InputVideoGeneratorSchema>
  VideoSelector?: z.infer<typeof VideoSelectorSchema>
}

const InputSchema: z.ZodType<InputType> = z
  .object({
    AudioSelectorGroups: MapOfAudioSelectorGroupSchema.exactOptional().openapi({
      xml: { name: 'audioSelectorGroups' },
      description:
        "Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab (AudioDescription). Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.",
    }),
    AudioSelectors: MapOfAudioSelectorSchema.exactOptional().openapi({
      xml: { name: 'audioSelectors' },
      description:
        'Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.',
    }),
    CaptionSelectors: MapOfCaptionSelectorSchema.exactOptional().openapi({
      xml: { name: 'captionSelectors' },
      description:
        'Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.',
    }),
    Crop: RectangleSchema.exactOptional().openapi({
      xml: { name: 'crop' },
      description:
        'Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).',
    }),
    DeblockFilter: InputDeblockFilterSchema.exactOptional().openapi({
      xml: { name: 'deblockFilter' },
      description:
        'Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.',
    }),
    DecryptionSettings: InputDecryptionSettingsSchema.exactOptional().openapi({
      xml: { name: 'decryptionSettings' },
      description:
        'Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.',
    }),
    DenoiseFilter: InputDenoiseFilterSchema.exactOptional().openapi({
      xml: { name: 'denoiseFilter' },
      description:
        'Enable Denoise (InputDenoiseFilter) to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.',
    }),
    DolbyVisionMetadataXml: StringMin14PatternS3XmlXMLHttpsXmlXMLSchema.exactOptional().openapi({
      xml: { name: 'dolbyVisionMetadataXml' },
      description:
        'Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.',
    }),
    FileInput: StringPatternS3HttpsSchema.exactOptional().openapi({
      xml: { name: 'fileInput' },
      description:
        'Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. If your input format is IMF, specify your input by providing the path to your CPL. For example, "s3://bucket/vf/cpl.xml". If the CPL is in an incomplete IMP, make sure to use *Supplemental IMPs* (SupplementalImps) to specify any supplemental IMPs that contain assets referenced by the CPL.',
    }),
    FilterEnable: InputFilterEnableSchema.exactOptional().openapi({
      xml: { name: 'filterEnable' },
      description:
        'Specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The input is filtered regardless of input type.',
    }),
    FilterStrength: IntegerMin0Max5Schema.exactOptional().openapi({
      xml: { name: 'filterStrength' },
      description:
        'Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is 0 to 5. Default is 0.',
    }),
    ImageInserter: ImageInserterSchema.exactOptional().openapi({
      xml: { name: 'imageInserter' },
      description:
        'Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.',
    }),
    InputClippings: ListOfInputClippingSchema.exactOptional().openapi({
      xml: { name: 'inputClippings' },
      description:
        '(InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.',
    }),
    InputScanType: InputScanTypeSchema.exactOptional().openapi({
      xml: { name: 'inputScanType' },
      description:
        "When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.",
    }),
    Position: RectangleSchema.exactOptional().openapi({
      xml: { name: 'position' },
      description:
        'Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).',
    }),
    ProgramNumber: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'programNumber' },
      description:
        "Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.",
    }),
    PsiControl: InputPsiControlSchema.exactOptional().openapi({
      xml: { name: 'psiControl' },
      description:
        'Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.',
    }),
    SupplementalImps: ListOfStringPatternS3ASSETMAPXmlSchema.exactOptional().openapi({
      xml: { name: 'supplementalImps' },
      description:
        'Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you\'re using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don\'t need to specify the IMP that contains your input CPL, because the service automatically detects it.',
    }),
    TimecodeSource: InputTimecodeSourceSchema.exactOptional().openapi({
      xml: { name: 'timecodeSource' },
      description:
        "Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.",
    }),
    TimecodeStart: StringMin11Max11Pattern01D20305D205DSchema.exactOptional().openapi({
      xml: { name: 'timecodeStart' },
      description:
        "Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.",
    }),
    VideoGenerator: InputVideoGeneratorSchema.exactOptional().openapi({
      xml: { name: 'videoGenerator' },
      description:
        'When you include Video generator, MediaConvert creates a video input with black frames. Use this setting if you do not have a video input or if you want to add black video frames before, or after, other inputs. You can specify Video generator, or you can specify an Input file, but you cannot specify both. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/video-generator.html',
    }),
    VideoSelector: VideoSelectorSchema.exactOptional().openapi({
      xml: { name: 'videoSelector' },
      description:
        'Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.',
    }),
  })
  .openapi({
    description:
      'Use inputs to define the source files used in your transcoding job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/specify-input-settings.html. You can use multiple video inputs to do input stitching. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/assembling-multiple-inputs-and-input-clips.html',
    required: [],
  })
  .openapi('Input')

type ListOfInputType = z.infer<typeof InputSchema>[]

const ListOfInputSchema: z.ZodType<ListOfInputType> = z.array(InputSchema).openapi('ListOfInput')

const StringMin1Max20Schema = z.string().min(1).max(20).openapi('StringMin1Max20')

const StringMin1Max50PatternAZAZ09Schema = z
  .string()
  .regex(/^[a-zA-Z0-9_\/_+=.@-]*$/)
  .min(1)
  .max(50)
  .openapi('StringMin1Max50PatternAZAZ09')

const StringMin1Max512PatternAZAZ09Schema = z
  .string()
  .regex(/^[a-zA-Z0-9_\/_+=.@-]*$/)
  .min(1)
  .max(512)
  .openapi('StringMin1Max512PatternAZAZ09')

const DoubleMin0Schema = z.float64().openapi('DoubleMin0')

const StringPatternHttpsKantarmediaComSchema = z
  .string()
  .regex(/^https:\/\/.*.kantarmedia.com$/)
  .openapi('StringPatternHttpsKantarmediaCom')

const StringPatternS3Schema = z
  .string()
  .regex(/^s3:\/\//)
  .openapi('StringPatternS3')

const StringMin1Max50Schema = z.string().min(1).max(50).openapi('StringMin1Max50')

const KantarWatermarkSettingsSchema = z
  .object({
    ChannelName: StringMin1Max20Schema.exactOptional().openapi({
      xml: { name: 'channelName' },
      description: 'Provide an audio channel name from your Kantar audio license.',
    }),
    ContentReference: StringMin1Max50PatternAZAZ09Schema.exactOptional().openapi({
      xml: { name: 'contentReference' },
      description: 'Specify a unique identifier for Kantar to use for this piece of content.',
    }),
    CredentialsSecretName: StringMin1Max512PatternAZAZ09Schema.exactOptional().openapi({
      xml: { name: 'credentialsSecretName' },
      description:
        'Provide the name of the AWS Secrets Manager secret where your Kantar credentials are stored. Note that your MediaConvert service role must provide access to this secret. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/granting-permissions-for-mediaconvert-to-access-secrets-manager-secret.html. For instructions on creating a secret, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_basic.html, in the AWS Secrets Manager User Guide.',
    }),
    FileOffset: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'fileOffset' },
      description:
        "Optional. Specify an offset, in whole seconds, from the start of your output and the beginning of the watermarking. When you don't specify an offset, Kantar defaults to zero.",
    }),
    KantarLicenseId: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'kantarLicenseId' },
      description: 'Provide your Kantar license ID number. You should get this number from Kantar.',
    }),
    KantarServerUrl: StringPatternHttpsKantarmediaComSchema.exactOptional().openapi({
      xml: { name: 'kantarServerUrl' },
      description:
        'Provide the HTTPS endpoint to the Kantar server. You should get this endpoint from Kantar.',
    }),
    LogDestination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'logDestination' },
      description:
        "Optional. Specify the Amazon S3 bucket where you want MediaConvert to store your Kantar watermark XML logs. When you don't specify a bucket, MediaConvert doesn't save these logs. Note that your MediaConvert service role must provide access to this location. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html",
    }),
    Metadata3: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'metadata3' },
      description:
        'You can optionally use this field to specify the first timestamp that Kantar embeds during watermarking. Kantar suggests that you be very cautious when using this Kantar feature, and that you use it only on channels that are managed specifically for use with this feature by your Audience Measurement Operator. For more information about this feature, contact Kantar technical support.',
    }),
    Metadata4: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'metadata4' },
      description:
        'Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.',
    }),
    Metadata5: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'metadata5' },
      description:
        'Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.',
    }),
    Metadata6: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'metadata6' },
      description:
        'Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.',
    }),
    Metadata7: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'metadata7' },
      description:
        'Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.',
    }),
    Metadata8: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'metadata8' },
      description:
        'Additional metadata that MediaConvert sends to Kantar. Maximum length is 50 characters.',
    }),
  })
  .openapi({
    description:
      'Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.',
    required: [],
  })
  .openapi('KantarWatermarkSettings')

const IntegerMin1Max17895697Schema = z.int().min(1).max(17895697).openapi('IntegerMin1Max17895697')

const IntegerMin1Max2147483640Schema = z
  .int()
  .min(1)
  .max(2147483640)
  .openapi('IntegerMin1Max2147483640')

const MotionImageInsertionFramerateSchema = z
  .object({
    FramerateDenominator: IntegerMin1Max17895697Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.',
    }),
    FramerateNumerator: IntegerMin1Max2147483640Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.',
    }),
  })
  .openapi({
    description:
      "For motion overlays that don't have a built-in frame rate, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. The overlay frame rate doesn't need to match the frame rate of the underlying video.",
    required: [],
  })
  .openapi('MotionImageInsertionFramerate')

const StringMin14PatternS3Mov09PngHttpsMov09PngSchema = z
  .string()
  .regex(
    /^((s3:\/\/(.*)(\.mov|[0-9]+\.png))|(https?:\/\/(.*)(\.mov|[0-9]+\.png)(\?([^&=]+=[^&]+&)*[^&=]+=[^&]+)?))$/,
  )
  .min(14)
  .openapi('StringMin14PatternS3Mov09PngHttpsMov09Png')

const MotionImageInsertionModeSchema = z
  .enum(['MOV', 'PNG'])
  .openapi({
    description:
      'Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.',
  })
  .openapi('MotionImageInsertionMode')

const MotionImageInsertionOffsetSchema = z
  .object({
    ImageX: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'imageX' },
      description:
        'Set the distance, in pixels, between the overlay and the left edge of the video frame.',
    }),
    ImageY: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'imageY' },
      description:
        'Set the distance, in pixels, between the overlay and the top edge of the video frame.',
    }),
  })
  .openapi({
    description:
      'Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.',
    required: [],
  })
  .openapi('MotionImageInsertionOffset')

const MotionImagePlaybackSchema = z
  .enum(['ONCE', 'REPEAT'])
  .openapi({
    description:
      'Specify whether your motion graphic overlay repeats on a loop or plays only once.',
  })
  .openapi('MotionImagePlayback')

const MotionImageInserterSchema = z
  .object({
    Framerate: MotionImageInsertionFramerateSchema.exactOptional().openapi({
      xml: { name: 'framerate' },
      description:
        "If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.",
    }),
    Input: StringMin14PatternS3Mov09PngHttpsMov09PngSchema.exactOptional().openapi({
      xml: { name: 'input' },
      description:
        'Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.',
    }),
    InsertionMode: MotionImageInsertionModeSchema.exactOptional().openapi({
      xml: { name: 'insertionMode' },
      description:
        'Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.',
    }),
    Offset: MotionImageInsertionOffsetSchema.exactOptional().openapi({
      xml: { name: 'offset' },
      description:
        "Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.",
    }),
    Playback: MotionImagePlaybackSchema.exactOptional().openapi({
      xml: { name: 'playback' },
      description:
        'Specify whether your motion graphic overlay repeats on a loop or plays only once.',
    }),
    StartTime: StringMin11Max11Pattern01D20305D205DSchema.exactOptional().openapi({
      xml: { name: 'startTime' },
      description:
        "Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html Find job-wide and input timecode configuration settings in your JSON job settings specification at settings>timecodeConfig>source and settings>inputs>timecodeSource.",
    }),
  })
  .openapi({
    description:
      'Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.',
    required: [],
  })
  .openapi('MotionImageInserter')

const IntegerMin0Max0Schema = z.int().min(0).max(0).openapi('IntegerMin0Max0')

const NielsenConfigurationSchema = z
  .object({
    BreakoutCode: IntegerMin0Max0Schema.exactOptional().openapi({
      xml: { name: 'breakoutCode' },
      description:
        'Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.',
    }),
    DistributorId: StringSchema.exactOptional().openapi({
      xml: { name: 'distributorId' },
      description:
        'Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.',
    }),
  })
  .openapi({
    description:
      "Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.",
    required: [],
  })
  .openapi('NielsenConfiguration')

const NielsenActiveWatermarkProcessTypeSchema = z
  .enum(['NAES2_AND_NW', 'CBET', 'NAES2_AND_NW_AND_CBET'])
  .openapi({
    description:
      'Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW (NAES2_AND_NW), you must provide a value for the setting SID (sourceId). When you choose CBET (CBET), you must provide a value for the setting CSID (cbetSourceId). When you choose NAES 2, NW, and CBET (NAES2_AND_NW_AND_CBET), you must provide values for both of these settings.',
  })
  .openapi('NielsenActiveWatermarkProcessType')

const StringPattern0xAFaF0908190908Schema = z
  .string()
  .regex(/(^0x[A-Fa-f0-9]{0,8}$|^[1-9][0-9]{0,8}$)/)
  .openapi('StringPattern0xAFaF0908190908')

const IntegerMin0Max65534Schema = z.int().min(0).max(65534).openapi('IntegerMin0Max65534')

const NielsenSourceWatermarkStatusTypeSchema = z
  .enum(['CLEAN', 'WATERMARKED'])
  .openapi({
    description:
      "Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked (WATERMARKED), the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already have non-linear Nielsen watermarks.",
  })
  .openapi('NielsenSourceWatermarkStatusType')

const StringPatternHttpsSchema = z
  .string()
  .regex(/^https:\/\//)
  .openapi('StringPatternHttps')

const NielsenUniqueTicPerAudioTrackTypeSchema = z
  .enum(['RESERVE_UNIQUE_TICS_PER_TRACK', 'SAME_TICS_PER_TRACK'])
  .openapi({
    description:
      'To create assets that have the same TIC values in each audio track, keep the default value Share TICs (SAME_TICS_PER_TRACK). To create assets that have unique TIC values for each audio track, choose Use unique TICs (RESERVE_UNIQUE_TICS_PER_TRACK).',
  })
  .openapi('NielsenUniqueTicPerAudioTrackType')

const NielsenNonLinearWatermarkSettingsSchema = z
  .object({
    ActiveWatermarkProcess: NielsenActiveWatermarkProcessTypeSchema.exactOptional().openapi({
      xml: { name: 'activeWatermarkProcess' },
      description:
        'Choose the type of Nielsen watermarks that you want in your outputs. When you choose NAES 2 and NW (NAES2_AND_NW), you must provide a value for the setting SID (sourceId). When you choose CBET (CBET), you must provide a value for the setting CSID (cbetSourceId). When you choose NAES 2, NW, and CBET (NAES2_AND_NW_AND_CBET), you must provide values for both of these settings.',
    }),
    AdiFilename: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'adiFilename' },
      description:
        'Optional. Use this setting when you want the service to include an ADI file in the Nielsen metadata .zip file. To provide an ADI file, store it in Amazon S3 and provide a URL to it here. The URL should be in the following format: S3://bucket/path/ADI-file. For more information about the metadata .zip file, see the setting Metadata destination (metadataDestination).',
    }),
    AssetId: StringMin1Max20Schema.exactOptional().openapi({
      xml: { name: 'assetId' },
      description:
        'Use the asset ID that you provide to Nielsen to uniquely identify this asset. Required for all Nielsen non-linear watermarking.',
    }),
    AssetName: StringMin1Max50Schema.exactOptional().openapi({
      xml: { name: 'assetName' },
      description:
        'Use the asset name that you provide to Nielsen for this asset. Required for all Nielsen non-linear watermarking.',
    }),
    CbetSourceId: StringPattern0xAFaF0908190908Schema.exactOptional().openapi({
      xml: { name: 'cbetSourceId' },
      description:
        'Use the CSID that Nielsen provides to you. This CBET source ID should be unique to your Nielsen account but common to all of your output assets that have CBET watermarking. Required when you choose a value for the setting Watermark types (ActiveWatermarkProcess) that includes CBET.',
    }),
    EpisodeId: StringMin1Max20Schema.exactOptional().openapi({
      xml: { name: 'episodeId' },
      description: 'Optional. If this asset uses an episode ID with Nielsen, provide it here.',
    }),
    MetadataDestination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'metadataDestination' },
      description:
        "Specify the Amazon S3 location where you want MediaConvert to save your Nielsen non-linear metadata .zip file. This Amazon S3 bucket must be in the same Region as the one where you do your MediaConvert transcoding. If you want to include an ADI file in this .zip file, use the setting ADI file (adiFilename) to specify it. MediaConvert delivers the Nielsen metadata .zip files only to your metadata destination Amazon S3 bucket. It doesn't deliver the .zip files to Nielsen. You are responsible for delivering the metadata .zip files to Nielsen.",
    }),
    SourceId: IntegerMin0Max65534Schema.exactOptional().openapi({
      xml: { name: 'sourceId' },
      description:
        'Use the SID that Nielsen provides to you. This source ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking. This ID should be unique to your Nielsen account but common to all of your output assets. Required for all Nielsen non-linear watermarking.',
    }),
    SourceWatermarkStatus: NielsenSourceWatermarkStatusTypeSchema.exactOptional().openapi({
      xml: { name: 'sourceWatermarkStatus' },
      description:
        "Required. Specify whether your source content already contains Nielsen non-linear watermarks. When you set this value to Watermarked (WATERMARKED), the service fails the job. Nielsen requires that you add non-linear watermarking to only clean content that doesn't already have non-linear Nielsen watermarks.",
    }),
    TicServerUrl: StringPatternHttpsSchema.exactOptional().openapi({
      xml: { name: 'ticServerUrl' },
      description:
        "Specify the endpoint for the TIC server that you have deployed and configured in the AWS Cloud. Required for all Nielsen non-linear watermarking. MediaConvert can't connect directly to a TIC server. Instead, you must use API Gateway to provide a RESTful interface between MediaConvert and a TIC server that you deploy in your AWS account. For more information on deploying a TIC server in your AWS account and the required API Gateway, contact Nielsen support.",
    }),
    UniqueTicPerAudioTrack: NielsenUniqueTicPerAudioTrackTypeSchema.exactOptional().openapi({
      xml: { name: 'uniqueTicPerAudioTrack' },
      description:
        'To create assets that have the same TIC values in each audio track, keep the default value Share TICs (SAME_TICS_PER_TRACK). To create assets that have unique TIC values for each audio track, choose Use unique TICs (RESERVE_UNIQUE_TICS_PER_TRACK).',
    }),
  })
  .openapi({
    description:
      'Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]',
    required: [],
  })
  .openapi('NielsenNonLinearWatermarkSettings')

const IntegerMin100000Max100000000Schema = z
  .int()
  .min(100000)
  .max(100000000)
  .openapi('IntegerMin100000Max100000000')

const IntegerMin3Max15Schema = z.int().min(3).max(15).openapi('IntegerMin3Max15')

const IntegerMin32Max8192Schema = z.int().min(32).max(8192).openapi('IntegerMin32Max8192')

const RequiredFlagSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({ description: 'Set to ENABLED to force a rendition to be included.' })
  .openapi('RequiredFlag')

const AllowedRenditionSizeSchema = z
  .object({
    Height: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'Use Height to define the video resolution height, in pixels, for this rule.',
    }),
    Required: RequiredFlagSchema.exactOptional().openapi({
      xml: { name: 'required' },
      description: 'Set to ENABLED to force a rendition to be included.',
    }),
    Width: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'Use Width to define the video resolution width, in pixels, for this rule.',
    }),
  })
  .openapi({
    description:
      'Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.',
    required: [],
  })
  .openapi('AllowedRenditionSize')

const ListOfAllowedRenditionSizeSchema = z
  .array(AllowedRenditionSizeSchema)
  .openapi('ListOfAllowedRenditionSize')

const ForceIncludeRenditionSizeSchema = z
  .object({
    Height: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'Use Height to define the video resolution height, in pixels, for this rule.',
    }),
    Width: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'Use Width to define the video resolution width, in pixels, for this rule.',
    }),
  })
  .openapi({
    description:
      'Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting.',
    required: [],
  })
  .openapi('ForceIncludeRenditionSize')

const ListOfForceIncludeRenditionSizeSchema = z
  .array(ForceIncludeRenditionSizeSchema)
  .openapi('ListOfForceIncludeRenditionSize')

const MinBottomRenditionSizeSchema = z
  .object({
    Height: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'Use Height to define the video resolution height, in pixels, for this rule.',
    }),
    Width: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'Use Width to define the video resolution width, in pixels, for this rule.',
    }),
  })
  .openapi({
    description:
      'Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.',
    required: [],
  })
  .openapi('MinBottomRenditionSize')

const MinTopRenditionSizeSchema = z
  .object({
    Height: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'Use Height to define the video resolution height, in pixels, for this rule.',
    }),
    Width: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'Use Width to define the video resolution width, in pixels, for this rule.',
    }),
  })
  .openapi({
    description:
      'Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.',
    required: [],
  })
  .openapi('MinTopRenditionSize')

const RuleTypeSchema = z
  .enum([
    'MIN_TOP_RENDITION_SIZE',
    'MIN_BOTTOM_RENDITION_SIZE',
    'FORCE_INCLUDE_RENDITIONS',
    'ALLOWED_RENDITIONS',
  ])
  .openapi({
    description:
      'Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * (Required) The number of resolutions that you specify must be equal to, or greater than, the Max renditions setting. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.',
  })
  .openapi('RuleType')

const AutomatedAbrRuleSchema = z
  .object({
    AllowedRenditions: ListOfAllowedRenditionSizeSchema.exactOptional().openapi({
      xml: { name: 'allowedRenditions' },
      description:
        'When customer adds the allowed renditions rule for auto ABR ladder, they are required to add at leat one rendition to allowedRenditions list',
    }),
    ForceIncludeRenditions: ListOfForceIncludeRenditionSizeSchema.exactOptional().openapi({
      xml: { name: 'forceIncludeRenditions' },
      description:
        'When customer adds the force include renditions rule for auto ABR ladder, they are required to add at leat one rendition to forceIncludeRenditions list',
    }),
    MinBottomRenditionSize: MinBottomRenditionSizeSchema.exactOptional().openapi({
      xml: { name: 'minBottomRenditionSize' },
      description:
        'Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size.',
    }),
    MinTopRenditionSize: MinTopRenditionSizeSchema.exactOptional().openapi({
      xml: { name: 'minTopRenditionSize' },
      description:
        'Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution.',
    }),
    Type: RuleTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        'Use Min top rendition size to specify a minimum size for the highest resolution in your ABR stack. * The highest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 1280x720 the highest resolution in your ABR stack will be equal to or greater than 1280x720. * If you specify a value for Max resolution, the value that you specify for Min top rendition size must be less than, or equal to, Max resolution. Use Min bottom rendition size to specify a minimum size for the lowest resolution in your ABR stack. * The lowest resolution in your ABR stack will be equal to or greater than the value that you enter. For example: If you specify 640x360 the lowest resolution in your ABR stack will be equal to or greater than to 640x360. * If you specify a Min top rendition size rule, the value that you specify for Min bottom rendition size must be less than, or equal to, Min top rendition size. Use Force include renditions to specify one or more resolutions to include your ABR stack. * (Recommended) To optimize automated ABR, specify as few resolutions as possible. * (Required) The number of resolutions that you specify must be equal to, or less than, the Max renditions setting. * If you specify a Min top rendition size rule, specify at least one resolution that is equal to, or greater than, Min top rendition size. * If you specify a Min bottom rendition size rule, only specify resolutions that are equal to, or greater than, Min bottom rendition size. * If you specify a Force include renditions rule, do not specify a separate rule for Allowed renditions. * Note: The ABR stack may include other resolutions that you do not specify here, depending on the Max renditions setting. Use Allowed renditions to specify a list of possible resolutions in your ABR stack. * (Required) The number of resolutions that you specify must be equal to, or greater than, the Max renditions setting. * MediaConvert will create an ABR stack exclusively from the list of resolutions that you specify. * Some resolutions in the Allowed renditions list may not be included, however you can force a resolution to be included by setting Required to ENABLED. * You must specify at least one resolution that is greater than or equal to any resolutions that you specify in Min top rendition size or Min bottom rendition size. * If you specify Allowed renditions, you must not specify a separate rule for Force include renditions.',
    }),
  })
  .openapi({
    description:
      'Specify one or more Automated ABR rule types. Note: Force include and Allowed renditions are mutually exclusive.',
    required: [],
  })
  .openapi('AutomatedAbrRule')

const ListOfAutomatedAbrRuleSchema = z
  .array(AutomatedAbrRuleSchema)
  .openapi('ListOfAutomatedAbrRule')

const AutomatedAbrSettingsSchema = z
  .object({
    MaxAbrBitrate: IntegerMin100000Max100000000Schema.exactOptional().openapi({
      xml: { name: 'maxAbrBitrate' },
      description:
        "Optional. The maximum target bit rate used in your automated ABR stack. Use this value to set an upper limit on the bandwidth consumed by the highest-quality rendition. This is the rendition that is delivered to viewers with the fastest internet connections. If you don't specify a value, MediaConvert uses 8,000,000 (8 mb/s) by default.",
    }),
    MaxRenditions: IntegerMin3Max15Schema.exactOptional().openapi({
      xml: { name: 'maxRenditions' },
      description:
        'Optional. The maximum number of renditions that MediaConvert will create in your automated ABR stack. The number of renditions is determined automatically, based on analysis of each job, but will never exceed this limit. When you set this to Auto in the console, which is equivalent to excluding it from your JSON job specification, MediaConvert defaults to a limit of 15.',
    }),
    MinAbrBitrate: IntegerMin100000Max100000000Schema.exactOptional().openapi({
      xml: { name: 'minAbrBitrate' },
      description:
        "Optional. The minimum target bitrate used in your automated ABR stack. Use this value to set a lower limit on the bitrate of video delivered to viewers with slow internet connections. If you don't specify a value, MediaConvert uses 600,000 (600 kb/s) by default.",
    }),
    Rules: ListOfAutomatedAbrRuleSchema.exactOptional().openapi({
      xml: { name: 'rules' },
      description:
        'Optional. Use Automated ABR rules to specify restrictions for the rendition sizes MediaConvert will create in your ABR stack. You can use these rules if your ABR workflow has specific rendition size requirements, but you still want MediaConvert to optimize for video quality and overall file size.',
    }),
  })
  .openapi({
    description:
      'Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.',
    required: [],
  })
  .openapi('AutomatedAbrSettings')

const AutomatedEncodingSettingsSchema = z
  .object({
    AbrSettings: AutomatedAbrSettingsSchema.exactOptional().openapi({
      xml: { name: 'abrSettings' },
      description:
        'Use automated ABR to have MediaConvert set up the renditions in your ABR package for you automatically, based on characteristics of your input video. This feature optimizes video quality while minimizing the overall size of your ABR package.',
    }),
  })
  .openapi({
    description:
      'Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.',
    required: [],
  })
  .openapi('AutomatedEncodingSettings')

const CmafAdditionalManifestSchema = z
  .object({
    ManifestNameModifier: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'manifestNameModifier' },
      description:
        'Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.',
    }),
    SelectedOutputs: ListOfStringMin1Schema.exactOptional().openapi({
      xml: { name: 'selectedOutputs' },
      description:
        'Specify the outputs that you want this additional top-level manifest to reference.',
    }),
  })
  .openapi({
    description:
      'Specify the details for each pair of HLS and DASH additional manifests that you want the service to generate for this CMAF output group. Each pair of manifests can reference a different subset of outputs in the group.',
    required: [],
  })
  .openapi('CmafAdditionalManifest')

const ListOfCmafAdditionalManifestSchema = z
  .array(CmafAdditionalManifestSchema)
  .openapi('ListOfCmafAdditionalManifest')

const CmafClientCacheSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.',
  })
  .openapi('CmafClientCache')

const CmafCodecSpecificationSchema = z
  .enum(['RFC_6381', 'RFC_4281'])
  .openapi({
    description:
      'Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.',
  })
  .openapi('CmafCodecSpecification')

const DashManifestStyleSchema = z
  .enum(['BASIC', 'COMPACT', 'DISTINCT'])
  .openapi({
    description:
      'Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.',
  })
  .openapi('DashManifestStyle')

const S3ObjectCannedAclSchema = z
  .enum(['PUBLIC_READ', 'AUTHENTICATED_READ', 'BUCKET_OWNER_READ', 'BUCKET_OWNER_FULL_CONTROL'])
  .openapi({
    description: 'Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.',
  })
  .openapi('S3ObjectCannedAcl')

const S3DestinationAccessControlSchema = z
  .object({
    CannedAcl: S3ObjectCannedAclSchema.exactOptional().openapi({
      xml: { name: 'cannedAcl' },
      description: 'Choose an Amazon S3 canned ACL for MediaConvert to apply to this output.',
    }),
  })
  .openapi({
    description:
      "Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.",
    required: [],
  })
  .openapi('S3DestinationAccessControl')

const S3ServerSideEncryptionTypeSchema = z
  .enum(['SERVER_SIDE_ENCRYPTION_S3', 'SERVER_SIDE_ENCRYPTION_KMS'])
  .openapi({
    description:
      'Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting KMS ARN (kmsKeyArn).',
  })
  .openapi('S3ServerSideEncryptionType')

const StringPatternAZaZ0902Schema = z
  .string()
  .regex(/^[A-Za-z0-9+\/]+={0,2}$/)
  .openapi('StringPatternAZaZ0902')

const StringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912MrkAFAF0932Schema =
  z
    .string()
    .regex(
      /^arn:aws(-us-gov|-cn)?:kms:[a-z-]{2,6}-(east|west|central|((north|south)(east|west)?))-[1-9]{1,2}:\d{12}:key\/([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}|mrk-[a-fA-F0-9]{32})$/,
    )
    .openapi(
      'StringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912MrkAFAF0932',
    )

const S3EncryptionSettingsSchema = z
  .object({
    EncryptionType: S3ServerSideEncryptionTypeSchema.exactOptional().openapi({
      xml: { name: 'encryptionType' },
      description:
        'Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting KMS ARN (kmsKeyArn).',
    }),
    KmsEncryptionContext: StringPatternAZaZ0902Schema.exactOptional().openapi({
      xml: { name: 'kmsEncryptionContext' },
      description:
        'Optionally, specify the encryption context that you want to use alongside your KMS key. AWS KMS uses this encryption context as additional authenticated data (AAD) to support authenticated encryption. This value must be a base64-encoded UTF-8 string holding JSON which represents a string-string map. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). For more information about encryption context, see: https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context.',
    }),
    KmsKeyArn:
      StringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912MrkAFAF0932Schema.exactOptional().openapi(
        {
          xml: { name: 'kmsKeyArn' },
          description:
            "Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.",
        },
      ),
  })
  .openapi({
    description:
      'Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.',
    required: [],
  })
  .openapi('S3EncryptionSettings')

const S3DestinationSettingsSchema = z
  .object({
    AccessControl: S3DestinationAccessControlSchema.exactOptional().openapi({
      xml: { name: 'accessControl' },
      description:
        "Optional. Have MediaConvert automatically apply Amazon S3 access control for the outputs in this output group. When you don't use this setting, S3 automatically applies the default access control list PRIVATE.",
    }),
    Encryption: S3EncryptionSettingsSchema.exactOptional().openapi({
      xml: { name: 'encryption' },
      description:
        'Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.',
    }),
  })
  .openapi({ description: 'Settings associated with S3 destination', required: [] })
  .openapi('S3DestinationSettings')

const DestinationSettingsSchema = z
  .object({
    S3Settings: S3DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 's3Settings' },
      description: 'Settings associated with S3 destination',
    }),
  })
  .openapi({
    description:
      'Settings associated with the destination. Will vary based on the type of destination',
    required: [],
  })
  .openapi('DestinationSettings')

const StringMin32Max32Pattern09aFAF32Schema = z
  .string()
  .regex(/^[0-9a-fA-F]{32}$/)
  .length(32)
  .openapi('StringMin32Max32Pattern09aFAF32')

const CmafEncryptionTypeSchema = z
  .enum(['SAMPLE_AES', 'AES_CTR'])
  .openapi({
    description:
      'Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).',
  })
  .openapi('CmafEncryptionType')

const CmafInitializationVectorInManifestSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.',
  })
  .openapi('CmafInitializationVectorInManifest')

const StringPatternArnAwsUsGovAcmSchema = z
  .string()
  .regex(/^arn:aws(-us-gov)?:acm:/)
  .openapi('StringPatternArnAwsUsGovAcm')

const StringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema = z
  .string()
  .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  .length(36)
  .openapi('StringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12')

const ListOfStringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema = z
  .array(StringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema)
  .openapi('ListOfStringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12')

const StringPatternWSchema = z
  .string()
  .regex(/^[\w-]+$/)
  .openapi('StringPatternW')

const SpekeKeyProviderCmafSchema = z
  .object({
    CertificateArn: StringPatternArnAwsUsGovAcmSchema.exactOptional().openapi({
      xml: { name: 'certificateArn' },
      description:
        "If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.",
    }),
    DashSignaledSystemIds:
      ListOfStringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema.exactOptional().openapi(
        {
          xml: { name: 'dashSignaledSystemIds' },
          description:
            'Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.',
        },
      ),
    HlsSignaledSystemIds:
      ListOfStringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema.exactOptional().openapi(
        {
          xml: { name: 'hlsSignaledSystemIds' },
          description:
            'Specify the DRM system ID that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. The HLS manifest can currently signal only one system ID. For more information, see https://dashif.org/identifiers/content_protection/.',
        },
      ),
    ResourceId: StringPatternWSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description:
        'Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.',
    }),
    Url: StringPatternHttpsSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description:
        'Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.',
    }),
  })
  .openapi({
    description:
      'If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.',
    required: [],
  })
  .openapi('SpekeKeyProviderCmaf')

const StringPatternIdentityAZaZ26AZaZ09163Schema = z
  .string()
  .regex(/^(identity|[A-Za-z]{2,6}(\.[A-Za-z0-9-]{1,63})+)$/)
  .openapi('StringPatternIdentityAZaZ26AZaZ09163')

const StringPatternDDSchema = z
  .string()
  .regex(/^(\d+(\/\d+)*)$/)
  .openapi('StringPatternDD')

const StringPatternAZaZ0932Schema = z
  .string()
  .regex(/^[A-Za-z0-9]{32}$/)
  .openapi('StringPatternAZaZ0932')

const StaticKeyProviderSchema = z
  .object({
    KeyFormat: StringPatternIdentityAZaZ26AZaZ09163Schema.exactOptional().openapi({
      xml: { name: 'keyFormat' },
      description:
        "Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.",
    }),
    KeyFormatVersions: StringPatternDDSchema.exactOptional().openapi({
      xml: { name: 'keyFormatVersions' },
      description:
        'Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).',
    }),
    StaticKeyValue: StringPatternAZaZ0932Schema.exactOptional().openapi({
      xml: { name: 'staticKeyValue' },
      description:
        'Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue).',
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description:
        'Relates to DRM implementation. The location of the license server used for protecting content.',
    }),
  })
  .openapi({
    description: 'Use these settings to set up encryption with a static key provider.',
    required: [],
  })
  .openapi('StaticKeyProvider')

const CmafKeyProviderTypeSchema = z
  .enum(['SPEKE', 'STATIC_KEY'])
  .openapi({
    description:
      'Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.',
  })
  .openapi('CmafKeyProviderType')

const CmafEncryptionSettingsSchema = z
  .object({
    ConstantInitializationVector: StringMin32Max32Pattern09aFAF32Schema.exactOptional().openapi({
      xml: { name: 'constantInitializationVector' },
      description:
        'This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.',
    }),
    EncryptionMethod: CmafEncryptionTypeSchema.exactOptional().openapi({
      xml: { name: 'encryptionMethod' },
      description:
        'Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).',
    }),
    InitializationVectorInManifest:
      CmafInitializationVectorInManifestSchema.exactOptional().openapi({
        xml: { name: 'initializationVectorInManifest' },
        description:
          'When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.',
      }),
    SpekeKeyProvider: SpekeKeyProviderCmafSchema.exactOptional().openapi({
      xml: { name: 'spekeKeyProvider' },
      description:
        'If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.',
    }),
    StaticKeyProvider: StaticKeyProviderSchema.exactOptional().openapi({
      xml: { name: 'staticKeyProvider' },
      description: 'Use these settings to set up encryption with a static key provider.',
    }),
    Type: CmafKeyProviderTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        'Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.',
    }),
  })
  .openapi({ description: 'Settings for CMAF encryption', required: [] })
  .openapi('CmafEncryptionSettings')

const CmafImageBasedTrickPlaySchema = z
  .enum(['NONE', 'THUMBNAIL', 'THUMBNAIL_AND_FULLFRAME', 'ADVANCED'])
  .openapi({
    description:
      'Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. When you enable Write HLS manifest (WriteHlsManifest), MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. When you enable Write DASH manifest (WriteDashManifest), MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md',
  })
  .openapi('CmafImageBasedTrickPlay')

const CmafIntervalCadenceSchema = z
  .enum(['FOLLOW_IFRAME', 'FOLLOW_CUSTOM'])
  .openapi({
    description:
      'The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.',
  })
  .openapi('CmafIntervalCadence')

const IntegerMin2Max4096Schema = z.int().min(2).max(4096).openapi('IntegerMin2Max4096')

const DoubleMin0Max2147483647Schema = z.float64().openapi('DoubleMin0Max2147483647')

const IntegerMin8Max4096Schema = z.int().min(8).max(4096).openapi('IntegerMin8Max4096')

const IntegerMin1Max2048Schema = z.int().min(1).max(2048).openapi('IntegerMin1Max2048')

const IntegerMin1Max512Schema = z.int().min(1).max(512).openapi('IntegerMin1Max512')

const CmafImageBasedTrickPlaySettingsSchema = z
  .object({
    IntervalCadence: CmafIntervalCadenceSchema.exactOptional().openapi({
      xml: { name: 'intervalCadence' },
      description:
        'The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.',
    }),
    ThumbnailHeight: IntegerMin2Max4096Schema.exactOptional().openapi({
      xml: { name: 'thumbnailHeight' },
      description:
        'Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.',
    }),
    ThumbnailInterval: DoubleMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'thumbnailInterval' },
      description:
        "Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.",
    }),
    ThumbnailWidth: IntegerMin8Max4096Schema.exactOptional().openapi({
      xml: { name: 'thumbnailWidth' },
      description:
        'Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.',
    }),
    TileHeight: IntegerMin1Max2048Schema.exactOptional().openapi({
      xml: { name: 'tileHeight' },
      description:
        'Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.',
    }),
    TileWidth: IntegerMin1Max512Schema.exactOptional().openapi({
      xml: { name: 'tileWidth' },
      description:
        'Number of thumbnails in each row of a tile image. Set a value between 1 and 512.',
    }),
  })
  .openapi({
    description: 'Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED',
    required: [],
  })
  .openapi('CmafImageBasedTrickPlaySettings')

const CmafManifestCompressionSchema = z
  .enum(['GZIP', 'NONE'])
  .openapi({ description: 'When set to GZIP, compresses HLS playlist.' })
  .openapi('CmafManifestCompression')

const CmafManifestDurationFormatSchema = z
  .enum(['FLOATING_POINT', 'INTEGER'])
  .openapi({
    description:
      'Indicates whether the output manifest should use floating point values for segment duration.',
  })
  .openapi('CmafManifestDurationFormat')

const CmafMpdManifestBandwidthTypeSchema = z
  .enum(['AVERAGE', 'MAX'])
  .openapi({
    description:
      'Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.',
  })
  .openapi('CmafMpdManifestBandwidthType')

const CmafMpdProfileSchema = z
  .enum(['MAIN_PROFILE', 'ON_DEMAND_PROFILE'])
  .openapi({
    description:
      'Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).',
  })
  .openapi('CmafMpdProfile')

const CmafPtsOffsetHandlingForBFramesSchema = z
  .enum(['ZERO_BASED', 'MATCH_INITIAL_PTS'])
  .openapi({
    description:
      "Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS (MATCH_INITIAL_PTS) when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based (ZERO_BASED) to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.",
  })
  .openapi('CmafPtsOffsetHandlingForBFrames')

const CmafSegmentControlSchema = z
  .enum(['SINGLE_FILE', 'SEGMENTED_FILES'])
  .openapi({
    description:
      'When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.',
  })
  .openapi('CmafSegmentControl')

const CmafSegmentLengthControlSchema = z
  .enum(['EXACT', 'GOP_MULTIPLE'])
  .openapi({
    description:
      'Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
  })
  .openapi('CmafSegmentLengthControl')

const CmafStreamInfResolutionSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.',
  })
  .openapi('CmafStreamInfResolution')

const CmafTargetDurationCompatibilityModeSchema = z
  .enum(['LEGACY', 'SPEC_COMPLIANT'])
  .openapi({
    description:
      'When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.',
  })
  .openapi('CmafTargetDurationCompatibilityMode')

const CmafVideoCompositionOffsetsSchema = z
  .enum(['SIGNED', 'UNSIGNED'])
  .openapi({
    description:
      'Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.',
  })
  .openapi('CmafVideoCompositionOffsets')

const CmafWriteDASHManifestSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description: 'When set to ENABLED, a DASH MPD manifest will be generated for this output.',
  })
  .openapi('CmafWriteDASHManifest')

const CmafWriteHLSManifestSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description: 'When set to ENABLED, an Apple HLS manifest will be generated for this output.',
  })
  .openapi('CmafWriteHLSManifest')

const CmafWriteSegmentTimelineInRepresentationSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      "When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.",
  })
  .openapi('CmafWriteSegmentTimelineInRepresentation')

const CmafGroupSettingsSchema = z
  .object({
    AdditionalManifests: ListOfCmafAdditionalManifestSchema.exactOptional().openapi({
      xml: { name: 'additionalManifests' },
      description:
        'By default, the service creates one top-level .m3u8 HLS manifest and one top -level .mpd DASH manifest for each CMAF output group in your job. These default manifests reference every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here. For each additional manifest that you specify, the service creates one HLS manifest and one DASH manifest.',
    }),
    BaseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrl' },
      description:
        'A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.',
    }),
    ClientCache: CmafClientCacheSchema.exactOptional().openapi({
      xml: { name: 'clientCache' },
      description:
        'Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.',
    }),
    CodecSpecification: CmafCodecSpecificationSchema.exactOptional().openapi({
      xml: { name: 'codecSpecification' },
      description:
        'Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.',
    }),
    DashManifestStyle: DashManifestStyleSchema.exactOptional().openapi({
      xml: { name: 'dashManifestStyle' },
      description:
        'Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.',
    }),
    Destination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'destination' },
      description:
        'Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.',
    }),
    DestinationSettings: DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings associated with the destination. Will vary based on the type of destination',
    }),
    Encryption: CmafEncryptionSettingsSchema.exactOptional().openapi({
      xml: { name: 'encryption' },
      description: 'DRM settings.',
    }),
    FragmentLength: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'fragmentLength' },
      description:
        "Specify the length, in whole seconds, of the mp4 fragments. When you don't specify a value, MediaConvert defaults to 2. Related setting: Use Fragment length control (FragmentLengthControl) to specify whether the encoder enforces this value strictly.",
    }),
    ImageBasedTrickPlay: CmafImageBasedTrickPlaySchema.exactOptional().openapi({
      xml: { name: 'imageBasedTrickPlay' },
      description:
        'Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. When you enable Write HLS manifest (WriteHlsManifest), MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. When you enable Write DASH manifest (WriteDashManifest), MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md',
    }),
    ImageBasedTrickPlaySettings: CmafImageBasedTrickPlaySettingsSchema.exactOptional().openapi({
      xml: { name: 'imageBasedTrickPlaySettings' },
      description: 'Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED',
    }),
    ManifestCompression: CmafManifestCompressionSchema.exactOptional().openapi({
      xml: { name: 'manifestCompression' },
      description: 'When set to GZIP, compresses HLS playlist.',
    }),
    ManifestDurationFormat: CmafManifestDurationFormatSchema.exactOptional().openapi({
      xml: { name: 'manifestDurationFormat' },
      description:
        'Indicates whether the output manifest should use floating point values for segment duration.',
    }),
    MinBufferTime: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minBufferTime' },
      description:
        'Minimum time of initially buffered media that is needed to ensure smooth playout.',
    }),
    MinFinalSegmentLength: DoubleMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minFinalSegmentLength' },
      description:
        'Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.',
    }),
    MpdManifestBandwidthType: CmafMpdManifestBandwidthTypeSchema.exactOptional().openapi({
      xml: { name: 'mpdManifestBandwidthType' },
      description:
        'Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.',
    }),
    MpdProfile: CmafMpdProfileSchema.exactOptional().openapi({
      xml: { name: 'mpdProfile' },
      description:
        'Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).',
    }),
    PtsOffsetHandlingForBFrames: CmafPtsOffsetHandlingForBFramesSchema.exactOptional().openapi({
      xml: { name: 'ptsOffsetHandlingForBFrames' },
      description:
        "Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS (MATCH_INITIAL_PTS) when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based (ZERO_BASED) to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.",
    }),
    SegmentControl: CmafSegmentControlSchema.exactOptional().openapi({
      xml: { name: 'segmentControl' },
      description:
        'When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.',
    }),
    SegmentLength: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'segmentLength' },
      description:
        "Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control (SegmentLengthControl) to specify whether the encoder enforces this value strictly. Use Segment control (CmafSegmentControl) to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.",
    }),
    SegmentLengthControl: CmafSegmentLengthControlSchema.exactOptional().openapi({
      xml: { name: 'segmentLengthControl' },
      description:
        'Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
    }),
    StreamInfResolution: CmafStreamInfResolutionSchema.exactOptional().openapi({
      xml: { name: 'streamInfResolution' },
      description:
        'Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.',
    }),
    TargetDurationCompatibilityMode:
      CmafTargetDurationCompatibilityModeSchema.exactOptional().openapi({
        xml: { name: 'targetDurationCompatibilityMode' },
        description:
          'When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.',
      }),
    VideoCompositionOffsets: CmafVideoCompositionOffsetsSchema.exactOptional().openapi({
      xml: { name: 'videoCompositionOffsets' },
      description:
        'Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.',
    }),
    WriteDashManifest: CmafWriteDASHManifestSchema.exactOptional().openapi({
      xml: { name: 'writeDashManifest' },
      description: 'When set to ENABLED, a DASH MPD manifest will be generated for this output.',
    }),
    WriteHlsManifest: CmafWriteHLSManifestSchema.exactOptional().openapi({
      xml: { name: 'writeHlsManifest' },
      description: 'When set to ENABLED, an Apple HLS manifest will be generated for this output.',
    }),
    WriteSegmentTimelineInRepresentation:
      CmafWriteSegmentTimelineInRepresentationSchema.exactOptional().openapi({
        xml: { name: 'writeSegmentTimelineInRepresentation' },
        description:
          "When you enable Precise segment duration in DASH manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.",
      }),
  })
  .openapi({
    description:
      'Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to CMAF_GROUP_SETTINGS.',
    required: [],
  })
  .openapi('CmafGroupSettings')

const DashAdditionalManifestSchema = z
  .object({
    ManifestNameModifier: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'manifestNameModifier' },
      description:
        'Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your DASH group is film-name.mpd. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.mpd.',
    }),
    SelectedOutputs: ListOfStringMin1Schema.exactOptional().openapi({
      xml: { name: 'selectedOutputs' },
      description:
        'Specify the outputs that you want this additional top-level manifest to reference.',
    }),
  })
  .openapi({
    description:
      'Specify the details for each additional DASH manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.',
    required: [],
  })
  .openapi('DashAdditionalManifest')

const ListOfDashAdditionalManifestSchema = z
  .array(DashAdditionalManifestSchema)
  .openapi('ListOfDashAdditionalManifest')

const DashIsoGroupAudioChannelConfigSchemeIdUriSchema = z
  .enum(['MPEG_CHANNEL_CONFIGURATION', 'DOLBY_CHANNEL_CONFIGURATION'])
  .openapi({
    description:
      'Use this setting only when your audio codec is a Dolby one (AC3, EAC3, or Atmos) and your downstream workflow requires that your DASH manifest use the Dolby channel configuration tag, rather than the MPEG one. For example, you might need to use this to make dynamic ad insertion work. Specify which audio channel configuration scheme ID URI MediaConvert writes in your DASH manifest. Keep the default value, MPEG channel configuration (MPEG_CHANNEL_CONFIGURATION), to have MediaConvert write this: urn:mpeg:mpegB:cicp:ChannelConfiguration. Choose Dolby channel configuration (DOLBY_CHANNEL_CONFIGURATION) to have MediaConvert write this instead: tag:dolby.com,2014:dash:audio_channel_configuration:2011.',
  })
  .openapi('DashIsoGroupAudioChannelConfigSchemeIdUri')

const DashIsoPlaybackDeviceCompatibilitySchema = z
  .enum(['CENC_V1', 'UNENCRYPTED_SEI'])
  .openapi({
    description:
      'This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.',
  })
  .openapi('DashIsoPlaybackDeviceCompatibility')

const StringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema = z
  .string()
  .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  .openapi('StringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12')

const ListOfStringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema = z
  .array(StringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema)
  .openapi('ListOfStringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12')

const SpekeKeyProviderSchema = z
  .object({
    CertificateArn: StringPatternArnAwsUsGovAcmSchema.exactOptional().openapi({
      xml: { name: 'certificateArn' },
      description:
        "If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.",
    }),
    ResourceId: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceId' },
      description:
        'Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.',
    }),
    SystemIds:
      ListOfStringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12Schema.exactOptional().openapi({
        xml: { name: 'systemIds' },
        description:
          'Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id. See\n https://dashif.org/identifiers/content_protection/ for more details.',
      }),
    Url: StringPatternHttpsSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description:
        'Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.',
    }),
  })
  .openapi({
    description:
      'If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.',
    required: [],
  })
  .openapi('SpekeKeyProvider')

const DashIsoEncryptionSettingsSchema = z
  .object({
    PlaybackDeviceCompatibility: DashIsoPlaybackDeviceCompatibilitySchema.exactOptional().openapi({
      xml: { name: 'playbackDeviceCompatibility' },
      description:
        'This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.',
    }),
    SpekeKeyProvider: SpekeKeyProviderSchema.exactOptional().openapi({
      xml: { name: 'spekeKeyProvider' },
      description:
        'If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.',
    }),
  })
  .openapi({ description: 'Specifies DRM settings for DASH outputs.', required: [] })
  .openapi('DashIsoEncryptionSettings')

const DashIsoHbbtvComplianceSchema = z
  .enum(['HBBTV_1_5', 'NONE'])
  .openapi({ description: 'Supports HbbTV specification as indicated' })
  .openapi('DashIsoHbbtvCompliance')

const DashIsoImageBasedTrickPlaySchema = z
  .enum(['NONE', 'THUMBNAIL', 'THUMBNAIL_AND_FULLFRAME', 'ADVANCED'])
  .openapi({
    description:
      'Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md',
  })
  .openapi('DashIsoImageBasedTrickPlay')

const DashIsoIntervalCadenceSchema = z
  .enum(['FOLLOW_IFRAME', 'FOLLOW_CUSTOM'])
  .openapi({
    description:
      'The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.',
  })
  .openapi('DashIsoIntervalCadence')

const IntegerMin1Max4096Schema = z.int().min(1).max(4096).openapi('IntegerMin1Max4096')

const DashIsoImageBasedTrickPlaySettingsSchema = z
  .object({
    IntervalCadence: DashIsoIntervalCadenceSchema.exactOptional().openapi({
      xml: { name: 'intervalCadence' },
      description:
        'The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.',
    }),
    ThumbnailHeight: IntegerMin1Max4096Schema.exactOptional().openapi({
      xml: { name: 'thumbnailHeight' },
      description:
        'Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.',
    }),
    ThumbnailInterval: DoubleMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'thumbnailInterval' },
      description:
        "Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.",
    }),
    ThumbnailWidth: IntegerMin8Max4096Schema.exactOptional().openapi({
      xml: { name: 'thumbnailWidth' },
      description:
        'Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.',
    }),
    TileHeight: IntegerMin1Max2048Schema.exactOptional().openapi({
      xml: { name: 'tileHeight' },
      description:
        'Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.',
    }),
    TileWidth: IntegerMin1Max512Schema.exactOptional().openapi({
      xml: { name: 'tileWidth' },
      description:
        'Number of thumbnails in each row of a tile image. Set a value between 1 and 512.',
    }),
  })
  .openapi({
    description: 'Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED',
    required: [],
  })
  .openapi('DashIsoImageBasedTrickPlaySettings')

const DashIsoMpdManifestBandwidthTypeSchema = z
  .enum(['AVERAGE', 'MAX'])
  .openapi({
    description:
      'Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.',
  })
  .openapi('DashIsoMpdManifestBandwidthType')

const DashIsoMpdProfileSchema = z
  .enum(['MAIN_PROFILE', 'ON_DEMAND_PROFILE'])
  .openapi({
    description:
      'Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).',
  })
  .openapi('DashIsoMpdProfile')

const DashIsoPtsOffsetHandlingForBFramesSchema = z
  .enum(['ZERO_BASED', 'MATCH_INITIAL_PTS'])
  .openapi({
    description:
      "Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS (MATCH_INITIAL_PTS) when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based (ZERO_BASED) to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.",
  })
  .openapi('DashIsoPtsOffsetHandlingForBFrames')

const DashIsoSegmentControlSchema = z
  .enum(['SINGLE_FILE', 'SEGMENTED_FILES'])
  .openapi({
    description:
      'When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.',
  })
  .openapi('DashIsoSegmentControl')

const DashIsoSegmentLengthControlSchema = z
  .enum(['EXACT', 'GOP_MULTIPLE'])
  .openapi({
    description:
      'Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
  })
  .openapi('DashIsoSegmentLengthControl')

const DashIsoVideoCompositionOffsetsSchema = z
  .enum(['SIGNED', 'UNSIGNED'])
  .openapi({
    description:
      'Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.',
  })
  .openapi('DashIsoVideoCompositionOffsets')

const DashIsoWriteSegmentTimelineInRepresentationSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      "When you enable Precise segment duration in manifests (writeSegmentTimelineInRepresentation), your DASH manifest shows precise segment durations. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When this feature isn't enabled, the segment durations in your DASH manifest are approximate. The segment duration information appears in the duration attribute of the SegmentTemplate element.",
  })
  .openapi('DashIsoWriteSegmentTimelineInRepresentation')

const DashIsoGroupSettingsSchema = z
  .object({
    AdditionalManifests: ListOfDashAdditionalManifestSchema.exactOptional().openapi({
      xml: { name: 'additionalManifests' },
      description:
        'By default, the service creates one .mpd DASH manifest for each DASH ISO output group in your job. This default manifest references every output in the output group. To create additional DASH manifests that reference a subset of the outputs in the output group, specify a list of them here.',
    }),
    AudioChannelConfigSchemeIdUri:
      DashIsoGroupAudioChannelConfigSchemeIdUriSchema.exactOptional().openapi({
        xml: { name: 'audioChannelConfigSchemeIdUri' },
        description:
          'Use this setting only when your audio codec is a Dolby one (AC3, EAC3, or Atmos) and your downstream workflow requires that your DASH manifest use the Dolby channel configuration tag, rather than the MPEG one. For example, you might need to use this to make dynamic ad insertion work. Specify which audio channel configuration scheme ID URI MediaConvert writes in your DASH manifest. Keep the default value, MPEG channel configuration (MPEG_CHANNEL_CONFIGURATION), to have MediaConvert write this: urn:mpeg:mpegB:cicp:ChannelConfiguration. Choose Dolby channel configuration (DOLBY_CHANNEL_CONFIGURATION) to have MediaConvert write this instead: tag:dolby.com,2014:dash:audio_channel_configuration:2011.',
      }),
    BaseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrl' },
      description:
        'A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.',
    }),
    DashManifestStyle: DashManifestStyleSchema.exactOptional().openapi({
      xml: { name: 'dashManifestStyle' },
      description:
        'Specify how MediaConvert writes SegmentTimeline in your output DASH manifest. To write a SegmentTimeline in each video Representation: Keep the default value, Basic. To write a common SegmentTimeline in the video AdaptationSet: Choose Compact. Note that MediaConvert will still write a SegmentTimeline in any Representation that does not share a common timeline. To write a video AdaptationSet for each different output framerate, and a common SegmentTimeline in each AdaptationSet: Choose Distinct.',
    }),
    Destination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'destination' },
      description:
        'Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.',
    }),
    DestinationSettings: DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings associated with the destination. Will vary based on the type of destination',
    }),
    Encryption: DashIsoEncryptionSettingsSchema.exactOptional().openapi({
      xml: { name: 'encryption' },
      description: 'DRM settings.',
    }),
    FragmentLength: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'fragmentLength' },
      description:
        'Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.',
    }),
    HbbtvCompliance: DashIsoHbbtvComplianceSchema.exactOptional().openapi({
      xml: { name: 'hbbtvCompliance' },
      description: 'Supports HbbTV specification as indicated',
    }),
    ImageBasedTrickPlay: DashIsoImageBasedTrickPlaySchema.exactOptional().openapi({
      xml: { name: 'imageBasedTrickPlay' },
      description:
        'Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. MediaConvert adds an entry in the .mpd manifest for each set of images that you generate. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md',
    }),
    ImageBasedTrickPlaySettings: DashIsoImageBasedTrickPlaySettingsSchema.exactOptional().openapi({
      xml: { name: 'imageBasedTrickPlaySettings' },
      description: 'Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED',
    }),
    MinBufferTime: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minBufferTime' },
      description:
        'Minimum time of initially buffered media that is needed to ensure smooth playout.',
    }),
    MinFinalSegmentLength: DoubleMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minFinalSegmentLength' },
      description:
        'Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.',
    }),
    MpdManifestBandwidthType: DashIsoMpdManifestBandwidthTypeSchema.exactOptional().openapi({
      xml: { name: 'mpdManifestBandwidthType' },
      description:
        'Specify how the value for bandwidth is determined for each video Representation in your output MPD manifest. We recommend that you choose a MPD manifest bandwidth type that is compatible with your downstream player configuration. Max: Use the same value that you specify for Max bitrate in the video output, in bits per second. Average: Use the calculated average bitrate of the encoded video output, in bits per second.',
    }),
    MpdProfile: DashIsoMpdProfileSchema.exactOptional().openapi({
      xml: { name: 'mpdProfile' },
      description:
        'Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).',
    }),
    PtsOffsetHandlingForBFrames: DashIsoPtsOffsetHandlingForBFramesSchema.exactOptional().openapi({
      xml: { name: 'ptsOffsetHandlingForBFrames' },
      description:
        "Use this setting only when your output video stream has B-frames, which causes the initial presentation time stamp (PTS) to be offset from the initial decode time stamp (DTS). Specify how MediaConvert handles PTS when writing time stamps in output DASH manifests. Choose Match initial PTS (MATCH_INITIAL_PTS) when you want MediaConvert to use the initial PTS as the first time stamp in the manifest. Choose Zero-based (ZERO_BASED) to have MediaConvert ignore the initial PTS in the video stream and instead write the initial time stamp as zero in the manifest. For outputs that don't have B-frames, the time stamps in your DASH manifests start at zero regardless of your choice here.",
    }),
    SegmentControl: DashIsoSegmentControlSchema.exactOptional().openapi({
      xml: { name: 'segmentControl' },
      description:
        'When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.',
    }),
    SegmentLength: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'segmentLength' },
      description:
        "Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 30. Related settings: Use Segment length control (SegmentLengthControl) to specify whether the encoder enforces this value strictly. Use Segment control (DashIsoSegmentControl) to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.",
    }),
    SegmentLengthControl: DashIsoSegmentLengthControlSchema.exactOptional().openapi({
      xml: { name: 'segmentLengthControl' },
      description:
        'Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
    }),
    VideoCompositionOffsets: DashIsoVideoCompositionOffsetsSchema.exactOptional().openapi({
      xml: { name: 'videoCompositionOffsets' },
      description:
        'Specify the video sample composition time offset mode in the output fMP4 TRUN box. For wider player compatibility, set Video composition offsets to Unsigned or leave blank. The earliest presentation time may be greater than zero, and sample composition time offsets will increment using unsigned integers. For strict fMP4 video and audio timing, set Video composition offsets to Signed. The earliest presentation time will be equal to zero, and sample composition time offsets will increment using signed integers.',
    }),
    WriteSegmentTimelineInRepresentation:
      DashIsoWriteSegmentTimelineInRepresentationSchema.exactOptional().openapi({
        xml: { name: 'writeSegmentTimelineInRepresentation' },
        description:
          "If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.",
      }),
  })
  .openapi({
    description:
      'Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to DASH_ISO_GROUP_SETTINGS.',
    required: [],
  })
  .openapi('DashIsoGroupSettings')

const FileGroupSettingsSchema = z
  .object({
    Destination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'destination' },
      description:
        'Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.',
    }),
    DestinationSettings: DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings associated with the destination. Will vary based on the type of destination',
    }),
  })
  .openapi({
    description:
      'Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to FILE_GROUP_SETTINGS.',
    required: [],
  })
  .openapi('FileGroupSettings')

const HlsAdMarkersSchema = z
  .enum(['ELEMENTAL', 'ELEMENTAL_SCTE35'])
  .openapi({ description: 'Ad marker for Apple HLS manifest.' })
  .openapi('HlsAdMarkers')

const ListOfHlsAdMarkersSchema = z.array(HlsAdMarkersSchema).openapi('ListOfHlsAdMarkers')

const HlsAdditionalManifestSchema = z
  .object({
    ManifestNameModifier: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'manifestNameModifier' },
      description:
        'Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your HLS group is film-name.m3u8. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.m3u8. For HLS output groups, specify a manifestNameModifier that is different from the nameModifier of the output. The service uses the output name modifier to create unique names for the individual variant manifests.',
    }),
    SelectedOutputs: ListOfStringMin1Schema.exactOptional().openapi({
      xml: { name: 'selectedOutputs' },
      description:
        'Specify the outputs that you want this additional top-level manifest to reference.',
    }),
  })
  .openapi({
    description:
      'Specify the details for each additional HLS manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.',
    required: [],
  })
  .openapi('HlsAdditionalManifest')

const ListOfHlsAdditionalManifestSchema = z
  .array(HlsAdditionalManifestSchema)
  .openapi('ListOfHlsAdditionalManifest')

const HlsAudioOnlyHeaderSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include (INCLUDE), to output audio-only headers. Choose Exclude (EXCLUDE) to remove the audio-only headers from your audio segments.',
  })
  .openapi('HlsAudioOnlyHeader')

const HlsCaptionLanguageMappingSchema = z
  .object({
    CaptionChannel: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'captionChannel' },
      description: 'Caption channel.',
    }),
    CustomLanguageCode: StringMin3Max3PatternAZaZ3Schema.exactOptional().openapi({
      xml: { name: 'customLanguageCode' },
      description:
        'Specify the language for this captions channel, using the ISO 639-2 or ISO 639-3 three-letter language code',
    }),
    LanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        'Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.',
    }),
    LanguageDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'languageDescription' },
      description: 'Caption language description.',
    }),
  })
  .openapi({ description: 'Caption Language Mapping', required: [] })
  .openapi('HlsCaptionLanguageMapping')

const ListOfHlsCaptionLanguageMappingSchema = z
  .array(HlsCaptionLanguageMappingSchema)
  .openapi('ListOfHlsCaptionLanguageMapping')

const HlsCaptionLanguageSettingSchema = z
  .enum(['INSERT', 'OMIT', 'NONE'])
  .openapi({
    description:
      'Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.',
  })
  .openapi('HlsCaptionLanguageSetting')

const HlsCaptionSegmentLengthControlSchema = z
  .enum(['LARGE_SEGMENTS', 'MATCH_VIDEO'])
  .openapi({
    description:
      'Set Caption segment length control (CaptionSegmentLengthControl) to Match video (MATCH_VIDEO) to create caption segments that align with the video segments from the first video output in this output group. For example, if the video segments are 2 seconds long, your WebVTT segments will also be 2 seconds long. Keep the default setting, Large segments (LARGE_SEGMENTS) to create caption segments that are 300 seconds long.',
  })
  .openapi('HlsCaptionSegmentLengthControl')

const HlsClientCacheSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.',
  })
  .openapi('HlsClientCache')

const HlsCodecSpecificationSchema = z
  .enum(['RFC_6381', 'RFC_4281'])
  .openapi({
    description:
      'Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.',
  })
  .openapi('HlsCodecSpecification')

const HlsDirectoryStructureSchema = z
  .enum(['SINGLE_DIRECTORY', 'SUBDIRECTORY_PER_STREAM'])
  .openapi({ description: 'Indicates whether segments should be placed in subdirectories.' })
  .openapi('HlsDirectoryStructure')

const HlsEncryptionTypeSchema = z
  .enum(['AES128', 'SAMPLE_AES'])
  .openapi({
    description:
      "Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.",
  })
  .openapi('HlsEncryptionType')

const HlsInitializationVectorInManifestSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.',
  })
  .openapi('HlsInitializationVectorInManifest')

const HlsOfflineEncryptedSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.',
  })
  .openapi('HlsOfflineEncrypted')

const HlsKeyProviderTypeSchema = z
  .enum(['SPEKE', 'STATIC_KEY'])
  .openapi({
    description:
      'Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.',
  })
  .openapi('HlsKeyProviderType')

const HlsEncryptionSettingsSchema = z
  .object({
    ConstantInitializationVector: StringMin32Max32Pattern09aFAF32Schema.exactOptional().openapi({
      xml: { name: 'constantInitializationVector' },
      description:
        'This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.',
    }),
    EncryptionMethod: HlsEncryptionTypeSchema.exactOptional().openapi({
      xml: { name: 'encryptionMethod' },
      description:
        "Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.",
    }),
    InitializationVectorInManifest: HlsInitializationVectorInManifestSchema.exactOptional().openapi(
      {
        xml: { name: 'initializationVectorInManifest' },
        description:
          'The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.',
      },
    ),
    OfflineEncrypted: HlsOfflineEncryptedSchema.exactOptional().openapi({
      xml: { name: 'offlineEncrypted' },
      description:
        'Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.',
    }),
    SpekeKeyProvider: SpekeKeyProviderSchema.exactOptional().openapi({
      xml: { name: 'spekeKeyProvider' },
      description:
        'If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.',
    }),
    StaticKeyProvider: StaticKeyProviderSchema.exactOptional().openapi({
      xml: { name: 'staticKeyProvider' },
      description: 'Use these settings to set up encryption with a static key provider.',
    }),
    Type: HlsKeyProviderTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        'Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.',
    }),
  })
  .openapi({ description: 'Settings for HLS encryption', required: [] })
  .openapi('HlsEncryptionSettings')

const HlsImageBasedTrickPlaySchema = z
  .enum(['NONE', 'THUMBNAIL', 'THUMBNAIL_AND_FULLFRAME', 'ADVANCED'])
  .openapi({
    description:
      'Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md',
  })
  .openapi('HlsImageBasedTrickPlay')

const HlsIntervalCadenceSchema = z
  .enum(['FOLLOW_IFRAME', 'FOLLOW_CUSTOM'])
  .openapi({
    description:
      'The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.',
  })
  .openapi('HlsIntervalCadence')

const HlsImageBasedTrickPlaySettingsSchema = z
  .object({
    IntervalCadence: HlsIntervalCadenceSchema.exactOptional().openapi({
      xml: { name: 'intervalCadence' },
      description:
        'The cadence MediaConvert follows for generating thumbnails. If set to FOLLOW_IFRAME, MediaConvert generates thumbnails for each IDR frame in the output (matching the GOP cadence). If set to FOLLOW_CUSTOM, MediaConvert generates thumbnails according to the interval you specify in thumbnailInterval.',
    }),
    ThumbnailHeight: IntegerMin2Max4096Schema.exactOptional().openapi({
      xml: { name: 'thumbnailHeight' },
      description:
        'Height of each thumbnail within each tile image, in pixels. Leave blank to maintain aspect ratio with thumbnail width. If following the aspect ratio would lead to a total tile height greater than 4096, then the job will be rejected. Must be divisible by 2.',
    }),
    ThumbnailInterval: DoubleMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'thumbnailInterval' },
      description:
        "Enter the interval, in seconds, that MediaConvert uses to generate thumbnails. If the interval you enter doesn't align with the output frame rate, MediaConvert automatically rounds the interval to align with the output frame rate. For example, if the output frame rate is 29.97 frames per second and you enter 5, MediaConvert uses a 150 frame interval to generate thumbnails.",
    }),
    ThumbnailWidth: IntegerMin8Max4096Schema.exactOptional().openapi({
      xml: { name: 'thumbnailWidth' },
      description:
        'Width of each thumbnail within each tile image, in pixels. Default is 312. Must be divisible by 8.',
    }),
    TileHeight: IntegerMin1Max2048Schema.exactOptional().openapi({
      xml: { name: 'tileHeight' },
      description:
        'Number of thumbnails in each column of a tile image. Set a value between 2 and 2048. Must be divisible by 2.',
    }),
    TileWidth: IntegerMin1Max512Schema.exactOptional().openapi({
      xml: { name: 'tileWidth' },
      description:
        'Number of thumbnails in each row of a tile image. Set a value between 1 and 512.',
    }),
  })
  .openapi({
    description: 'Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED',
    required: [],
  })
  .openapi('HlsImageBasedTrickPlaySettings')

const HlsManifestCompressionSchema = z
  .enum(['GZIP', 'NONE'])
  .openapi({ description: 'When set to GZIP, compresses HLS playlist.' })
  .openapi('HlsManifestCompression')

const HlsManifestDurationFormatSchema = z
  .enum(['FLOATING_POINT', 'INTEGER'])
  .openapi({
    description:
      'Indicates whether the output manifest should use floating point values for segment duration.',
  })
  .openapi('HlsManifestDurationFormat')

const HlsOutputSelectionSchema = z
  .enum(['MANIFESTS_AND_SEGMENTS', 'SEGMENTS_ONLY'])
  .openapi({
    description:
      'Indicates whether the .m3u8 manifest file should be generated for this HLS output group.',
  })
  .openapi('HlsOutputSelection')

const HlsProgramDateTimeSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.',
  })
  .openapi('HlsProgramDateTime')

const IntegerMin0Max3600Schema = z.int().min(0).max(3600).openapi('IntegerMin0Max3600')

const HlsSegmentControlSchema = z
  .enum(['SINGLE_FILE', 'SEGMENTED_FILES'])
  .openapi({
    description:
      'When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.',
  })
  .openapi('HlsSegmentControl')

const HlsSegmentLengthControlSchema = z
  .enum(['EXACT', 'GOP_MULTIPLE'])
  .openapi({
    description:
      'Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
  })
  .openapi('HlsSegmentLengthControl')

const HlsStreamInfResolutionSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.',
  })
  .openapi('HlsStreamInfResolution')

const HlsTargetDurationCompatibilityModeSchema = z
  .enum(['LEGACY', 'SPEC_COMPLIANT'])
  .openapi({
    description:
      'When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.',
  })
  .openapi('HlsTargetDurationCompatibilityMode')

const HlsTimedMetadataId3FrameSchema = z
  .enum(['NONE', 'PRIV', 'TDRL'])
  .openapi({
    description:
      'Specify the type of the ID3 frame (timedMetadataId3Frame) to use for ID3 timestamps (timedMetadataId3Period) in your output. To include ID3 timestamps: Specify PRIV (PRIV) or TDRL (TDRL) and set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). To exclude ID3 timestamps: Set ID3 timestamp frame type to None (NONE).',
  })
  .openapi('HlsTimedMetadataId3Frame')

const HlsGroupSettingsSchema = z
  .object({
    AdMarkers: ListOfHlsAdMarkersSchema.exactOptional().openapi({
      xml: { name: 'adMarkers' },
      description:
        'Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.',
    }),
    AdditionalManifests: ListOfHlsAdditionalManifestSchema.exactOptional().openapi({
      xml: { name: 'additionalManifests' },
      description:
        'By default, the service creates one top-level .m3u8 HLS manifest for each HLS output group in your job. This default manifest references every output in the output group. To create additional top-level manifests that reference a subset of the outputs in the output group, specify a list of them here.',
    }),
    AudioOnlyHeader: HlsAudioOnlyHeaderSchema.exactOptional().openapi({
      xml: { name: 'audioOnlyHeader' },
      description:
        'Ignore this setting unless you are using FairPlay DRM with Verimatrix and you encounter playback issues. Keep the default value, Include (INCLUDE), to output audio-only headers. Choose Exclude (EXCLUDE) to remove the audio-only headers from your audio segments.',
    }),
    BaseUrl: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrl' },
      description:
        'A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.',
    }),
    CaptionLanguageMappings: ListOfHlsCaptionLanguageMappingSchema.exactOptional().openapi({
      xml: { name: 'captionLanguageMappings' },
      description: 'Language to be used on Caption outputs',
    }),
    CaptionLanguageSetting: HlsCaptionLanguageSettingSchema.exactOptional().openapi({
      xml: { name: 'captionLanguageSetting' },
      description:
        'Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.',
    }),
    CaptionSegmentLengthControl: HlsCaptionSegmentLengthControlSchema.exactOptional().openapi({
      xml: { name: 'captionSegmentLengthControl' },
      description:
        'Set Caption segment length control (CaptionSegmentLengthControl) to Match video (MATCH_VIDEO) to create caption segments that align with the video segments from the first video output in this output group. For example, if the video segments are 2 seconds long, your WebVTT segments will also be 2 seconds long. Keep the default setting, Large segments (LARGE_SEGMENTS) to create caption segments that are 300 seconds long.',
    }),
    ClientCache: HlsClientCacheSchema.exactOptional().openapi({
      xml: { name: 'clientCache' },
      description:
        'Disable this setting only when your workflow requires the #EXT-X-ALLOW-CACHE:no tag. Otherwise, keep the default value Enabled (ENABLED) and control caching in your video distribution set up. For example, use the Cache-Control http header.',
    }),
    CodecSpecification: HlsCodecSpecificationSchema.exactOptional().openapi({
      xml: { name: 'codecSpecification' },
      description:
        'Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.',
    }),
    Destination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'destination' },
      description:
        'Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.',
    }),
    DestinationSettings: DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings associated with the destination. Will vary based on the type of destination',
    }),
    DirectoryStructure: HlsDirectoryStructureSchema.exactOptional().openapi({
      xml: { name: 'directoryStructure' },
      description: 'Indicates whether segments should be placed in subdirectories.',
    }),
    Encryption: HlsEncryptionSettingsSchema.exactOptional().openapi({
      xml: { name: 'encryption' },
      description: 'DRM settings.',
    }),
    ImageBasedTrickPlay: HlsImageBasedTrickPlaySchema.exactOptional().openapi({
      xml: { name: 'imageBasedTrickPlay' },
      description:
        'Specify whether MediaConvert generates images for trick play. Keep the default value, None (NONE), to not generate any images. Choose Thumbnail (THUMBNAIL) to generate tiled thumbnails. Choose Thumbnail and full frame (THUMBNAIL_AND_FULLFRAME) to generate tiled thumbnails and full-resolution images of single frames. MediaConvert creates a child manifest for each set of images that you generate and adds corresponding entries to the parent manifest. A common application for these images is Roku trick mode. The thumbnails and full-frame images that MediaConvert creates with this feature are compatible with this Roku specification: https://developer.roku.com/docs/developer-program/media-playback/trick-mode/hls-and-dash.md',
    }),
    ImageBasedTrickPlaySettings: HlsImageBasedTrickPlaySettingsSchema.exactOptional().openapi({
      xml: { name: 'imageBasedTrickPlaySettings' },
      description: 'Tile and thumbnail settings applicable when imageBasedTrickPlay is ADVANCED',
    }),
    ManifestCompression: HlsManifestCompressionSchema.exactOptional().openapi({
      xml: { name: 'manifestCompression' },
      description: 'When set to GZIP, compresses HLS playlist.',
    }),
    ManifestDurationFormat: HlsManifestDurationFormatSchema.exactOptional().openapi({
      xml: { name: 'manifestDurationFormat' },
      description:
        'Indicates whether the output manifest should use floating point values for segment duration.',
    }),
    MinFinalSegmentLength: DoubleMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minFinalSegmentLength' },
      description:
        'Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.',
    }),
    MinSegmentLength: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'minSegmentLength' },
      description:
        'When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.',
    }),
    OutputSelection: HlsOutputSelectionSchema.exactOptional().openapi({
      xml: { name: 'outputSelection' },
      description:
        'Indicates whether the .m3u8 manifest file should be generated for this HLS output group.',
    }),
    ProgramDateTime: HlsProgramDateTimeSchema.exactOptional().openapi({
      xml: { name: 'programDateTime' },
      description:
        'Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.',
    }),
    ProgramDateTimePeriod: IntegerMin0Max3600Schema.exactOptional().openapi({
      xml: { name: 'programDateTimePeriod' },
      description: 'Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.',
    }),
    SegmentControl: HlsSegmentControlSchema.exactOptional().openapi({
      xml: { name: 'segmentControl' },
      description:
        'When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.',
    }),
    SegmentLength: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'segmentLength' },
      description:
        "Specify the length, in whole seconds, of each segment. When you don't specify a value, MediaConvert defaults to 10. Related settings: Use Segment length control (SegmentLengthControl) to specify whether the encoder enforces this value strictly. Use Segment control (HlsSegmentControl) to specify whether MediaConvert creates separate segment files or one content file that has metadata to mark the segment boundaries.",
    }),
    SegmentLengthControl: HlsSegmentLengthControlSchema.exactOptional().openapi({
      xml: { name: 'segmentLengthControl' },
      description:
        'Specify how you want MediaConvert to determine the segment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Segment length (SegmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
    }),
    SegmentsPerSubdirectory: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'segmentsPerSubdirectory' },
      description:
        'Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.',
    }),
    StreamInfResolution: HlsStreamInfResolutionSchema.exactOptional().openapi({
      xml: { name: 'streamInfResolution' },
      description:
        'Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.',
    }),
    TargetDurationCompatibilityMode:
      HlsTargetDurationCompatibilityModeSchema.exactOptional().openapi({
        xml: { name: 'targetDurationCompatibilityMode' },
        description:
          'When set to LEGACY, the segment target duration is always rounded up to the nearest integer value above its current value in seconds. When set to SPEC\\\\_COMPLIANT, the segment target duration is rounded up to the nearest integer value if fraction seconds are greater than or equal to 0.5 (>= 0.5) and rounded down if less than 0.5 (< 0.5). You may need to use LEGACY if your client needs to ensure that the target duration is always longer than the actual duration of the segment. Some older players may experience interrupted playback when the actual duration of a track in a segment is longer than the target duration.',
      }),
    TimedMetadataId3Frame: HlsTimedMetadataId3FrameSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataId3Frame' },
      description:
        'Specify the type of the ID3 frame (timedMetadataId3Frame) to use for ID3 timestamps (timedMetadataId3Period) in your output. To include ID3 timestamps: Specify PRIV (PRIV) or TDRL (TDRL) and set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). To exclude ID3 timestamps: Set ID3 timestamp frame type to None (NONE).',
    }),
    TimedMetadataId3Period: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi(
      {
        xml: { name: 'timedMetadataId3Period' },
        description:
          'Specify the interval in seconds to write ID3 timestamps in your output. The first timestamp starts at the output timecode and date, and increases incrementally with each ID3 timestamp. To use the default interval of 10 seconds: Leave blank. To include this metadata in your output: Set ID3 timestamp frame type (timedMetadataId3Frame) to PRIV (PRIV) or TDRL (TDRL), and set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
      },
    ),
    TimestampDeltaMilliseconds:
      IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
        xml: { name: 'timestampDeltaMilliseconds' },
        description: 'Provides an extra millisecond delta offset to fine tune the timestamps.',
      }),
  })
  .openapi({
    description:
      'Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to HLS_GROUP_SETTINGS.',
    required: [],
  })
  .openapi('HlsGroupSettings')

const MsSmoothAdditionalManifestSchema = z
  .object({
    ManifestNameModifier: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'manifestNameModifier' },
      description:
        'Specify a name modifier that the service adds to the name of this manifest to make it different from the file names of the other main manifests in the output group. For example, say that the default main manifest for your Microsoft Smooth group is film-name.ismv. If you enter "-no-premium" for this setting, then the file name the service generates for this top-level manifest is film-name-no-premium.ismv.',
    }),
    SelectedOutputs: ListOfStringMin1Schema.exactOptional().openapi({
      xml: { name: 'selectedOutputs' },
      description:
        'Specify the outputs that you want this additional top-level manifest to reference.',
    }),
  })
  .openapi({
    description:
      'Specify the details for each additional Microsoft Smooth Streaming manifest that you want the service to generate for this output group. Each manifest can reference a different subset of outputs in the group.',
    required: [],
  })
  .openapi('MsSmoothAdditionalManifest')

const ListOfMsSmoothAdditionalManifestSchema = z
  .array(MsSmoothAdditionalManifestSchema)
  .openapi('ListOfMsSmoothAdditionalManifest')

const MsSmoothAudioDeduplicationSchema = z
  .enum(['COMBINE_DUPLICATE_STREAMS', 'NONE'])
  .openapi({
    description:
      'COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.',
  })
  .openapi('MsSmoothAudioDeduplication')

const MsSmoothEncryptionSettingsSchema = z
  .object({
    SpekeKeyProvider: SpekeKeyProviderSchema.exactOptional().openapi({
      xml: { name: 'spekeKeyProvider' },
      description:
        'If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.',
    }),
  })
  .openapi({
    description:
      'If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.',
    required: [],
  })
  .openapi('MsSmoothEncryptionSettings')

const MsSmoothFragmentLengthControlSchema = z
  .enum(['EXACT', 'GOP_MULTIPLE'])
  .openapi({
    description:
      'Specify how you want MediaConvert to determine the fragment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Fragment length (FragmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
  })
  .openapi('MsSmoothFragmentLengthControl')

const MsSmoothManifestEncodingSchema = z
  .enum(['UTF8', 'UTF16'])
  .openapi({
    description:
      'Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.',
  })
  .openapi('MsSmoothManifestEncoding')

const MsSmoothGroupSettingsSchema = z
  .object({
    AdditionalManifests: ListOfMsSmoothAdditionalManifestSchema.exactOptional().openapi({
      xml: { name: 'additionalManifests' },
      description:
        'By default, the service creates one .ism Microsoft Smooth Streaming manifest for each Microsoft Smooth Streaming output group in your job. This default manifest references every output in the output group. To create additional manifests that reference a subset of the outputs in the output group, specify a list of them here.',
    }),
    AudioDeduplication: MsSmoothAudioDeduplicationSchema.exactOptional().openapi({
      xml: { name: 'audioDeduplication' },
      description:
        'COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.',
    }),
    Destination: StringPatternS3Schema.exactOptional().openapi({
      xml: { name: 'destination' },
      description:
        'Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.',
    }),
    DestinationSettings: DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings associated with the destination. Will vary based on the type of destination',
    }),
    Encryption: MsSmoothEncryptionSettingsSchema.exactOptional().openapi({
      xml: { name: 'encryption' },
      description:
        'If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.',
    }),
    FragmentLength: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'fragmentLength' },
      description:
        'Specify how you want MediaConvert to determine the fragment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Fragment length (FragmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
    }),
    FragmentLengthControl: MsSmoothFragmentLengthControlSchema.exactOptional().openapi({
      xml: { name: 'fragmentLengthControl' },
      description:
        'Specify how you want MediaConvert to determine the fragment length. Choose Exact (EXACT) to have the encoder use the exact length that you specify with the setting Fragment length (FragmentLength). This might result in extra I-frames. Choose Multiple of GOP (GOP_MULTIPLE) to have the encoder round up the segment lengths to match the next GOP boundary.',
    }),
    ManifestEncoding: MsSmoothManifestEncodingSchema.exactOptional().openapi({
      xml: { name: 'manifestEncoding' },
      description:
        'Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.',
    }),
  })
  .openapi({
    description:
      'Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to MS_SMOOTH_GROUP_SETTINGS.',
    required: [],
  })
  .openapi('MsSmoothGroupSettings')

const OutputGroupTypeSchema = z
  .enum([
    'HLS_GROUP_SETTINGS',
    'DASH_ISO_GROUP_SETTINGS',
    'FILE_GROUP_SETTINGS',
    'MS_SMOOTH_GROUP_SETTINGS',
    'CMAF_GROUP_SETTINGS',
  ])
  .openapi({
    description:
      'Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)',
  })
  .openapi('OutputGroupType')

const OutputGroupSettingsSchema = z
  .object({
    CmafGroupSettings: CmafGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'cmafGroupSettings' },
      description:
        'Settings related to your CMAF output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to CMAF_GROUP_SETTINGS.',
    }),
    DashIsoGroupSettings: DashIsoGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'dashIsoGroupSettings' },
      description:
        'Settings related to your DASH output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to DASH_ISO_GROUP_SETTINGS.',
    }),
    FileGroupSettings: FileGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'fileGroupSettings' },
      description:
        'Settings related to your File output group. MediaConvert uses this group of settings to generate a single standalone file, rather than a streaming package. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to FILE_GROUP_SETTINGS.',
    }),
    HlsGroupSettings: HlsGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsGroupSettings' },
      description:
        'Settings related to your HLS output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to HLS_GROUP_SETTINGS.',
    }),
    MsSmoothGroupSettings: MsSmoothGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'msSmoothGroupSettings' },
      description:
        'Settings related to your Microsoft Smooth Streaming output package. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/outputs-file-ABR.html. When you work directly in your JSON job specification, include this object and any required children when you set Type, under OutputGroupSettings, to MS_SMOOTH_GROUP_SETTINGS.',
    }),
    Type: OutputGroupTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        'Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)',
    }),
  })
  .openapi({ description: 'Output Group settings, including type', required: [] })
  .openapi('OutputGroupSettings')

const AudioChannelTagSchema = z
  .enum([
    'L',
    'R',
    'C',
    'LFE',
    'LS',
    'RS',
    'LC',
    'RC',
    'CS',
    'LSD',
    'RSD',
    'TCS',
    'VHL',
    'VHC',
    'VHR',
  ])
  .openapi({
    description:
      'You can add a tag for this mono-channel audio track to mimic its placement in a multi-channel layout. For example, if this track is the left surround channel, choose Left surround (LS).',
  })
  .openapi('AudioChannelTag')

const AudioChannelTaggingSettingsSchema = z
  .object({
    ChannelTag: AudioChannelTagSchema.exactOptional().openapi({
      xml: { name: 'channelTag' },
      description:
        'You can add a tag for this mono-channel audio track to mimic its placement in a multi-channel layout. For example, if this track is the left surround channel, choose Left surround (LS).',
    }),
  })
  .openapi({
    description:
      "When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.",
    required: [],
  })
  .openapi('AudioChannelTaggingSettings')

const AudioNormalizationAlgorithmSchema = z
  .enum(['ITU_BS_1770_1', 'ITU_BS_1770_2', 'ITU_BS_1770_3', 'ITU_BS_1770_4'])
  .openapi({
    description:
      'Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.',
  })
  .openapi('AudioNormalizationAlgorithm')

const AudioNormalizationAlgorithmControlSchema = z
  .enum(['CORRECT_AUDIO', 'MEASURE_ONLY'])
  .openapi({
    description:
      'When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.',
  })
  .openapi('AudioNormalizationAlgorithmControl')

const IntegerMinNegative70Max0Schema = z.int().min(-70).max(0).openapi('IntegerMinNegative70Max0')

const AudioNormalizationLoudnessLoggingSchema = z
  .enum(['LOG', 'DONT_LOG'])
  .openapi({ description: "If set to LOG, log each output's audio track loudness to a CSV file." })
  .openapi('AudioNormalizationLoudnessLogging')

const AudioNormalizationPeakCalculationSchema = z
  .enum(['TRUE_PEAK', 'NONE'])
  .openapi({
    description:
      "If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.",
  })
  .openapi('AudioNormalizationPeakCalculation')

const DoubleMinNegative59Max0Schema = z.float64().openapi('DoubleMinNegative59Max0')

const DoubleMinNegative20Max0Schema = z.float64().openapi('DoubleMinNegative20Max0')

const AudioNormalizationSettingsSchema = z
  .object({
    Algorithm: AudioNormalizationAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'algorithm' },
      description:
        'Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.',
    }),
    AlgorithmControl: AudioNormalizationAlgorithmControlSchema.exactOptional().openapi({
      xml: { name: 'algorithmControl' },
      description:
        'When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.',
    }),
    CorrectionGateLevel: IntegerMinNegative70Max0Schema.exactOptional().openapi({
      xml: { name: 'correctionGateLevel' },
      description:
        'Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected.',
    }),
    LoudnessLogging: AudioNormalizationLoudnessLoggingSchema.exactOptional().openapi({
      xml: { name: 'loudnessLogging' },
      description: "If set to LOG, log each output's audio track loudness to a CSV file.",
    }),
    PeakCalculation: AudioNormalizationPeakCalculationSchema.exactOptional().openapi({
      xml: { name: 'peakCalculation' },
      description:
        "If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.",
    }),
    TargetLkfs: DoubleMinNegative59Max0Schema.exactOptional().openapi({
      xml: { name: 'targetLkfs' },
      description:
        "When you use Audio normalization (AudioNormalizationSettings), optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm (algorithm). If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.",
    }),
    TruePeakLimiterThreshold: DoubleMinNegative20Max0Schema.exactOptional().openapi({
      xml: { name: 'truePeakLimiterThreshold' },
      description:
        'Specify the True-peak limiter threshold in decibels relative to full scale (dBFS). The peak inter-audio sample loudness in your output will be limited to the value that you specify, without affecting the overall target LKFS. Enter a value from 0 to -20. Leave blank to use the default value 0.',
    }),
  })
  .openapi({
    description:
      'Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.',
    required: [],
  })
  .openapi('AudioNormalizationSettings')

const IntegerMin0Max255Schema = z.int().min(0).max(255).openapi('IntegerMin0Max255')

const AudioTypeControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({
    description:
      'When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.',
  })
  .openapi('AudioTypeControl')

const AacAudioDescriptionBroadcasterMixSchema = z
  .enum(['BROADCASTER_MIXED_AD', 'NORMAL'])
  .openapi({
    description:
      'Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.',
  })
  .openapi('AacAudioDescriptionBroadcasterMix')

const IntegerMin6000Max1024000Schema = z
  .int()
  .min(6000)
  .max(1024000)
  .openapi('IntegerMin6000Max1024000')

const AacCodecProfileSchema = z
  .enum(['LC', 'HEV1', 'HEV2'])
  .openapi({ description: 'AAC Profile.' })
  .openapi('AacCodecProfile')

const AacCodingModeSchema = z
  .enum([
    'AD_RECEIVER_MIX',
    'CODING_MODE_1_0',
    'CODING_MODE_1_1',
    'CODING_MODE_2_0',
    'CODING_MODE_5_1',
  ])
  .openapi({
    description:
      'The Coding mode that you specify determines the number of audio channels and the audio channel layout metadata in your AAC output. Valid coding modes depend on the Rate control mode and Profile that you select. The following list shows the number of audio channels and channel layout for each coding mode. * 1.0 Audio Description (Receiver Mix): One channel, C. Includes audio description data from your stereo input. For more information see ETSI TS 101 154 Annex E. * 1.0 Mono: One channel, C. * 2.0 Stereo: Two channels, L, R. * 5.1 Surround: Five channels, C, L, R, Ls, Rs, LFE.',
  })
  .openapi('AacCodingMode')

const AacRateControlModeSchema = z
  .enum(['CBR', 'VBR'])
  .openapi({ description: 'Rate Control Mode.' })
  .openapi('AacRateControlMode')

const AacRawFormatSchema = z
  .enum(['LATM_LOAS', 'NONE'])
  .openapi({
    description:
      'Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.',
  })
  .openapi('AacRawFormat')

const IntegerMin8000Max96000Schema = z.int().min(8000).max(96000).openapi('IntegerMin8000Max96000')

const AacSpecificationSchema = z
  .enum(['MPEG2', 'MPEG4'])
  .openapi({
    description:
      'Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.',
  })
  .openapi('AacSpecification')

const AacVbrQualitySchema = z
  .enum(['LOW', 'MEDIUM_LOW', 'MEDIUM_HIGH', 'HIGH'])
  .openapi({ description: 'VBR Quality Level - Only used if rate_control_mode is VBR.' })
  .openapi('AacVbrQuality')

const AacSettingsSchema = z
  .object({
    AudioDescriptionBroadcasterMix: AacAudioDescriptionBroadcasterMixSchema.exactOptional().openapi(
      {
        xml: { name: 'audioDescriptionBroadcasterMix' },
        description:
          'Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.',
      },
    ),
    Bitrate: IntegerMin6000Max1024000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile (codecProfile), Bitrate control mode (codingMode), and Sample rate (sampleRate). Default values depend on Bitrate control mode and Profile.',
    }),
    CodecProfile: AacCodecProfileSchema.exactOptional().openapi({
      xml: { name: 'codecProfile' },
      description: 'AAC Profile.',
    }),
    CodingMode: AacCodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description:
        'The Coding mode that you specify determines the number of audio channels and the audio channel layout metadata in your AAC output. Valid coding modes depend on the Rate control mode and Profile that you select. The following list shows the number of audio channels and channel layout for each coding mode. * 1.0 Audio Description (Receiver Mix): One channel, C. Includes audio description data from your stereo input. For more information see ETSI TS 101 154 Annex E. * 1.0 Mono: One channel, C. * 2.0 Stereo: Two channels, L, R. * 5.1 Surround: Five channels, C, L, R, Ls, Rs, LFE.',
    }),
    RateControlMode: AacRateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description: 'Rate Control Mode.',
    }),
    RawFormat: AacRawFormatSchema.exactOptional().openapi({
      xml: { name: 'rawFormat' },
      description:
        'Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.',
    }),
    SampleRate: IntegerMin8000Max96000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description:
        'Specify the Sample rate in Hz. Valid sample rates depend on the Profile and Coding mode that you select. The following list shows valid sample rates for each Profile and Coding mode. * LC Profile, Coding mode 1.0, 2.0, and Receiver Mix: 8000, 12000, 16000, 22050, 24000, 32000, 44100, 48000, 88200, 96000. * LC Profile, Coding mode 5.1: 32000, 44100, 48000, 96000. * HEV1 Profile, Coding mode 1.0 and Receiver Mix: 22050, 24000, 32000, 44100, 48000. * HEV1 Profile, Coding mode 2.0 and 5.1: 32000, 44100, 48000, 96000. * HEV2 Profile, Coding mode 2.0: 22050, 24000, 32000, 44100, 48000.',
    }),
    Specification: AacSpecificationSchema.exactOptional().openapi({
      xml: { name: 'specification' },
      description:
        'Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.',
    }),
    VbrQuality: AacVbrQualitySchema.exactOptional().openapi({
      xml: { name: 'vbrQuality' },
      description: 'VBR Quality Level - Only used if rate_control_mode is VBR.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.',
    required: [],
  })
  .openapi('AacSettings')

const IntegerMin64000Max640000Schema = z
  .int()
  .min(64000)
  .max(640000)
  .openapi('IntegerMin64000Max640000')

const Ac3BitstreamModeSchema = z
  .enum([
    'COMPLETE_MAIN',
    'COMMENTARY',
    'DIALOGUE',
    'EMERGENCY',
    'HEARING_IMPAIRED',
    'MUSIC_AND_EFFECTS',
    'VISUALLY_IMPAIRED',
    'VOICE_OVER',
  ])
  .openapi({
    description:
      'Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).',
  })
  .openapi('Ac3BitstreamMode')

const Ac3CodingModeSchema = z
  .enum(['CODING_MODE_1_0', 'CODING_MODE_1_1', 'CODING_MODE_2_0', 'CODING_MODE_3_2_LFE'])
  .openapi({ description: 'Dolby Digital coding mode. Determines number of channels.' })
  .openapi('Ac3CodingMode')

const IntegerMin1Max31Schema = z.int().min(1).max(31).openapi('IntegerMin1Max31')

const Ac3DynamicRangeCompressionLineSchema = z
  .enum(['FILM_STANDARD', 'FILM_LIGHT', 'MUSIC_STANDARD', 'MUSIC_LIGHT', 'SPEECH', 'NONE'])
  .openapi({
    description:
      'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
  })
  .openapi('Ac3DynamicRangeCompressionLine')

const Ac3DynamicRangeCompressionProfileSchema = z
  .enum(['FILM_STANDARD', 'NONE'])
  .openapi({
    description:
      "When you want to add Dolby dynamic range compression (DRC) signaling to your output stream, we recommend that you use the mode-specific settings instead of Dynamic range compression profile (DynamicRangeCompressionProfile). The mode-specific settings are Dynamic range compression profile, line mode (dynamicRangeCompressionLine) and Dynamic range compression profile, RF mode (dynamicRangeCompressionRf). Note that when you specify values for all three settings, MediaConvert ignores the value of this setting in favor of the mode-specific settings. If you do use this setting instead of the mode-specific settings, choose None (NONE) to leave out DRC signaling. Keep the default Film standard (FILM_STANDARD) to set the profile to Dolby's film standard profile for all operating modes.",
  })
  .openapi('Ac3DynamicRangeCompressionProfile')

const Ac3DynamicRangeCompressionRfSchema = z
  .enum(['FILM_STANDARD', 'FILM_LIGHT', 'MUSIC_STANDARD', 'MUSIC_LIGHT', 'SPEECH', 'NONE'])
  .openapi({
    description:
      'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
  })
  .openapi('Ac3DynamicRangeCompressionRf')

const Ac3LfeFilterSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.',
  })
  .openapi('Ac3LfeFilter')

const Ac3MetadataControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({
    description:
      'When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.',
  })
  .openapi('Ac3MetadataControl')

const IntegerMin48000Max48000Schema = z
  .int()
  .min(48000)
  .max(48000)
  .openapi('IntegerMin48000Max48000')

const Ac3SettingsSchema = z
  .object({
    Bitrate: IntegerMin64000Max640000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 64000. Maximum: 128000. Valid bitrates for coding mode 1/1: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 128000. Maximum: 384000. Valid bitrates for coding mode 3/2 with FLE: Default: 384000. Minimum: 384000. Maximum: 640000.',
    }),
    BitstreamMode: Ac3BitstreamModeSchema.exactOptional().openapi({
      xml: { name: 'bitstreamMode' },
      description:
        'Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).',
    }),
    CodingMode: Ac3CodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description: 'Dolby Digital coding mode. Determines number of channels.',
    }),
    Dialnorm: IntegerMin1Max31Schema.exactOptional().openapi({
      xml: { name: 'dialnorm' },
      description:
        'Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.',
    }),
    DynamicRangeCompressionLine: Ac3DynamicRangeCompressionLineSchema.exactOptional().openapi({
      xml: { name: 'dynamicRangeCompressionLine' },
      description:
        'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
    }),
    DynamicRangeCompressionProfile: Ac3DynamicRangeCompressionProfileSchema.exactOptional().openapi(
      {
        xml: { name: 'dynamicRangeCompressionProfile' },
        description:
          "When you want to add Dolby dynamic range compression (DRC) signaling to your output stream, we recommend that you use the mode-specific settings instead of Dynamic range compression profile (DynamicRangeCompressionProfile). The mode-specific settings are Dynamic range compression profile, line mode (dynamicRangeCompressionLine) and Dynamic range compression profile, RF mode (dynamicRangeCompressionRf). Note that when you specify values for all three settings, MediaConvert ignores the value of this setting in favor of the mode-specific settings. If you do use this setting instead of the mode-specific settings, choose None (NONE) to leave out DRC signaling. Keep the default Film standard (FILM_STANDARD) to set the profile to Dolby's film standard profile for all operating modes.",
      },
    ),
    DynamicRangeCompressionRf: Ac3DynamicRangeCompressionRfSchema.exactOptional().openapi({
      xml: { name: 'dynamicRangeCompressionRf' },
      description:
        'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
    }),
    LfeFilter: Ac3LfeFilterSchema.exactOptional().openapi({
      xml: { name: 'lfeFilter' },
      description:
        'Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.',
    }),
    MetadataControl: Ac3MetadataControlSchema.exactOptional().openapi({
      xml: { name: 'metadataControl' },
      description:
        'When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.',
    }),
    SampleRate: IntegerMin48000Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'This value is always 48000. It represents the sample rate in Hz.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.',
    required: [],
  })
  .openapi('Ac3Settings')

const IntegerMin16Max24Schema = z.int().min(16).max(24).openapi('IntegerMin16Max24')

const IntegerMin8000Max192000Schema = z
  .int()
  .min(8000)
  .max(192000)
  .openapi('IntegerMin8000Max192000')

const AiffSettingsSchema = z
  .object({
    BitDepth: IntegerMin16Max24Schema.exactOptional().openapi({
      xml: { name: 'bitDepth' },
      description:
        'Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.',
    }),
    Channels: IntegerMin1Max64Schema.exactOptional().openapi({
      xml: { name: 'channels' },
      description:
        'Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.',
    }),
    SampleRate: IntegerMin8000Max192000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in hz.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.',
    required: [],
  })
  .openapi('AiffSettings')

const AudioCodecSchema = z
  .enum([
    'AAC',
    'MP2',
    'MP3',
    'WAV',
    'AIFF',
    'AC3',
    'EAC3',
    'EAC3_ATMOS',
    'VORBIS',
    'OPUS',
    'PASSTHROUGH',
  ])
  .openapi({
    description:
      "Choose the audio codec for this output. Note that the option Dolby Digital passthrough (PASSTHROUGH) applies only to Dolby Digital and Dolby Digital Plus audio inputs. Make sure that you choose a codec that's supported with your output container: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#reference-codecs-containers-output-audio For audio-only outputs, make sure that both your input audio codec and your output audio codec are supported for audio-only workflows. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers-input.html#reference-codecs-containers-input-audio-only and https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#audio-only-output",
  })
  .openapi('AudioCodec')

const IntegerMin384000Max1024000Schema = z
  .int()
  .min(384000)
  .max(1024000)
  .openapi('IntegerMin384000Max1024000')

const Eac3AtmosBitstreamModeSchema = z
  .literal('COMPLETE_MAIN')
  .openapi({
    description:
      'Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).',
  })
  .openapi('Eac3AtmosBitstreamMode')

const Eac3AtmosCodingModeSchema = z
  .enum(['CODING_MODE_AUTO', 'CODING_MODE_5_1_4', 'CODING_MODE_7_1_4', 'CODING_MODE_9_1_6'])
  .openapi({ description: 'The coding mode for Dolby Digital Plus JOC (Atmos).' })
  .openapi('Eac3AtmosCodingMode')

const Eac3AtmosDialogueIntelligenceSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.',
  })
  .openapi('Eac3AtmosDialogueIntelligence')

const Eac3AtmosDownmixControlSchema = z
  .enum(['SPECIFIED', 'INITIALIZE_FROM_SOURCE'])
  .openapi({
    description:
      "Specify whether MediaConvert should use any downmix metadata from your input file. Keep the default value, Custom (SPECIFIED) to provide downmix values in your job settings. Choose Follow source (INITIALIZE_FROM_SOURCE) to use the metadata from your input. Related settings--Use these settings to specify your downmix values: Left only/Right only surround (LoRoSurroundMixLevel), Left total/Right total surround (LtRtSurroundMixLevel), Left total/Right total center (LtRtCenterMixLevel), Left only/Right only center (LoRoCenterMixLevel), and Stereo downmix (StereoDownmix). When you keep Custom (SPECIFIED) for Downmix control (DownmixControl) and you don't specify values for the related settings, MediaConvert uses default values for those settings.",
  })
  .openapi('Eac3AtmosDownmixControl')

const Eac3AtmosDynamicRangeCompressionLineSchema = z
  .enum(['NONE', 'FILM_STANDARD', 'FILM_LIGHT', 'MUSIC_STANDARD', 'MUSIC_LIGHT', 'SPEECH'])
  .openapi({
    description:
      'Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the line operating mode. Default value: Film light (ATMOS_STORAGE_DDP_COMPR_FILM_LIGHT) Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom (SPECIFIED) for the setting Dynamic range control (DynamicRangeControl). Otherwise, MediaConvert ignores Dynamic range compression line (DynamicRangeCompressionLine). For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
  })
  .openapi('Eac3AtmosDynamicRangeCompressionLine')

const Eac3AtmosDynamicRangeCompressionRfSchema = z
  .enum(['NONE', 'FILM_STANDARD', 'FILM_LIGHT', 'MUSIC_STANDARD', 'MUSIC_LIGHT', 'SPEECH'])
  .openapi({
    description:
      'Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the RF operating mode. Default value: Film light (ATMOS_STORAGE_DDP_COMPR_FILM_LIGHT) Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom (SPECIFIED) for the setting Dynamic range control (DynamicRangeControl). Otherwise, MediaConvert ignores Dynamic range compression RF (DynamicRangeCompressionRf). For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
  })
  .openapi('Eac3AtmosDynamicRangeCompressionRf')

const Eac3AtmosDynamicRangeControlSchema = z
  .enum(['SPECIFIED', 'INITIALIZE_FROM_SOURCE'])
  .openapi({
    description:
      "Specify whether MediaConvert should use any dynamic range control metadata from your input file. Keep the default value, Custom (SPECIFIED), to provide dynamic range control values in your job settings. Choose Follow source (INITIALIZE_FROM_SOURCE) to use the metadata from your input. Related settings--Use these settings to specify your dynamic range control values: Dynamic range compression line (DynamicRangeCompressionLine) and Dynamic range compression RF (DynamicRangeCompressionRf). When you keep the value Custom (SPECIFIED) for Dynamic range control (DynamicRangeControl) and you don't specify values for the related settings, MediaConvert uses default values for those settings.",
  })
  .openapi('Eac3AtmosDynamicRangeControl')

const DoubleMinNegative6Max3Schema = z.float64().openapi('DoubleMinNegative6Max3')

const DoubleMinNegative60MaxNegative1Schema = z.float64().openapi('DoubleMinNegative60MaxNegative1')

const Eac3AtmosMeteringModeSchema = z
  .enum(['LEQ_A', 'ITU_BS_1770_1', 'ITU_BS_1770_2', 'ITU_BS_1770_3', 'ITU_BS_1770_4'])
  .openapi({ description: 'Choose how the service meters the loudness of your audio.' })
  .openapi('Eac3AtmosMeteringMode')

const Eac3AtmosStereoDownmixSchema = z
  .enum(['NOT_INDICATED', 'STEREO', 'SURROUND', 'DPL2'])
  .openapi({
    description:
      'Choose how the service does stereo downmixing. Default value: Not indicated (ATMOS_STORAGE_DDP_DMIXMOD_NOT_INDICATED) Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Stereo downmix (StereoDownmix).',
  })
  .openapi('Eac3AtmosStereoDownmix')

const Eac3AtmosSurroundExModeSchema = z
  .enum(['NOT_INDICATED', 'ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.',
  })
  .openapi('Eac3AtmosSurroundExMode')

const Eac3AtmosSettingsSchema = z
  .object({
    Bitrate: IntegerMin384000Max1024000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate for this output in bits per second. Valid values: 384k, 448k, 576k, 640k, 768k, 1024k Default value: 448k Note that MediaConvert supports 384k only with channel-based immersive (CBI) 7.1.4 and 5.1.4 inputs. For CBI 9.1.6 and other input types, MediaConvert automatically increases your output bitrate to 448k.',
    }),
    BitstreamMode: Eac3AtmosBitstreamModeSchema.exactOptional().openapi({
      xml: { name: 'bitstreamMode' },
      description:
        'Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).',
    }),
    CodingMode: Eac3AtmosCodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description: 'The coding mode for Dolby Digital Plus JOC (Atmos).',
    }),
    DialogueIntelligence: Eac3AtmosDialogueIntelligenceSchema.exactOptional().openapi({
      xml: { name: 'dialogueIntelligence' },
      description:
        'Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.',
    }),
    DownmixControl: Eac3AtmosDownmixControlSchema.exactOptional().openapi({
      xml: { name: 'downmixControl' },
      description:
        "Specify whether MediaConvert should use any downmix metadata from your input file. Keep the default value, Custom (SPECIFIED) to provide downmix values in your job settings. Choose Follow source (INITIALIZE_FROM_SOURCE) to use the metadata from your input. Related settings--Use these settings to specify your downmix values: Left only/Right only surround (LoRoSurroundMixLevel), Left total/Right total surround (LtRtSurroundMixLevel), Left total/Right total center (LtRtCenterMixLevel), Left only/Right only center (LoRoCenterMixLevel), and Stereo downmix (StereoDownmix). When you keep Custom (SPECIFIED) for Downmix control (DownmixControl) and you don't specify values for the related settings, MediaConvert uses default values for those settings.",
    }),
    DynamicRangeCompressionLine: Eac3AtmosDynamicRangeCompressionLineSchema.exactOptional().openapi(
      {
        xml: { name: 'dynamicRangeCompressionLine' },
        description:
          'Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the line operating mode. Default value: Film light (ATMOS_STORAGE_DDP_COMPR_FILM_LIGHT) Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom (SPECIFIED) for the setting Dynamic range control (DynamicRangeControl). Otherwise, MediaConvert ignores Dynamic range compression line (DynamicRangeCompressionLine). For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
      },
    ),
    DynamicRangeCompressionRf: Eac3AtmosDynamicRangeCompressionRfSchema.exactOptional().openapi({
      xml: { name: 'dynamicRangeCompressionRf' },
      description:
        'Choose the Dolby dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby stream for the RF operating mode. Default value: Film light (ATMOS_STORAGE_DDP_COMPR_FILM_LIGHT) Related setting: To have MediaConvert use the value you specify here, keep the default value, Custom (SPECIFIED) for the setting Dynamic range control (DynamicRangeControl). Otherwise, MediaConvert ignores Dynamic range compression RF (DynamicRangeCompressionRf). For information about the Dolby DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
    }),
    DynamicRangeControl: Eac3AtmosDynamicRangeControlSchema.exactOptional().openapi({
      xml: { name: 'dynamicRangeControl' },
      description:
        "Specify whether MediaConvert should use any dynamic range control metadata from your input file. Keep the default value, Custom (SPECIFIED), to provide dynamic range control values in your job settings. Choose Follow source (INITIALIZE_FROM_SOURCE) to use the metadata from your input. Related settings--Use these settings to specify your dynamic range control values: Dynamic range compression line (DynamicRangeCompressionLine) and Dynamic range compression RF (DynamicRangeCompressionRf). When you keep the value Custom (SPECIFIED) for Dynamic range control (DynamicRangeControl) and you don't specify values for the related settings, MediaConvert uses default values for those settings.",
    }),
    LoRoCenterMixLevel: DoubleMinNegative6Max3Schema.exactOptional().openapi({
      xml: { name: 'loRoCenterMixLevel' },
      description:
        'Specify a value for the following Dolby Atmos setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Left only/Right only center (LoRoCenterMixLevel).',
    }),
    LoRoSurroundMixLevel: DoubleMinNegative60MaxNegative1Schema.exactOptional().openapi({
      xml: { name: 'loRoSurroundMixLevel' },
      description:
        'Specify a value for the following Dolby Atmos setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Left only/Right only surround (LoRoSurroundMixLevel).',
    }),
    LtRtCenterMixLevel: DoubleMinNegative6Max3Schema.exactOptional().openapi({
      xml: { name: 'ltRtCenterMixLevel' },
      description:
        'Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB) Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Left total/Right total center (LtRtCenterMixLevel).',
    }),
    LtRtSurroundMixLevel: DoubleMinNegative60MaxNegative1Schema.exactOptional().openapi({
      xml: { name: 'ltRtSurroundMixLevel' },
      description:
        'Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. Default value: -3 dB (ATMOS_STORAGE_DDP_MIXLEV_MINUS_3_DB) Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. Related setting: How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, the service ignores Left total/Right total surround (LtRtSurroundMixLevel).',
    }),
    MeteringMode: Eac3AtmosMeteringModeSchema.exactOptional().openapi({
      xml: { name: 'meteringMode' },
      description: 'Choose how the service meters the loudness of your audio.',
    }),
    SampleRate: IntegerMin48000Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'This value is always 48000. It represents the sample rate in Hz.',
    }),
    SpeechThreshold: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'speechThreshold' },
      description:
        'Specify the percentage of audio content, from 0% to 100%, that must be speech in order for the encoder to use the measured speech loudness as the overall program loudness. Default value: 15%',
    }),
    StereoDownmix: Eac3AtmosStereoDownmixSchema.exactOptional().openapi({
      xml: { name: 'stereoDownmix' },
      description:
        'Choose how the service does stereo downmixing. Default value: Not indicated (ATMOS_STORAGE_DDP_DMIXMOD_NOT_INDICATED) Related setting: To have MediaConvert use this value, keep the default value, Custom (SPECIFIED) for the setting Downmix control (DownmixControl). Otherwise, MediaConvert ignores Stereo downmix (StereoDownmix).',
    }),
    SurroundExMode: Eac3AtmosSurroundExModeSchema.exactOptional().openapi({
      xml: { name: 'surroundExMode' },
      description:
        'Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.',
    required: [],
  })
  .openapi('Eac3AtmosSettings')

const Eac3AttenuationControlSchema = z
  .enum(['ATTENUATE_3_DB', 'NONE'])
  .openapi({
    description:
      'If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.',
  })
  .openapi('Eac3AttenuationControl')

const IntegerMin32000Max3024000Schema = z
  .int()
  .min(32000)
  .max(3024000)
  .openapi('IntegerMin32000Max3024000')

const Eac3BitstreamModeSchema = z
  .enum(['COMPLETE_MAIN', 'COMMENTARY', 'EMERGENCY', 'HEARING_IMPAIRED', 'VISUALLY_IMPAIRED'])
  .openapi({
    description:
      'Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).',
  })
  .openapi('Eac3BitstreamMode')

const Eac3CodingModeSchema = z
  .enum(['CODING_MODE_1_0', 'CODING_MODE_2_0', 'CODING_MODE_3_2'])
  .openapi({ description: 'Dolby Digital Plus coding mode. Determines number of channels.' })
  .openapi('Eac3CodingMode')

const Eac3DcFilterSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({ description: 'Activates a DC highpass filter for all input channels.' })
  .openapi('Eac3DcFilter')

const Eac3DynamicRangeCompressionLineSchema = z
  .enum(['NONE', 'FILM_STANDARD', 'FILM_LIGHT', 'MUSIC_STANDARD', 'MUSIC_LIGHT', 'SPEECH'])
  .openapi({
    description:
      'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
  })
  .openapi('Eac3DynamicRangeCompressionLine')

const Eac3DynamicRangeCompressionRfSchema = z
  .enum(['NONE', 'FILM_STANDARD', 'FILM_LIGHT', 'MUSIC_STANDARD', 'MUSIC_LIGHT', 'SPEECH'])
  .openapi({
    description:
      'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
  })
  .openapi('Eac3DynamicRangeCompressionRf')

const Eac3LfeControlSchema = z
  .enum(['LFE', 'NO_LFE'])
  .openapi({ description: 'When encoding 3/2 audio, controls whether the LFE channel is enabled' })
  .openapi('Eac3LfeControl')

const Eac3LfeFilterSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.',
  })
  .openapi('Eac3LfeFilter')

const DoubleMinNegative60Max3Schema = z.float64().openapi('DoubleMinNegative60Max3')

const Eac3MetadataControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({
    description:
      'When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.',
  })
  .openapi('Eac3MetadataControl')

const Eac3PassthroughControlSchema = z
  .enum(['WHEN_POSSIBLE', 'NO_PASSTHROUGH'])
  .openapi({
    description:
      'When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.',
  })
  .openapi('Eac3PassthroughControl')

const Eac3PhaseControlSchema = z
  .enum(['SHIFT_90_DEGREES', 'NO_SHIFT'])
  .openapi({
    description:
      'Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.',
  })
  .openapi('Eac3PhaseControl')

const Eac3StereoDownmixSchema = z
  .enum(['NOT_INDICATED', 'LO_RO', 'LT_RT', 'DPL2'])
  .openapi({
    description:
      'Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).',
  })
  .openapi('Eac3StereoDownmix')

const Eac3SurroundExModeSchema = z
  .enum(['NOT_INDICATED', 'ENABLED', 'DISABLED'])
  .openapi({
    description:
      'When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.',
  })
  .openapi('Eac3SurroundExMode')

const Eac3SurroundModeSchema = z
  .enum(['NOT_INDICATED', 'ENABLED', 'DISABLED'])
  .openapi({
    description:
      'When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.',
  })
  .openapi('Eac3SurroundMode')

const Eac3SettingsSchema = z
  .object({
    AttenuationControl: Eac3AttenuationControlSchema.exactOptional().openapi({
      xml: { name: 'attenuationControl' },
      description:
        'If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.',
    }),
    Bitrate: IntegerMin32000Max3024000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate in bits per second. The bitrate that you specify must be a multiple of 8000 within the allowed minimum and maximum values. Leave blank to use the default bitrate for the coding mode you select according ETSI TS 102 366. Valid bitrates for coding mode 1/0: Default: 96000. Minimum: 32000. Maximum: 3024000. Valid bitrates for coding mode 2/0: Default: 192000. Minimum: 96000. Maximum: 3024000. Valid bitrates for coding mode 3/2: Default: 384000. Minimum: 192000. Maximum: 3024000.',
    }),
    BitstreamMode: Eac3BitstreamModeSchema.exactOptional().openapi({
      xml: { name: 'bitstreamMode' },
      description:
        'Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).',
    }),
    CodingMode: Eac3CodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description: 'Dolby Digital Plus coding mode. Determines number of channels.',
    }),
    DcFilter: Eac3DcFilterSchema.exactOptional().openapi({
      xml: { name: 'dcFilter' },
      description: 'Activates a DC highpass filter for all input channels.',
    }),
    Dialnorm: IntegerMin1Max31Schema.exactOptional().openapi({
      xml: { name: 'dialnorm' },
      description:
        'Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.',
    }),
    DynamicRangeCompressionLine: Eac3DynamicRangeCompressionLineSchema.exactOptional().openapi({
      xml: { name: 'dynamicRangeCompressionLine' },
      description:
        'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the line operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
    }),
    DynamicRangeCompressionRf: Eac3DynamicRangeCompressionRfSchema.exactOptional().openapi({
      xml: { name: 'dynamicRangeCompressionRf' },
      description:
        'Choose the Dolby Digital dynamic range control (DRC) profile that MediaConvert uses when encoding the metadata in the Dolby Digital stream for the RF operating mode. Related setting: When you use this setting, MediaConvert ignores any value you provide for Dynamic range compression profile (DynamicRangeCompressionProfile). For information about the Dolby Digital DRC operating modes and profiles, see the Dynamic Range Control chapter of the Dolby Metadata Guide at https://developer.dolby.com/globalassets/professional/documents/dolby-metadata-guide.pdf.',
    }),
    LfeControl: Eac3LfeControlSchema.exactOptional().openapi({
      xml: { name: 'lfeControl' },
      description: 'When encoding 3/2 audio, controls whether the LFE channel is enabled',
    }),
    LfeFilter: Eac3LfeFilterSchema.exactOptional().openapi({
      xml: { name: 'lfeFilter' },
      description:
        'Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.',
    }),
    LoRoCenterMixLevel: DoubleMinNegative60Max3Schema.exactOptional().openapi({
      xml: { name: 'loRoCenterMixLevel' },
      description:
        'Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only center (loRoCenterMixLevel).',
    }),
    LoRoSurroundMixLevel: DoubleMinNegative60MaxNegative1Schema.exactOptional().openapi({
      xml: { name: 'loRoSurroundMixLevel' },
      description:
        'Specify a value for the following Dolby Digital Plus setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only surround (loRoSurroundMixLevel).',
    }),
    LtRtCenterMixLevel: DoubleMinNegative60Max3Schema.exactOptional().openapi({
      xml: { name: 'ltRtCenterMixLevel' },
      description:
        'Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total center (ltRtCenterMixLevel).',
    }),
    LtRtSurroundMixLevel: DoubleMinNegative60MaxNegative1Schema.exactOptional().openapi({
      xml: { name: 'ltRtSurroundMixLevel' },
      description:
        'Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total surround (ltRtSurroundMixLevel).',
    }),
    MetadataControl: Eac3MetadataControlSchema.exactOptional().openapi({
      xml: { name: 'metadataControl' },
      description:
        'When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.',
    }),
    PassthroughControl: Eac3PassthroughControlSchema.exactOptional().openapi({
      xml: { name: 'passthroughControl' },
      description:
        'When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.',
    }),
    PhaseControl: Eac3PhaseControlSchema.exactOptional().openapi({
      xml: { name: 'phaseControl' },
      description:
        'Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.',
    }),
    SampleRate: IntegerMin48000Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'This value is always 48000. It represents the sample rate in Hz.',
    }),
    StereoDownmix: Eac3StereoDownmixSchema.exactOptional().openapi({
      xml: { name: 'stereoDownmix' },
      description:
        'Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).',
    }),
    SurroundExMode: Eac3SurroundExModeSchema.exactOptional().openapi({
      xml: { name: 'surroundExMode' },
      description:
        'When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.',
    }),
    SurroundMode: Eac3SurroundModeSchema.exactOptional().openapi({
      xml: { name: 'surroundMode' },
      description:
        'When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.',
    required: [],
  })
  .openapi('Eac3Settings')

const IntegerMin32000Max384000Schema = z
  .int()
  .min(32000)
  .max(384000)
  .openapi('IntegerMin32000Max384000')

const IntegerMin1Max2Schema = z.int().min(1).max(2).openapi('IntegerMin1Max2')

const IntegerMin32000Max48000Schema = z
  .int()
  .min(32000)
  .max(48000)
  .openapi('IntegerMin32000Max48000')

const Mp2SettingsSchema = z
  .object({
    Bitrate: IntegerMin32000Max384000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description: 'Specify the average bitrate in bits per second.',
    }),
    Channels: IntegerMin1Max2Schema.exactOptional().openapi({
      xml: { name: 'channels' },
      description:
        'Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.',
    }),
    SampleRate: IntegerMin32000Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in hz.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.',
    required: [],
  })
  .openapi('Mp2Settings')

const IntegerMin16000Max320000Schema = z
  .int()
  .min(16000)
  .max(320000)
  .openapi('IntegerMin16000Max320000')

const Mp3RateControlModeSchema = z
  .enum(['CBR', 'VBR'])
  .openapi({
    description:
      'Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).',
  })
  .openapi('Mp3RateControlMode')

const IntegerMin22050Max48000Schema = z
  .int()
  .min(22050)
  .max(48000)
  .openapi('IntegerMin22050Max48000')

const IntegerMin0Max9Schema = z.int().min(0).max(9).openapi('IntegerMin0Max9')

const Mp3SettingsSchema = z
  .object({
    Bitrate: IntegerMin16000Max320000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description: 'Specify the average bitrate in bits per second.',
    }),
    Channels: IntegerMin1Max2Schema.exactOptional().openapi({
      xml: { name: 'channels' },
      description:
        'Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.',
    }),
    RateControlMode: Mp3RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'Specify whether the service encodes this MP3 audio output with a constant bitrate (CBR) or a variable bitrate (VBR).',
    }),
    SampleRate: IntegerMin22050Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in hz.',
    }),
    VbrQuality: IntegerMin0Max9Schema.exactOptional().openapi({
      xml: { name: 'vbrQuality' },
      description:
        'Required when you set Bitrate control mode (rateControlMode) to VBR. Specify the audio quality of this MP3 output from 0 (highest quality) to 9 (lowest quality).',
    }),
  })
  .openapi({
    description:
      'Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.',
    required: [],
  })
  .openapi('Mp3Settings')

const IntegerMin32000Max192000Schema = z
  .int()
  .min(32000)
  .max(192000)
  .openapi('IntegerMin32000Max192000')

const IntegerMin16000Max48000Schema = z
  .int()
  .min(16000)
  .max(48000)
  .openapi('IntegerMin16000Max48000')

const OpusSettingsSchema = z
  .object({
    Bitrate: IntegerMin32000Max192000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Optional. Specify the average bitrate in bits per second. Valid values are multiples of 8000, from 32000 through 192000. The default value is 96000, which we recommend for quality and bandwidth.',
    }),
    Channels: IntegerMin1Max2Schema.exactOptional().openapi({
      xml: { name: 'channels' },
      description:
        'Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2.',
    }),
    SampleRate: IntegerMin16000Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description:
        'Optional. Sample rate in hz. Valid values are 16000, 24000, and 48000. The default value is 48000.',
    }),
  })
  .openapi({
    description:
      'Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.',
    required: [],
  })
  .openapi('OpusSettings')

const IntegerMinNegative1Max10Schema = z.int().min(-1).max(10).openapi('IntegerMinNegative1Max10')

const VorbisSettingsSchema = z
  .object({
    Channels: IntegerMin1Max2Schema.exactOptional().openapi({
      xml: { name: 'channels' },
      description:
        'Optional. Specify the number of channels in this output audio track. Choosing Mono on the console gives you 1 output channel; choosing Stereo gives you 2. In the API, valid values are 1 and 2. The default value is 2.',
    }),
    SampleRate: IntegerMin22050Max48000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description:
        'Optional. Specify the audio sample rate in Hz. Valid values are 22050, 32000, 44100, and 48000. The default value is 48000.',
    }),
    VbrQuality: IntegerMinNegative1Max10Schema.exactOptional().openapi({
      xml: { name: 'vbrQuality' },
      description:
        'Optional. Specify the variable audio quality of this Vorbis output from -1 (lowest quality, ~45 kbit/s) to 10 (highest quality, ~500 kbit/s). The default value is 4 (~128 kbit/s). Values 5 and 6 are approximately 160 and 192 kbit/s, respectively.',
    }),
  })
  .openapi({
    description:
      'Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.',
    required: [],
  })
  .openapi('VorbisSettings')

const WavFormatSchema = z
  .enum(['RIFF', 'RF64'])
  .openapi({
    description:
      'The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.',
  })
  .openapi('WavFormat')

const WavSettingsSchema = z
  .object({
    BitDepth: IntegerMin16Max24Schema.exactOptional().openapi({
      xml: { name: 'bitDepth' },
      description:
        'Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.',
    }),
    Channels: IntegerMin1Max64Schema.exactOptional().openapi({
      xml: { name: 'channels' },
      description:
        'Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.',
    }),
    Format: WavFormatSchema.exactOptional().openapi({
      xml: { name: 'format' },
      description:
        'The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.',
    }),
    SampleRate: IntegerMin8000Max192000Schema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in Hz.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.',
    required: [],
  })
  .openapi('WavSettings')

const AudioCodecSettingsSchema = z
  .object({
    AacSettings: AacSettingsSchema.exactOptional().openapi({
      xml: { name: 'aacSettings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR". In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.',
    }),
    Ac3Settings: Ac3SettingsSchema.exactOptional().openapi({
      xml: { name: 'ac3Settings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.',
    }),
    AiffSettings: AiffSettingsSchema.exactOptional().openapi({
      xml: { name: 'aiffSettings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.',
    }),
    Codec: AudioCodecSchema.exactOptional().openapi({
      xml: { name: 'codec' },
      description:
        "Choose the audio codec for this output. Note that the option Dolby Digital passthrough (PASSTHROUGH) applies only to Dolby Digital and Dolby Digital Plus audio inputs. Make sure that you choose a codec that's supported with your output container: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#reference-codecs-containers-output-audio For audio-only outputs, make sure that both your input audio codec and your output audio codec are supported for audio-only workflows. For more information, see: https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers-input.html#reference-codecs-containers-input-audio-only and https://docs.aws.amazon.com/mediaconvert/latest/ug/reference-codecs-containers.html#audio-only-output",
    }),
    Eac3AtmosSettings: Eac3AtmosSettingsSchema.exactOptional().openapi({
      xml: { name: 'eac3AtmosSettings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.',
    }),
    Eac3Settings: Eac3SettingsSchema.exactOptional().openapi({
      xml: { name: 'eac3Settings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.',
    }),
    Mp2Settings: Mp2SettingsSchema.exactOptional().openapi({
      xml: { name: 'mp2Settings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.',
    }),
    Mp3Settings: Mp3SettingsSchema.exactOptional().openapi({
      xml: { name: 'mp3Settings' },
      description:
        'Required when you set Codec, under AudioDescriptions>CodecSettings, to the value MP3.',
    }),
    OpusSettings: OpusSettingsSchema.exactOptional().openapi({
      xml: { name: 'opusSettings' },
      description:
        'Required when you set Codec, under AudioDescriptions>CodecSettings, to the value OPUS.',
    }),
    VorbisSettings: VorbisSettingsSchema.exactOptional().openapi({
      xml: { name: 'vorbisSettings' },
      description:
        'Required when you set Codec, under AudioDescriptions>CodecSettings, to the value Vorbis.',
    }),
    WavSettings: WavSettingsSchema.exactOptional().openapi({
      xml: { name: 'wavSettings' },
      description:
        'Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.',
    }),
  })
  .openapi({
    description:
      'Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.',
    required: [],
  })
  .openapi('AudioCodecSettings')

const StringPatternAZaZ23AZaZSchema = z
  .string()
  .regex(/^[A-Za-z]{2,3}(-[A-Za-z-]+)?$/)
  .openapi('StringPatternAZaZ23AZaZ')

const AudioLanguageCodeControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({
    description:
      "Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify.",
  })
  .openapi('AudioLanguageCodeControl')

const StringPatternWSSchema = z
  .string()
  .regex(/^[\w\s]*$/)
  .openapi('StringPatternWS')

const AudioDescriptionSchema = z
  .object({
    AudioChannelTaggingSettings: AudioChannelTaggingSettingsSchema.exactOptional().openapi({
      xml: { name: 'audioChannelTaggingSettings' },
      description:
        "When you mimic a multi-channel audio layout with multiple mono-channel tracks, you can tag each channel layout manually. For example, you would tag the tracks that contain your left, right, and center audio with Left (L), Right (R), and Center (C), respectively. When you don't specify a value, MediaConvert labels your track as Center (C) by default. To use audio layout tagging, your output must be in a QuickTime (.mov) container; your audio codec must be AAC, WAV, or AIFF; and you must set up your audio track to have only one channel.",
    }),
    AudioNormalizationSettings: AudioNormalizationSettingsSchema.exactOptional().openapi({
      xml: { name: 'audioNormalizationSettings' },
      description:
        'Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.',
    }),
    AudioSourceName: StringSchema.exactOptional().openapi({
      xml: { name: 'audioSourceName' },
      description:
        'Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.',
    }),
    AudioType: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'audioType' },
      description:
        'Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.',
    }),
    AudioTypeControl: AudioTypeControlSchema.exactOptional().openapi({
      xml: { name: 'audioTypeControl' },
      description:
        'When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.',
    }),
    CodecSettings: AudioCodecSettingsSchema.exactOptional().openapi({
      xml: { name: 'codecSettings' },
      description:
        'Settings related to audio encoding. The settings in this group vary depending on the value that you choose for your audio codec.',
    }),
    CustomLanguageCode: StringPatternAZaZ23AZaZSchema.exactOptional().openapi({
      xml: { name: 'customLanguageCode' },
      description:
        "Specify the language for this audio output track. The service puts this language code into your output audio track when you set Language code control (AudioLanguageCodeControl) to Use configured (USE_CONFIGURED). The service also uses your specified custom language code when you set Language code control (AudioLanguageCodeControl) to Follow input (FOLLOW_INPUT), but your input file doesn't specify a language code. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.",
    }),
    LanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        "Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.",
    }),
    LanguageCodeControl: AudioLanguageCodeControlSchema.exactOptional().openapi({
      xml: { name: 'languageCodeControl' },
      description:
        "Specify which source for language code takes precedence for this audio track. When you choose Follow input (FOLLOW_INPUT), the service uses the language code from the input track if it's present. If there's no languge code on the input track, the service uses the code that you specify in the setting Language code (languageCode or customLanguageCode). When you choose Use configured (USE_CONFIGURED), the service uses the language code that you specify.",
    }),
    RemixSettings: RemixSettingsSchema.exactOptional().openapi({
      xml: { name: 'remixSettings' },
      description: 'Advanced audio remixing settings.',
    }),
    StreamName: StringPatternWSSchema.exactOptional().openapi({
      xml: { name: 'streamName' },
      description:
        'Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer\'s player device. For outputs in other output groups, the service ignores this setting.',
    }),
  })
  .openapi({
    description:
      'Settings related to one audio tab on the MediaConvert console. In your job JSON, an instance of AudioDescription is equivalent to one audio tab in the console. Usually, one audio tab corresponds to one output audio track. Depending on how you set up your input audio selectors and whether you use audio selector groups, one audio tab can correspond to a group of output audio tracks.',
    required: [],
  })
  .openapi('AudioDescription')

const ListOfAudioDescriptionSchema = z
  .array(AudioDescriptionSchema)
  .openapi('ListOfAudioDescription')

const BurninSubtitleAlignmentSchema = z
  .enum(['CENTERED', 'LEFT', 'AUTO'])
  .openapi({
    description:
      'Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates.',
  })
  .openapi('BurninSubtitleAlignment')

const BurninSubtitleApplyFontColorSchema = z
  .enum(['WHITE_TEXT_ONLY', 'ALL_TEXT'])
  .openapi({
    description:
      'Ignore this setting unless Style passthrough (StylePassthrough) is set to Enabled and Font color (FontColor) set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color (ApplyFontColor) for additional font color controls. When you choose White text only (WHITE_TEXT_ONLY), or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.',
  })
  .openapi('BurninSubtitleApplyFontColor')

const BurninSubtitleBackgroundColorSchema = z
  .enum(['NONE', 'BLACK', 'WHITE', 'AUTO'])
  .openapi({
    description:
      'Specify the color of the rectangle behind the captions. Leave background color (BackgroundColor) blank and set Style passthrough (StylePassthrough) to enabled to use the background color data from your input captions, if present.',
  })
  .openapi('BurninSubtitleBackgroundColor')

const BurninSubtitleFallbackFontSchema = z
  .enum([
    'BEST_MATCH',
    'MONOSPACED_SANSSERIF',
    'MONOSPACED_SERIF',
    'PROPORTIONAL_SANSSERIF',
    'PROPORTIONAL_SERIF',
  ])
  .openapi({
    description:
      "Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font (FallbackFont) to best match (BEST_MATCH), or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.",
  })
  .openapi('BurninSubtitleFallbackFont')

const BurninSubtitleFontColorSchema = z
  .enum(['WHITE', 'BLACK', 'YELLOW', 'RED', 'GREEN', 'BLUE', 'HEX', 'AUTO'])
  .openapi({
    description:
      'Specify the color of the burned-in captions text. Leave Font color (FontColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font color data from your input captions, if present.',
  })
  .openapi('BurninSubtitleFontColor')

const IntegerMin96Max600Schema = z.int().min(96).max(600).openapi('IntegerMin96Max600')

const FontScriptSchema = z
  .enum(['AUTOMATIC', 'HANS', 'HANT'])
  .openapi({
    description:
      'Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset.',
  })
  .openapi('FontScript')

const IntegerMin0Max96Schema = z.int().min(0).max(96).openapi('IntegerMin0Max96')

const StringMin6Max8Pattern09aFAF609aFAF2Schema = z
  .string()
  .regex(/^[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/)
  .min(6)
  .max(8)
  .openapi('StringMin6Max8Pattern09aFAF609aFAF2')

const BurninSubtitleOutlineColorSchema = z
  .enum(['BLACK', 'WHITE', 'YELLOW', 'RED', 'GREEN', 'BLUE', 'AUTO'])
  .openapi({
    description:
      'Specify font outline color. Leave Outline color (OutlineColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font outline color data from your input captions, if present.',
  })
  .openapi('BurninSubtitleOutlineColor')

const IntegerMin0Max10Schema = z.int().min(0).max(10).openapi('IntegerMin0Max10')

const BurninSubtitleShadowColorSchema = z
  .enum(['NONE', 'BLACK', 'WHITE', 'AUTO'])
  .openapi({
    description:
      'Specify the color of the shadow cast by the captions. Leave Shadow color (ShadowColor) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow color data from your input captions, if present.',
  })
  .openapi('BurninSubtitleShadowColor')

const BurnInSubtitleStylePassthroughSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings.',
  })
  .openapi('BurnInSubtitleStylePassthrough')

const BurninSubtitleTeletextSpacingSchema = z
  .enum(['FIXED_GRID', 'PROPORTIONAL', 'AUTO'])
  .openapi({
    description:
      'Specify whether the text spacing (TeletextSpacing) in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid (FIXED_GRID) to conform to the spacing specified in the captions file more accurately. Choose proportional (PROPORTIONAL) to make the text easier to read for closed captions.',
  })
  .openapi('BurninSubtitleTeletextSpacing')

const BurninDestinationSettingsSchema = z
  .object({
    Alignment: BurninSubtitleAlignmentSchema.exactOptional().openapi({
      xml: { name: 'alignment' },
      description:
        'Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates.',
    }),
    ApplyFontColor: BurninSubtitleApplyFontColorSchema.exactOptional().openapi({
      xml: { name: 'applyFontColor' },
      description:
        'Ignore this setting unless Style passthrough (StylePassthrough) is set to Enabled and Font color (FontColor) set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color (ApplyFontColor) for additional font color controls. When you choose White text only (WHITE_TEXT_ONLY), or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.',
    }),
    BackgroundColor: BurninSubtitleBackgroundColorSchema.exactOptional().openapi({
      xml: { name: 'backgroundColor' },
      description:
        'Specify the color of the rectangle behind the captions. Leave background color (BackgroundColor) blank and set Style passthrough (StylePassthrough) to enabled to use the background color data from your input captions, if present.',
    }),
    BackgroundOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'backgroundOpacity' },
      description:
        'Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions.',
    }),
    FallbackFont: BurninSubtitleFallbackFontSchema.exactOptional().openapi({
      xml: { name: 'fallbackFont' },
      description:
        "Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font (FallbackFont) to best match (BEST_MATCH), or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.",
    }),
    FontColor: BurninSubtitleFontColorSchema.exactOptional().openapi({
      xml: { name: 'fontColor' },
      description:
        'Specify the color of the burned-in captions text. Leave Font color (FontColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font color data from your input captions, if present.',
    }),
    FontOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'fontOpacity' },
      description:
        'Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.',
    }),
    FontResolution: IntegerMin96Max600Schema.exactOptional().openapi({
      xml: { name: 'fontResolution' },
      description: 'Specify the Font resolution (FontResolution) in DPI (dots per inch).',
    }),
    FontScript: FontScriptSchema.exactOptional().openapi({
      xml: { name: 'fontScript' },
      description:
        'Set Font script (FontScript) to Automatically determined (AUTOMATIC), or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese.',
    }),
    FontSize: IntegerMin0Max96Schema.exactOptional().openapi({
      xml: { name: 'fontSize' },
      description:
        'Specify the Font size (FontSize) in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size.',
    }),
    HexFontColor: StringMin6Max8Pattern09aFAF609aFAF2Schema.exactOptional().openapi({
      xml: { name: 'hexFontColor' },
      description:
        'Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.',
    }),
    OutlineColor: BurninSubtitleOutlineColorSchema.exactOptional().openapi({
      xml: { name: 'outlineColor' },
      description:
        'Specify font outline color. Leave Outline color (OutlineColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font outline color data from your input captions, if present.',
    }),
    OutlineSize: IntegerMin0Max10Schema.exactOptional().openapi({
      xml: { name: 'outlineSize' },
      description:
        'Specify the Outline size (OutlineSize) of the caption text, in pixels. Leave Outline size blank and set Style passthrough (StylePassthrough) to enabled to use the outline size data from your input captions, if present.',
    }),
    ShadowColor: BurninSubtitleShadowColorSchema.exactOptional().openapi({
      xml: { name: 'shadowColor' },
      description:
        'Specify the color of the shadow cast by the captions. Leave Shadow color (ShadowColor) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow color data from your input captions, if present.',
    }),
    ShadowOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'shadowOpacity' },
      description:
        'Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to Enabled, leave Shadow opacity (ShadowOpacity) blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions.',
    }),
    ShadowXOffset: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'shadowXOffset' },
      description:
        'Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.',
    }),
    ShadowYOffset: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'shadowYOffset' },
      description:
        'Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset (ShadowYOffset) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow y-offset data from your input captions, if present.',
    }),
    StylePassthrough: BurnInSubtitleStylePassthroughSchema.exactOptional().openapi({
      xml: { name: 'stylePassthrough' },
      description:
        'Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings.',
    }),
    TeletextSpacing: BurninSubtitleTeletextSpacingSchema.exactOptional().openapi({
      xml: { name: 'teletextSpacing' },
      description:
        'Specify whether the text spacing (TeletextSpacing) in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid (FIXED_GRID) to conform to the spacing specified in the captions file more accurately. Choose proportional (PROPORTIONAL) to make the text easier to read for closed captions.',
    }),
    XPosition: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'xPosition' },
      description:
        'Specify the horizontal position (XPosition) of the captions, relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter.',
    }),
    YPosition: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'yPosition' },
      description:
        'Specify the vertical position (YPosition) of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output.',
    }),
  })
  .openapi({
    description:
      'Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to BURN_IN.',
    required: [],
  })
  .openapi('BurninDestinationSettings')

const CaptionDestinationTypeSchema = z
  .enum([
    'BURN_IN',
    'DVB_SUB',
    'EMBEDDED',
    'EMBEDDED_PLUS_SCTE20',
    'IMSC',
    'SCTE20_PLUS_EMBEDDED',
    'SCC',
    'SRT',
    'SMI',
    'TELETEXT',
    'TTML',
    'WEBVTT',
  ])
  .openapi({
    description:
      'Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Note that your choice of video output container constrains your choice of output captions format. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/captions-support-tables.html. If you are using SCTE-20 and you want to create an output that complies with the SCTE-43 spec, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED). To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).',
  })
  .openapi('CaptionDestinationType')

const DvbSubtitleAlignmentSchema = z
  .enum(['CENTERED', 'LEFT', 'AUTO'])
  .openapi({
    description:
      'Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Within your job settings, all of your DVB-Sub settings must be identical.',
  })
  .openapi('DvbSubtitleAlignment')

const DvbSubtitleApplyFontColorSchema = z
  .enum(['WHITE_TEXT_ONLY', 'ALL_TEXT'])
  .openapi({
    description:
      'Ignore this setting unless Style Passthrough (StylePassthrough) is set to Enabled and Font color (FontColor) set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color (ApplyFontColor) for additional font color controls. When you choose White text only (WHITE_TEXT_ONLY), or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.',
  })
  .openapi('DvbSubtitleApplyFontColor')

const DvbSubtitleBackgroundColorSchema = z
  .enum(['NONE', 'BLACK', 'WHITE', 'AUTO'])
  .openapi({
    description:
      'Specify the color of the rectangle behind the captions. Leave background color (BackgroundColor) blank and set Style passthrough (StylePassthrough) to enabled to use the background color data from your input captions, if present.',
  })
  .openapi('DvbSubtitleBackgroundColor')

const DvbddsHandlingSchema = z
  .enum(['NONE', 'SPECIFIED', 'NO_DISPLAY_WINDOW'])
  .openapi({
    description:
      "Specify how MediaConvert handles the display definition segment (DDS). To exclude the DDS from this set of captions: Keep the default, None. To include the DDS: Choose Specified. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate. To include the DDS, but not include display window data: Choose No display window. When you do, you can write position metadata to the page composition segment (PCS) with DDS x-coordinate and DDS y-coordinate. For video resolutions with a height of 576 pixels or less, MediaConvert doesn't include the DDS, regardless of the value you choose for DDS handling. All burn-in and DVB-Sub font settings must match.",
  })
  .openapi('DvbddsHandling')

const DvbSubSubtitleFallbackFontSchema = z
  .enum([
    'BEST_MATCH',
    'MONOSPACED_SANSSERIF',
    'MONOSPACED_SERIF',
    'PROPORTIONAL_SANSSERIF',
    'PROPORTIONAL_SERIF',
  ])
  .openapi({
    description:
      "Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font (FallbackFont) to best match (BEST_MATCH), or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.",
  })
  .openapi('DvbSubSubtitleFallbackFont')

const DvbSubtitleFontColorSchema = z
  .enum(['WHITE', 'BLACK', 'YELLOW', 'RED', 'GREEN', 'BLUE', 'HEX', 'AUTO'])
  .openapi({
    description:
      'Specify the color of the captions text. Leave Font color (FontColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
  })
  .openapi('DvbSubtitleFontColor')

const DvbSubtitleOutlineColorSchema = z
  .enum(['BLACK', 'WHITE', 'YELLOW', 'RED', 'GREEN', 'BLUE', 'AUTO'])
  .openapi({
    description:
      'Specify font outline color. Leave Outline color (OutlineColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font outline color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
  })
  .openapi('DvbSubtitleOutlineColor')

const DvbSubtitleShadowColorSchema = z
  .enum(['NONE', 'BLACK', 'WHITE', 'AUTO'])
  .openapi({
    description:
      'Specify the color of the shadow cast by the captions. Leave Shadow color (ShadowColor) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
  })
  .openapi('DvbSubtitleShadowColor')

const DvbSubtitleStylePassthroughSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings.',
  })
  .openapi('DvbSubtitleStylePassthrough')

const DvbSubtitlingTypeSchema = z
  .enum(['HEARING_IMPAIRED', 'STANDARD'])
  .openapi({
    description:
      'Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.',
  })
  .openapi('DvbSubtitlingType')

const DvbSubtitleTeletextSpacingSchema = z
  .enum(['FIXED_GRID', 'PROPORTIONAL', 'AUTO'])
  .openapi({
    description:
      'Specify whether the Text spacing (TeletextSpacing) in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid (FIXED_GRID) to conform to the spacing specified in the captions file more accurately. Choose proportional (PROPORTIONAL) to make the text easier to read for closed captions. Within your job settings, all of your DVB-Sub settings must be identical.',
  })
  .openapi('DvbSubtitleTeletextSpacing')

const DvbSubDestinationSettingsSchema = z
  .object({
    Alignment: DvbSubtitleAlignmentSchema.exactOptional().openapi({
      xml: { name: 'alignment' },
      description:
        'Specify the alignment of your captions. If no explicit x_position is provided, setting alignment to centered will placethe captions at the bottom center of the output. Similarly, setting a left alignment willalign captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    ApplyFontColor: DvbSubtitleApplyFontColorSchema.exactOptional().openapi({
      xml: { name: 'applyFontColor' },
      description:
        'Ignore this setting unless Style Passthrough (StylePassthrough) is set to Enabled and Font color (FontColor) set to Black, Yellow, Red, Green, Blue, or Hex. Use Apply font color (ApplyFontColor) for additional font color controls. When you choose White text only (WHITE_TEXT_ONLY), or leave blank, your font color setting only applies to white text in your input captions. For example, if your font color setting is Yellow, and your input captions have red and white text, your output captions will have red and yellow text. When you choose ALL_TEXT, your font color setting applies to all of your output captions text.',
    }),
    BackgroundColor: DvbSubtitleBackgroundColorSchema.exactOptional().openapi({
      xml: { name: 'backgroundColor' },
      description:
        'Specify the color of the rectangle behind the captions. Leave background color (BackgroundColor) blank and set Style passthrough (StylePassthrough) to enabled to use the background color data from your input captions, if present.',
    }),
    BackgroundOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'backgroundOpacity' },
      description:
        'Specify the opacity of the background rectangle. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to enabled, leave blank to pass through the background style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all backgrounds from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    DdsHandling: DvbddsHandlingSchema.exactOptional().openapi({
      xml: { name: 'ddsHandling' },
      description:
        "Specify how MediaConvert handles the display definition segment (DDS). To exclude the DDS from this set of captions: Keep the default, None. To include the DDS: Choose Specified. When you do, also specify the offset coordinates of the display window with DDS x-coordinate and DDS y-coordinate. To include the DDS, but not include display window data: Choose No display window. When you do, you can write position metadata to the page composition segment (PCS) with DDS x-coordinate and DDS y-coordinate. For video resolutions with a height of 576 pixels or less, MediaConvert doesn't include the DDS, regardless of the value you choose for DDS handling. All burn-in and DVB-Sub font settings must match.",
    }),
    DdsXCoordinate: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'ddsXCoordinate' },
      description:
        'Use this setting, along with DDS y-coordinate (ddsYCoordinate), to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the left side of the frame and the left side of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment (PCS). All burn-in and DVB-Sub font settings must match.',
    }),
    DdsYCoordinate: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'ddsYCoordinate' },
      description:
        'Use this setting, along with DDS x-coordinate (ddsXCoordinate), to specify the upper left corner of the display definition segment (DDS) display window. With this setting, specify the distance, in pixels, between the top of the frame and the top of the DDS display window. Keep the default value, 0, to have MediaConvert automatically choose this offset. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). MediaConvert uses these values to determine whether to write page position data to the DDS or to the page composition segment (PCS). All burn-in and DVB-Sub font settings must match.',
    }),
    FallbackFont: DvbSubSubtitleFallbackFontSchema.exactOptional().openapi({
      xml: { name: 'fallbackFont' },
      description:
        "Specify the font that you want the service to use for your burn in captions when your input captions specify a font that MediaConvert doesn't support. When you set Fallback font (FallbackFont) to best match (BEST_MATCH), or leave blank, MediaConvert uses a supported font that most closely matches the font that your input captions specify. When there are multiple unsupported fonts in your input captions, MediaConvert matches each font with the supported font that matches best. When you explicitly choose a replacement font, MediaConvert uses that font to replace all unsupported fonts from your input.",
    }),
    FontColor: DvbSubtitleFontColorSchema.exactOptional().openapi({
      xml: { name: 'fontColor' },
      description:
        'Specify the color of the captions text. Leave Font color (FontColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    FontOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'fontOpacity' },
      description:
        'Specify the opacity of the burned-in captions. 255 is opaque; 0 is transparent.\nWithin your job settings, all of your DVB-Sub settings must be identical.',
    }),
    FontResolution: IntegerMin96Max600Schema.exactOptional().openapi({
      xml: { name: 'fontResolution' },
      description:
        'Specify the Font resolution (FontResolution) in DPI (dots per inch).\nWithin your job settings, all of your DVB-Sub settings must be identical.',
    }),
    FontScript: FontScriptSchema.exactOptional().openapi({
      xml: { name: 'fontScript' },
      description:
        'Set Font script (FontScript) to Automatically determined (AUTOMATIC), or leave blank, to automatically determine the font script in your input captions. Otherwise, set to Simplified Chinese (HANS) or Traditional Chinese (HANT) if your input font script uses Simplified or Traditional Chinese. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    FontSize: IntegerMin0Max96Schema.exactOptional().openapi({
      xml: { name: 'fontSize' },
      description:
        'Specify the Font size (FontSize) in pixels. Must be a positive integer. Set to 0, or leave blank, for automatic font size. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    Height: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description:
        'Specify the height, in pixels, of this set of DVB-Sub captions. The default value is 576 pixels. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). All burn-in and DVB-Sub font settings must match.',
    }),
    HexFontColor: StringMin6Max8Pattern09aFAF609aFAF2Schema.exactOptional().openapi({
      xml: { name: 'hexFontColor' },
      description:
        'Ignore this setting unless your Font color is set to Hex. Enter either six or eight hexidecimal digits, representing red, green, and blue, with two optional extra digits for alpha. For example a value of 1122AABB is a red value of 0x11, a green value of 0x22, a blue value of 0xAA, and an alpha value of 0xBB.',
    }),
    OutlineColor: DvbSubtitleOutlineColorSchema.exactOptional().openapi({
      xml: { name: 'outlineColor' },
      description:
        'Specify font outline color. Leave Outline color (OutlineColor) blank and set Style passthrough (StylePassthrough) to enabled to use the font outline color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    OutlineSize: IntegerMin0Max10Schema.exactOptional().openapi({
      xml: { name: 'outlineSize' },
      description:
        'Specify the Outline size (OutlineSize) of the caption text, in pixels. Leave Outline size blank and set Style passthrough (StylePassthrough) to enabled to use the outline size data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    ShadowColor: DvbSubtitleShadowColorSchema.exactOptional().openapi({
      xml: { name: 'shadowColor' },
      description:
        'Specify the color of the shadow cast by the captions. Leave Shadow color (ShadowColor) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow color data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    ShadowOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'shadowOpacity' },
      description:
        'Specify the opacity of the shadow. Enter a value from 0 to 255, where 0 is transparent and 255 is opaque. If Style passthrough (StylePassthrough) is set to Enabled, leave Shadow opacity (ShadowOpacity) blank to pass through the shadow style information in your input captions to your output captions. If Style passthrough is set to disabled, leave blank to use a value of 0 and remove all shadows from your output captions. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    ShadowXOffset: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'shadowXOffset' },
      description:
        'Specify the horizontal offset of the shadow, relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    ShadowYOffset: IntegerMinNegative2147483648Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'shadowYOffset' },
      description:
        'Specify the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. Leave Shadow y-offset (ShadowYOffset) blank and set Style passthrough (StylePassthrough) to enabled to use the shadow y-offset data from your input captions, if present. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    StylePassthrough: DvbSubtitleStylePassthroughSchema.exactOptional().openapi({
      xml: { name: 'stylePassthrough' },
      description:
        'Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use default settings: white text with black outlining, bottom-center positioning, and automatic sizing. Whether you set Style passthrough to enabled or not, you can also choose to manually override any of the individual style and position settings.',
    }),
    SubtitlingType: DvbSubtitlingTypeSchema.exactOptional().openapi({
      xml: { name: 'subtitlingType' },
      description:
        'Specify whether your DVB subtitles are standard or for hearing impaired. Choose hearing impaired if your subtitles include audio descriptions and dialogue. Choose standard if your subtitles include only dialogue.',
    }),
    TeletextSpacing: DvbSubtitleTeletextSpacingSchema.exactOptional().openapi({
      xml: { name: 'teletextSpacing' },
      description:
        'Specify whether the Text spacing (TeletextSpacing) in your captions is set by the captions grid, or varies depending on letter width. Choose fixed grid (FIXED_GRID) to conform to the spacing specified in the captions file more accurately. Choose proportional (PROPORTIONAL) to make the text easier to read for closed captions. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    Width: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description:
        'Specify the width, in pixels, of this set of DVB-Sub captions. The default value is 720 pixels. Related setting: When you use this setting, you must set DDS handling (ddsHandling) to a value other than None (NONE). All burn-in and DVB-Sub font settings must match.',
    }),
    XPosition: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'xPosition' },
      description:
        'Specify the horizontal position (XPosition) of the captions, relative to the left side of the outputin pixels. A value of 10 would result in the captions starting 10 pixels from the left ofthe output. If no explicit x_position is provided, the horizontal caption position will bedetermined by the alignment parameter. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
    YPosition: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'yPosition' },
      description:
        'Specify the vertical position (YPosition) of the captions, relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. Within your job settings, all of your DVB-Sub settings must be identical.',
    }),
  })
  .openapi({
    description:
      'Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to DVB_SUB.',
    required: [],
  })
  .openapi('DvbSubDestinationSettings')

const IntegerMin1Max6Schema = z.int().min(1).max(6).openapi('IntegerMin1Max6')

const EmbeddedDestinationSettingsSchema = z
  .object({
    Destination608ChannelNumber: IntegerMin1Max4Schema.exactOptional().openapi({
      xml: { name: 'destination608ChannelNumber' },
      description:
        "Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.",
    }),
    Destination708ServiceNumber: IntegerMin1Max6Schema.exactOptional().openapi({
      xml: { name: 'destination708ServiceNumber' },
      description:
        "Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert (Convert608To708) to Upconvert (UPCONVERT) in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number (destination608ChannelNumber) for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.",
    }),
  })
  .openapi({
    description:
      'Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to EMBEDDED, EMBEDDED_PLUS_SCTE20, or SCTE20_PLUS_EMBEDDED.',
    required: [],
  })
  .openapi('EmbeddedDestinationSettings')

const ImscAccessibilitySubsSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Set Accessibility subtitles to Enabled if the ISMC or WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing. When you enable this feature, MediaConvert adds the following attributes under EXT-X-MEDIA in the HLS or CMAF manifest for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". Keep the default value, Disabled, if the captions track is not intended to provide such accessibility. MediaConvert will not add the above attributes.',
  })
  .openapi('ImscAccessibilitySubs')

const ImscStylePassthroughSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.',
  })
  .openapi('ImscStylePassthrough')

const ImscDestinationSettingsSchema = z
  .object({
    Accessibility: ImscAccessibilitySubsSchema.exactOptional().openapi({
      xml: { name: 'accessibility' },
      description:
        'Set Accessibility subtitles to Enabled if the ISMC or WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing. When you enable this feature, MediaConvert adds the following attributes under EXT-X-MEDIA in the HLS or CMAF manifest for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". Keep the default value, Disabled, if the captions track is not intended to provide such accessibility. MediaConvert will not add the above attributes.',
    }),
    StylePassthrough: ImscStylePassthroughSchema.exactOptional().openapi({
      xml: { name: 'stylePassthrough' },
      description:
        'Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.',
    }),
  })
  .openapi({
    description:
      'Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to IMSC.',
    required: [],
  })
  .openapi('ImscDestinationSettings')

const SccDestinationFramerateSchema = z
  .enum([
    'FRAMERATE_23_97',
    'FRAMERATE_24',
    'FRAMERATE_25',
    'FRAMERATE_29_97_DROPFRAME',
    'FRAMERATE_29_97_NON_DROPFRAME',
  ])
  .openapi({
    description:
      'Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).',
  })
  .openapi('SccDestinationFramerate')

const SccDestinationSettingsSchema = z
  .object({
    Framerate: SccDestinationFramerateSchema.exactOptional().openapi({
      xml: { name: 'framerate' },
      description:
        'Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).',
    }),
  })
  .openapi({
    description:
      'Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SCC.',
    required: [],
  })
  .openapi('SccDestinationSettings')

const SrtStylePassthroughSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use simplified output captions.',
  })
  .openapi('SrtStylePassthrough')

const SrtDestinationSettingsSchema = z
  .object({
    StylePassthrough: SrtStylePassthroughSchema.exactOptional().openapi({
      xml: { name: 'stylePassthrough' },
      description:
        'Set Style passthrough (StylePassthrough) to ENABLED to use the available style, color, and position information from your input captions. MediaConvert uses default settings for any missing style and position information in your input captions. Set Style passthrough to DISABLED, or leave blank, to ignore the style and position information from your input captions and use simplified output captions.',
    }),
  })
  .openapi({
    description:
      'Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SRT.',
    required: [],
  })
  .openapi('SrtDestinationSettings')

const TeletextPageTypeSchema = z
  .enum([
    'PAGE_TYPE_INITIAL',
    'PAGE_TYPE_SUBTITLE',
    'PAGE_TYPE_ADDL_INFO',
    'PAGE_TYPE_PROGRAM_SCHEDULE',
    'PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE',
  ])
  .openapi({ description: 'A page type as defined in the standard ETSI EN 300 468, Table 94' })
  .openapi('TeletextPageType')

const ListOfTeletextPageTypeSchema = z
  .array(TeletextPageTypeSchema)
  .openapi('ListOfTeletextPageType')

const TeletextDestinationSettingsSchema = z
  .object({
    PageNumber: StringMin3Max3Pattern1809aFAF09aEAESchema.exactOptional().openapi({
      xml: { name: 'pageNumber' },
      description:
        'Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.',
    }),
    PageTypes: ListOfTeletextPageTypeSchema.exactOptional().openapi({
      xml: { name: 'pageTypes' },
      description:
        "Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle (PAGE_TYPE_SUBTITLE). If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.",
    }),
  })
  .openapi({
    description:
      'Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TELETEXT.',
    required: [],
  })
  .openapi('TeletextDestinationSettings')

const TtmlStylePassthroughSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'Pass through style and position information from a TTML-like input source (TTML, IMSC, SMPTE-TT) to the TTML output.',
  })
  .openapi('TtmlStylePassthrough')

const TtmlDestinationSettingsSchema = z
  .object({
    StylePassthrough: TtmlStylePassthroughSchema.exactOptional().openapi({
      xml: { name: 'stylePassthrough' },
      description:
        'Pass through style and position information from a TTML-like input source (TTML, IMSC, SMPTE-TT) to the TTML output.',
    }),
  })
  .openapi({
    description:
      'Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TTML.',
    required: [],
  })
  .openapi('TtmlDestinationSettings')

const WebvttAccessibilitySubsSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Set Accessibility subtitles to Enabled if the ISMC or WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing. When you enable this feature, MediaConvert adds the following attributes under EXT-X-MEDIA in the HLS or CMAF manifest for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". Keep the default value, Disabled, if the captions track is not intended to provide such accessibility. MediaConvert will not add the above attributes.',
  })
  .openapi('WebvttAccessibilitySubs')

const WebvttStylePassthroughSchema = z
  .enum(['ENABLED', 'DISABLED', 'STRICT'])
  .openapi({
    description:
      'To use the available style, color, and position information from your input captions: Set Style passthrough (stylePassthrough) to Enabled (ENABLED). MediaConvert uses default settings when style and position information is missing from your input captions. To recreate the input captions exactly: Set Style passthrough to Strict (STRICT). MediaConvert automatically applies timing adjustments, including adjustments for frame rate conversion, ad avails, and input clipping. Your input captions format must be WebVTT. To ignore the style and position information from your input captions and use simplified output captions: Set Style passthrough to Disabled (DISABLED), or leave blank.',
  })
  .openapi('WebvttStylePassthrough')

const WebvttDestinationSettingsSchema = z
  .object({
    Accessibility: WebvttAccessibilitySubsSchema.exactOptional().openapi({
      xml: { name: 'accessibility' },
      description:
        'Set Accessibility subtitles to Enabled if the ISMC or WebVTT captions track is intended to provide accessibility for people who are deaf or hard of hearing. When you enable this feature, MediaConvert adds the following attributes under EXT-X-MEDIA in the HLS or CMAF manifest for this track: CHARACTERISTICS="public.accessibility.describes-spoken-dialog,public.accessibility.describes-music-and-sound" and AUTOSELECT="YES". Keep the default value, Disabled, if the captions track is not intended to provide such accessibility. MediaConvert will not add the above attributes.',
    }),
    StylePassthrough: WebvttStylePassthroughSchema.exactOptional().openapi({
      xml: { name: 'stylePassthrough' },
      description:
        'To use the available style, color, and position information from your input captions: Set Style passthrough (stylePassthrough) to Enabled (ENABLED). MediaConvert uses default settings when style and position information is missing from your input captions. To recreate the input captions exactly: Set Style passthrough to Strict (STRICT). MediaConvert automatically applies timing adjustments, including adjustments for frame rate conversion, ad avails, and input clipping. Your input captions format must be WebVTT. To ignore the style and position information from your input captions and use simplified output captions: Set Style passthrough to Disabled (DISABLED), or leave blank.',
    }),
  })
  .openapi({
    description:
      'Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to WebVTT.',
    required: [],
  })
  .openapi('WebvttDestinationSettings')

const CaptionDestinationSettingsSchema = z
  .object({
    BurninDestinationSettings: BurninDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'burninDestinationSettings' },
      description:
        'Burn-in is a captions delivery method, rather than a captions format. Burn-in writes the captions directly on your video frames, replacing pixels of video content with the captions. Set up burn-in captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/burn-in-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to BURN_IN.',
    }),
    DestinationType: CaptionDestinationTypeSchema.exactOptional().openapi({
      xml: { name: 'destinationType' },
      description:
        'Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Note that your choice of video output container constrains your choice of output captions format. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/captions-support-tables.html. If you are using SCTE-20 and you want to create an output that complies with the SCTE-43 spec, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED). To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).',
    }),
    DvbSubDestinationSettings: DvbSubDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbSubDestinationSettings' },
      description:
        'Settings related to DVB-Sub captions. Set up DVB-Sub captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/dvb-sub-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to DVB_SUB.',
    }),
    EmbeddedDestinationSettings: EmbeddedDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'embeddedDestinationSettings' },
      description:
        'Settings related to CEA/EIA-608 and CEA/EIA-708 (also called embedded or ancillary) captions. Set up embedded captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/embedded-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to EMBEDDED, EMBEDDED_PLUS_SCTE20, or SCTE20_PLUS_EMBEDDED.',
    }),
    ImscDestinationSettings: ImscDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'imscDestinationSettings' },
      description:
        'Settings related to IMSC captions. IMSC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to IMSC.',
    }),
    SccDestinationSettings: SccDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'sccDestinationSettings' },
      description:
        'Settings related to SCC captions. SCC is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/scc-srt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SCC.',
    }),
    SrtDestinationSettings: SrtDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'srtDestinationSettings' },
      description:
        'Settings related to SRT captions. SRT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to SRT.',
    }),
    TeletextDestinationSettings: TeletextDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'teletextDestinationSettings' },
      description:
        'Settings related to teletext captions. Set up teletext captions in the same output as your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/teletext-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TELETEXT.',
    }),
    TtmlDestinationSettings: TtmlDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'ttmlDestinationSettings' },
      description:
        'Settings related to TTML captions. TTML is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to TTML.',
    }),
    WebvttDestinationSettings: WebvttDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'webvttDestinationSettings' },
      description:
        'Settings related to WebVTT captions. WebVTT is a sidecar format that holds captions in a file that is separate from the video container. Set up sidecar captions in the same output group, but different output from your video. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/ttml-and-webvtt-output-captions.html. When you work directly in your JSON job specification, include this object and any required children when you set destinationType to WebVTT.',
    }),
  })
  .openapi({
    description:
      'Settings related to one captions tab on the MediaConvert console. In your job JSON, an instance of captions DestinationSettings is equivalent to one captions tab in the console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.',
    required: [],
  })
  .openapi('CaptionDestinationSettings')

const CaptionDescriptionSchema = z
  .object({
    CaptionSelectorName: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'captionSelectorName' },
      description:
        'Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector <N>", which denotes that the Nth Caption Selector will be used from each input.',
    }),
    CustomLanguageCode: StringPatternAZaZ23AZaZSchema.exactOptional().openapi({
      xml: { name: 'customLanguageCode' },
      description:
        'Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.',
    }),
    DestinationSettings: CaptionDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings related to one captions tab on the MediaConvert console. In your job JSON, an instance of captions DestinationSettings is equivalent to one captions tab in the console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.',
    }),
    LanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        'Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.',
    }),
    LanguageDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'languageDescription' },
      description:
        'Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer\'s player device. For outputs in other output groups, the service ignores this setting.',
    }),
  })
  .openapi({
    description:
      'This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.',
    required: [],
  })
  .openapi('CaptionDescription')

const ListOfCaptionDescriptionSchema = z
  .array(CaptionDescriptionSchema)
  .openapi('ListOfCaptionDescription')

const CmfcAudioDurationSchema = z
  .enum(['DEFAULT_CODEC_DURATION', 'MATCH_VIDEO_DURATION'])
  .openapi({
    description:
      'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
  })
  .openapi('CmfcAudioDuration')

const CmfcAudioTrackTypeSchema = z
  .enum([
    'ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT',
    'ALTERNATE_AUDIO_AUTO_SELECT',
    'ALTERNATE_AUDIO_NOT_AUTO_SELECT',
  ])
  .openapi({
    description:
      "Use this setting to control the values that MediaConvert puts in your HLS parent playlist to control how the client player selects which audio track to play. The other options for this setting determine the values that MediaConvert writes for the DEFAULT and AUTOSELECT attributes of the EXT-X-MEDIA entry for the audio variant. For more information about these attributes, see the Apple documentation article https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/adding_alternate_media_to_a_playlist. Choose Alternate audio, auto select, default (ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT) to set DEFAULT=YES and AUTOSELECT=YES. Choose this value for only one variant in your output group. Choose Alternate audio, auto select, not default (ALTERNATE_AUDIO_AUTO_SELECT) to set DEFAULT=NO and AUTOSELECT=YES. Choose Alternate Audio, Not Auto Select to set DEFAULT=NO and AUTOSELECT=NO. When you don't specify a value for this setting, MediaConvert defaults to Alternate audio, auto select, default. When there is more than one variant in your output group, you must explicitly choose a value for this setting.",
  })
  .openapi('CmfcAudioTrackType')

const CmfcDescriptiveVideoServiceFlagSchema = z
  .enum(['DONT_FLAG', 'FLAG'])
  .openapi({
    description:
      'Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don\'t flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.',
  })
  .openapi('CmfcDescriptiveVideoServiceFlag')

const CmfcIFrameOnlyManifestSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      "Choose Include (INCLUDE) to have MediaConvert generate an HLS child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).",
  })
  .openapi('CmfcIFrameOnlyManifest')

const CmfcKlvMetadataSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      'To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.',
  })
  .openapi('CmfcKlvMetadata')

const CmfcManifestMetadataSignalingSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata (TimedMetadata) to Passthrough.',
  })
  .openapi('CmfcManifestMetadataSignaling')

const CmfcScte35EsamSchema = z
  .enum(['INSERT', 'NONE'])
  .openapi({
    description:
      'Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).',
  })
  .openapi('CmfcScte35Esam')

const CmfcScte35SourceSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      "Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.",
  })
  .openapi('CmfcScte35Source')

const CmfcTimedMetadataSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      'To include ID3 metadata in this output: Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). Specify this ID3 metadata in Custom ID3 metadata inserter (timedMetadataInsertion). MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None (NONE) or leave blank.',
  })
  .openapi('CmfcTimedMetadata')

const CmfcTimedMetadataBoxVersionSchema = z
  .enum(['VERSION_0', 'VERSION_1'])
  .openapi({
    description:
      'Specify the event message box (eMSG) version for ID3 timed metadata in your output.\nFor more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.\nLeave blank to use the default value Version 0.\nWhen you specify Version 1, you must also set ID3 metadata (timedMetadata) to Passthrough.',
  })
  .openapi('CmfcTimedMetadataBoxVersion')

const StringMax1000Schema = z.string().max(1000).openapi('StringMax1000')

const CmfcSettingsSchema = z
  .object({
    AudioDuration: CmfcAudioDurationSchema.exactOptional().openapi({
      xml: { name: 'audioDuration' },
      description:
        'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
    }),
    AudioGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'audioGroupId' },
      description:
        'Specify the audio rendition group for this audio rendition. Specify up to one value for each audio output in your output group. This value appears in your HLS parent manifest in the EXT-X-MEDIA tag of TYPE=AUDIO, as the value for the GROUP-ID attribute. For example, if you specify "audio_aac_1" for Audio group ID, it appears in your manifest like this: #EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio_aac_1". Related setting: To associate the rendition group that this audio track belongs to with a video rendition, include the same value that you provide here for that video output\'s setting Audio rendition sets (audioRenditionSets).',
    }),
    AudioRenditionSets: StringSchema.exactOptional().openapi({
      xml: { name: 'audioRenditionSets' },
      description:
        'List the audio rendition groups that you want included with this video rendition. Use a comma-separated list. For example, say you want to include the audio rendition groups that have the audio group IDs "audio_aac_1" and "audio_dolby". Then you would specify this value: "audio_aac_1,audio_dolby". Related setting: The rendition groups that you include in your comma-separated list should all match values that you specify in the setting Audio group ID (AudioGroupId) for audio renditions in the same output group as this video rendition. Default behavior: If you don\'t specify anything here and for Audio group ID, MediaConvert puts each audio variant in its own audio rendition group and associates it with every video variant. Each value in your list appears in your HLS parent manifest in the EXT-X-STREAM-INF tag as the value for the AUDIO attribute. To continue the previous example, say that the file name for the child manifest for your video rendition is "amazing_video_1.m3u8". Then, in your parent manifest, each value will appear on separate lines, like this: #EXT-X-STREAM-INF:AUDIO="audio_aac_1"... amazing_video_1.m3u8 #EXT-X-STREAM-INF:AUDIO="audio_dolby"... amazing_video_1.m3u8',
    }),
    AudioTrackType: CmfcAudioTrackTypeSchema.exactOptional().openapi({
      xml: { name: 'audioTrackType' },
      description:
        "Use this setting to control the values that MediaConvert puts in your HLS parent playlist to control how the client player selects which audio track to play. The other options for this setting determine the values that MediaConvert writes for the DEFAULT and AUTOSELECT attributes of the EXT-X-MEDIA entry for the audio variant. For more information about these attributes, see the Apple documentation article https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/adding_alternate_media_to_a_playlist. Choose Alternate audio, auto select, default (ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT) to set DEFAULT=YES and AUTOSELECT=YES. Choose this value for only one variant in your output group. Choose Alternate audio, auto select, not default (ALTERNATE_AUDIO_AUTO_SELECT) to set DEFAULT=NO and AUTOSELECT=YES. Choose Alternate Audio, Not Auto Select to set DEFAULT=NO and AUTOSELECT=NO. When you don't specify a value for this setting, MediaConvert defaults to Alternate audio, auto select, default. When there is more than one variant in your output group, you must explicitly choose a value for this setting.",
    }),
    DescriptiveVideoServiceFlag: CmfcDescriptiveVideoServiceFlagSchema.exactOptional().openapi({
      xml: { name: 'descriptiveVideoServiceFlag' },
      description:
        'Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don\'t flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.',
    }),
    IFrameOnlyManifest: CmfcIFrameOnlyManifestSchema.exactOptional().openapi({
      xml: { name: 'iFrameOnlyManifest' },
      description:
        "Choose Include (INCLUDE) to have MediaConvert generate an HLS child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).",
    }),
    KlvMetadata: CmfcKlvMetadataSchema.exactOptional().openapi({
      xml: { name: 'klvMetadata' },
      description:
        'To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.',
    }),
    ManifestMetadataSignaling: CmfcManifestMetadataSignalingSchema.exactOptional().openapi({
      xml: { name: 'manifestMetadataSignaling' },
      description:
        'To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata (TimedMetadata) to Passthrough.',
    }),
    Scte35Esam: CmfcScte35EsamSchema.exactOptional().openapi({
      xml: { name: 'scte35Esam' },
      description:
        'Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).',
    }),
    Scte35Source: CmfcScte35SourceSchema.exactOptional().openapi({
      xml: { name: 'scte35Source' },
      description:
        "Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.",
    }),
    TimedMetadata: CmfcTimedMetadataSchema.exactOptional().openapi({
      xml: { name: 'timedMetadata' },
      description:
        'To include ID3 metadata in this output: Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). Specify this ID3 metadata in Custom ID3 metadata inserter (timedMetadataInsertion). MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None (NONE) or leave blank.',
    }),
    TimedMetadataBoxVersion: CmfcTimedMetadataBoxVersionSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataBoxVersion' },
      description:
        'Specify the event message box (eMSG) version for ID3 timed metadata in your output.\nFor more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.\nLeave blank to use the default value Version 0.\nWhen you specify Version 1, you must also set ID3 metadata (timedMetadata) to Passthrough.',
    }),
    TimedMetadataSchemeIdUri: StringMax1000Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataSchemeIdUri' },
      description:
        'Specify the event message box (eMSG) scheme ID URI (scheme_id_uri) for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. Leave blank to use the default value: https://aomedia.org/emsg/ID3 When you specify a value for ID3 metadata scheme ID URI, you must also set ID3 metadata (timedMetadata) to Passthrough.',
    }),
    TimedMetadataValue: StringMax1000Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataValue' },
      description:
        'Specify the event message box (eMSG) value for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. When you specify a value for ID3 Metadata Value, you must also set ID3 metadata (timedMetadata) to Passthrough.',
    }),
  })
  .openapi({
    description:
      'These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.',
    required: [],
  })
  .openapi('CmfcSettings')

const ContainerTypeSchema = z
  .enum(['F4V', 'ISMV', 'M2TS', 'M3U8', 'CMFC', 'MOV', 'MP4', 'MPD', 'MXF', 'WEBM', 'RAW'])
  .openapi({
    description:
      'Container for this output. Some containers require a container settings object. If not specified, the default object will be created.',
  })
  .openapi('ContainerType')

const F4vMoovPlacementSchema = z
  .enum(['PROGRESSIVE_DOWNLOAD', 'NORMAL'])
  .openapi({
    description:
      'If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.',
  })
  .openapi('F4vMoovPlacement')

const F4vSettingsSchema = z
  .object({
    MoovPlacement: F4vMoovPlacementSchema.exactOptional().openapi({
      xml: { name: 'moovPlacement' },
      description:
        'If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.',
    }),
  })
  .openapi({ description: 'Settings for F4v container', required: [] })
  .openapi('F4vSettings')

const M2tsAudioBufferModelSchema = z
  .enum(['DVB', 'ATSC'])
  .openapi({
    description: 'Selects between the DVB and ATSC buffer models for Dolby Digital audio.',
  })
  .openapi('M2tsAudioBufferModel')

const M2tsAudioDurationSchema = z
  .enum(['DEFAULT_CODEC_DURATION', 'MATCH_VIDEO_DURATION'])
  .openapi({
    description:
      'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
  })
  .openapi('M2tsAudioDuration')

const IntegerMin32Max8182Schema = z.int().min(32).max(8182).openapi('IntegerMin32Max8182')

const ListOfIntegerMin32Max8182Schema = z
  .array(IntegerMin32Max8182Schema)
  .openapi('ListOfIntegerMin32Max8182')

const M2tsBufferModelSchema = z
  .enum(['MULTIPLEX', 'NONE'])
  .openapi({
    description:
      'Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.',
  })
  .openapi('M2tsBufferModel')

const M2tsDataPtsControlSchema = z
  .enum(['AUTO', 'ALIGN_TO_VIDEO'])
  .openapi({
    description:
      'If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value (AUTO) to allow all PTS values.',
  })
  .openapi('M2tsDataPtsControl')

const StringMin1Max256Schema = z.string().min(1).max(256).openapi('StringMin1Max256')

const IntegerMin25Max10000Schema = z.int().min(25).max(10000).openapi('IntegerMin25Max10000')

const DvbNitSettingsSchema = z
  .object({
    NetworkId: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'networkId' },
      description: 'The numeric value placed in the Network Information Table (NIT).',
    }),
    NetworkName: StringMin1Max256Schema.exactOptional().openapi({
      xml: { name: 'networkName' },
      description:
        'The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters.',
    }),
    NitInterval: IntegerMin25Max10000Schema.exactOptional().openapi({
      xml: { name: 'nitInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
  })
  .openapi({
    description:
      'Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.',
    required: [],
  })
  .openapi('DvbNitSettings')

const OutputSdtSchema = z
  .enum(['SDT_FOLLOW', 'SDT_FOLLOW_IF_PRESENT', 'SDT_MANUAL', 'SDT_NONE'])
  .openapi({
    description:
      'Selects method of inserting SDT information into output stream. "Follow input SDT" copies SDT information from input stream to output stream. "Follow input SDT if present" copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT Manually" means user will enter the SDT information. "No SDT" means output stream will not contain SDT information.',
  })
  .openapi('OutputSdt')

const IntegerMin25Max2000Schema = z.int().min(25).max(2000).openapi('IntegerMin25Max2000')

const DvbSdtSettingsSchema = z
  .object({
    OutputSdt: OutputSdtSchema.exactOptional().openapi({
      xml: { name: 'outputSdt' },
      description:
        'Selects method of inserting SDT information into output stream. "Follow input SDT" copies SDT information from input stream to output stream. "Follow input SDT if present" copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT Manually" means user will enter the SDT information. "No SDT" means output stream will not contain SDT information.',
    }),
    SdtInterval: IntegerMin25Max2000Schema.exactOptional().openapi({
      xml: { name: 'sdtInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
    ServiceName: StringMin1Max256Schema.exactOptional().openapi({
      xml: { name: 'serviceName' },
      description:
        'The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.',
    }),
    ServiceProviderName: StringMin1Max256Schema.exactOptional().openapi({
      xml: { name: 'serviceProviderName' },
      description:
        'The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.',
    }),
  })
  .openapi({
    description:
      'Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.',
    required: [],
  })
  .openapi('DvbSdtSettings')

const IntegerMin1000Max30000Schema = z.int().min(1000).max(30000).openapi('IntegerMin1000Max30000')

const DvbTdtSettingsSchema = z
  .object({
    TdtInterval: IntegerMin1000Max30000Schema.exactOptional().openapi({
      xml: { name: 'tdtInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
  })
  .openapi({
    description:
      'Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.',
    required: [],
  })
  .openapi('DvbTdtSettings')

const M2tsEbpAudioIntervalSchema = z
  .enum(['VIDEO_AND_FIXED_INTERVALS', 'VIDEO_INTERVAL'])
  .openapi({
    description:
      'When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).',
  })
  .openapi('M2tsEbpAudioInterval')

const M2tsEbpPlacementSchema = z
  .enum(['VIDEO_AND_AUDIO_PIDS', 'VIDEO_PID'])
  .openapi({
    description:
      'Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).',
  })
  .openapi('M2tsEbpPlacement')

const M2tsEsRateInPesSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({ description: 'Controls whether to include the ES Rate field in the PES header.' })
  .openapi('M2tsEsRateInPes')

const M2tsForceTsVideoEbpOrderSchema = z
  .enum(['FORCE', 'DEFAULT'])
  .openapi({
    description:
      'Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE).',
  })
  .openapi('M2tsForceTsVideoEbpOrder')

const M2tsKlvMetadataSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      'To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and passes it through to the output transport stream. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.',
  })
  .openapi('M2tsKlvMetadata')

const IntegerMin0Max500Schema = z.int().min(0).max(500).openapi('IntegerMin0Max500')

const IntegerMin0Max10000Schema = z.int().min(0).max(10000).openapi('IntegerMin0Max10000')

const M2tsNielsenId3Schema = z
  .enum(['INSERT', 'NONE'])
  .openapi({
    description:
      'If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
  })
  .openapi('M2tsNielsenId3')

const IntegerMin0Max1000Schema = z.int().min(0).max(1000).openapi('IntegerMin0Max1000')

const M2tsPcrControlSchema = z
  .enum(['PCR_EVERY_PES_PACKET', 'CONFIGURED_PCR_PERIOD'])
  .openapi({
    description:
      'When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.',
  })
  .openapi('M2tsPcrControl')

const M2tsRateModeSchema = z
  .enum(['VBR', 'CBR'])
  .openapi({
    description:
      'When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.',
  })
  .openapi('M2tsRateMode')

const M2tsScte35EsamSchema = z
  .object({
    Scte35EsamPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'scte35EsamPid' },
      description:
        'Packet Identifier (PID) of the SCTE-35 stream in the transport stream generated by ESAM.',
    }),
  })
  .openapi({
    description:
      'Settings for SCTE-35 signals from ESAM. Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).',
    required: [],
  })
  .openapi('M2tsScte35Esam')

const M2tsScte35SourceSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      "For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam).",
  })
  .openapi('M2tsScte35Source')

const M2tsSegmentationMarkersSchema = z
  .enum(['NONE', 'RAI_SEGSTART', 'RAI_ADAPT', 'PSI_SEGSTART', 'EBP', 'EBP_LEGACY'])
  .openapi({
    description:
      'Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.',
  })
  .openapi('M2tsSegmentationMarkers')

const M2tsSegmentationStyleSchema = z
  .enum(['MAINTAIN_CADENCE', 'RESET_CADENCE'])
  .openapi({
    description:
      'The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.',
  })
  .openapi('M2tsSegmentationStyle')

const M2tsSettingsSchema = z
  .object({
    AudioBufferModel: M2tsAudioBufferModelSchema.exactOptional().openapi({
      xml: { name: 'audioBufferModel' },
      description: 'Selects between the DVB and ATSC buffer models for Dolby Digital audio.',
    }),
    AudioDuration: M2tsAudioDurationSchema.exactOptional().openapi({
      xml: { name: 'audioDuration' },
      description:
        'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
    }),
    AudioFramesPerPes: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'audioFramesPerPes' },
      description: 'The number of audio frames to insert for each PES packet.',
    }),
    AudioPids: ListOfIntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'audioPids' },
      description:
        'Specify the packet identifiers (PIDs) for any elementary audio streams you include in this output. Specify multiple PIDs as a JSON array. Default is the range 482-492.',
    }),
    Bitrate: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000.',
    }),
    BufferModel: M2tsBufferModelSchema.exactOptional().openapi({
      xml: { name: 'bufferModel' },
      description:
        'Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.',
    }),
    DataPTSControl: M2tsDataPtsControlSchema.exactOptional().openapi({
      xml: { name: 'dataPTSControl' },
      description:
        'If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value (AUTO) to allow all PTS values.',
    }),
    DvbNitSettings: DvbNitSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbNitSettings' },
      description:
        'Use these settings to insert a DVB Network Information Table (NIT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.',
    }),
    DvbSdtSettings: DvbSdtSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbSdtSettings' },
      description:
        'Use these settings to insert a DVB Service Description Table (SDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.',
    }),
    DvbSubPids: ListOfIntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'dvbSubPids' },
      description:
        'Specify the packet identifiers (PIDs) for DVB subtitle data included in this output. Specify multiple PIDs as a JSON array. Default is the range 460-479.',
    }),
    DvbTdtSettings: DvbTdtSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbTdtSettings' },
      description:
        'Use these settings to insert a DVB Time and Date Table (TDT) in the transport stream of this output. When you work directly in your JSON job specification, include this object only when your job has a transport stream output and the container settings contain the object M2tsSettings.',
    }),
    DvbTeletextPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'dvbTeletextPid' },
      description:
        'Specify the packet identifier (PID) for DVB teletext data you include in this output. Default is 499.',
    }),
    EbpAudioInterval: M2tsEbpAudioIntervalSchema.exactOptional().openapi({
      xml: { name: 'ebpAudioInterval' },
      description:
        'When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).',
    }),
    EbpPlacement: M2tsEbpPlacementSchema.exactOptional().openapi({
      xml: { name: 'ebpPlacement' },
      description:
        'Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).',
    }),
    EsRateInPes: M2tsEsRateInPesSchema.exactOptional().openapi({
      xml: { name: 'esRateInPes' },
      description: 'Controls whether to include the ES Rate field in the PES header.',
    }),
    ForceTsVideoEbpOrder: M2tsForceTsVideoEbpOrderSchema.exactOptional().openapi({
      xml: { name: 'forceTsVideoEbpOrder' },
      description:
        'Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE).',
    }),
    FragmentTime: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'fragmentTime' },
      description: 'The length, in seconds, of each fragment. Only used with EBP markers.',
    }),
    KlvMetadata: M2tsKlvMetadataSchema.exactOptional().openapi({
      xml: { name: 'klvMetadata' },
      description:
        'To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and passes it through to the output transport stream. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.',
    }),
    MaxPcrInterval: IntegerMin0Max500Schema.exactOptional().openapi({
      xml: { name: 'maxPcrInterval' },
      description:
        'Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.',
    }),
    MinEbpInterval: IntegerMin0Max10000Schema.exactOptional().openapi({
      xml: { name: 'minEbpInterval' },
      description:
        'When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.',
    }),
    NielsenId3: M2tsNielsenId3Schema.exactOptional().openapi({
      xml: { name: 'nielsenId3' },
      description:
        'If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
    }),
    NullPacketBitrate: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'nullPacketBitrate' },
      description:
        'Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.',
    }),
    PatInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'patInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
    PcrControl: M2tsPcrControlSchema.exactOptional().openapi({
      xml: { name: 'pcrControl' },
      description:
        'When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.',
    }),
    PcrPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'pcrPid' },
      description:
        'Specify the packet identifier (PID) for the program clock reference (PCR) in this output. If you do not specify a value, the service will use the value for Video PID (VideoPid).',
    }),
    PmtInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'pmtInterval' },
      description:
        'Specify the number of milliseconds between instances of the program map table (PMT) in the output transport stream.',
    }),
    PmtPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'pmtPid' },
      description:
        'Specify the packet identifier (PID) for the program map table (PMT) itself. Default is 480.',
    }),
    PrivateMetadataPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'privateMetadataPid' },
      description:
        'Specify the packet identifier (PID) of the private metadata stream. Default is 503.',
    }),
    ProgramNumber: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'programNumber' },
      description:
        'Use Program number (programNumber) to specify the program number used in the program map table (PMT) for this output. Default is 1. Program numbers and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.',
    }),
    RateMode: M2tsRateModeSchema.exactOptional().openapi({
      xml: { name: 'rateMode' },
      description:
        'When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.',
    }),
    Scte35Esam: M2tsScte35EsamSchema.exactOptional().openapi({
      xml: { name: 'scte35Esam' },
      description:
        'Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).',
    }),
    Scte35Pid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'scte35Pid' },
      description:
        'Specify the packet identifier (PID) of the SCTE-35 stream in the transport stream.',
    }),
    Scte35Source: M2tsScte35SourceSchema.exactOptional().openapi({
      xml: { name: 'scte35Source' },
      description:
        "For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam).",
    }),
    SegmentationMarkers: M2tsSegmentationMarkersSchema.exactOptional().openapi({
      xml: { name: 'segmentationMarkers' },
      description:
        'Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.',
    }),
    SegmentationStyle: M2tsSegmentationStyleSchema.exactOptional().openapi({
      xml: { name: 'segmentationStyle' },
      description:
        'The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.',
    }),
    SegmentationTime: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'segmentationTime' },
      description:
        'Specify the length, in seconds, of each segment. Required unless markers is set to _none_.',
    }),
    TimedMetadataPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataPid' },
      description: 'Packet Identifier (PID) of the ID3 metadata stream in the transport stream.',
    }),
    TransportStreamId: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'transportStreamId' },
      description:
        'Specify the ID for the transport stream itself in the program map table for this output. Transport stream IDs and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.',
    }),
    VideoPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'videoPid' },
      description:
        'Specify the packet identifier (PID) of the elementary video stream in the transport stream.',
    }),
  })
  .openapi({
    description:
      "MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.",
    required: [],
  })
  .openapi('M2tsSettings')

const M3u8AudioDurationSchema = z
  .enum(['DEFAULT_CODEC_DURATION', 'MATCH_VIDEO_DURATION'])
  .openapi({
    description:
      'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
  })
  .openapi('M3u8AudioDuration')

const M3u8DataPtsControlSchema = z
  .enum(['AUTO', 'ALIGN_TO_VIDEO'])
  .openapi({
    description:
      'If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value (AUTO) to allow all PTS values.',
  })
  .openapi('M3u8DataPtsControl')

const M3u8NielsenId3Schema = z
  .enum(['INSERT', 'NONE'])
  .openapi({
    description:
      'If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
  })
  .openapi('M3u8NielsenId3')

const M3u8PcrControlSchema = z
  .enum(['PCR_EVERY_PES_PACKET', 'CONFIGURED_PCR_PERIOD'])
  .openapi({
    description:
      'When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.',
  })
  .openapi('M3u8PcrControl')

const M3u8Scte35SourceSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      "For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).",
  })
  .openapi('M3u8Scte35Source')

const TimedMetadataSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      'Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH) to include ID3 metadata in this output. This includes ID3 metadata from the following features: ID3 timestamp period (timedMetadataId3Period), and Custom ID3 metadata inserter (timedMetadataInsertion). To exclude this ID3 metadata in this output: set ID3 metadata to None (NONE) or leave blank.',
  })
  .openapi('TimedMetadata')

const M3u8SettingsSchema = z
  .object({
    AudioDuration: M3u8AudioDurationSchema.exactOptional().openapi({
      xml: { name: 'audioDuration' },
      description:
        'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
    }),
    AudioFramesPerPes: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'audioFramesPerPes' },
      description: 'The number of audio frames to insert for each PES packet.',
    }),
    AudioPids: ListOfIntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'audioPids' },
      description:
        'Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.',
    }),
    DataPTSControl: M3u8DataPtsControlSchema.exactOptional().openapi({
      xml: { name: 'dataPTSControl' },
      description:
        'If you select ALIGN_TO_VIDEO, MediaConvert writes captions and data packets with Presentation Timestamp (PTS) values greater than or equal to the first video packet PTS (MediaConvert drops captions and data packets with lesser PTS values). Keep the default value (AUTO) to allow all PTS values.',
    }),
    MaxPcrInterval: IntegerMin0Max500Schema.exactOptional().openapi({
      xml: { name: 'maxPcrInterval' },
      description:
        'Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.',
    }),
    NielsenId3: M3u8NielsenId3Schema.exactOptional().openapi({
      xml: { name: 'nielsenId3' },
      description:
        'If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
    }),
    PatInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'patInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
    PcrControl: M3u8PcrControlSchema.exactOptional().openapi({
      xml: { name: 'pcrControl' },
      description:
        'When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.',
    }),
    PcrPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'pcrPid' },
      description:
        'Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.',
    }),
    PmtInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'pmtInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
    PmtPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'pmtPid' },
      description:
        'Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.',
    }),
    PrivateMetadataPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'privateMetadataPid' },
      description:
        'Packet Identifier (PID) of the private metadata stream in the transport stream.',
    }),
    ProgramNumber: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'programNumber' },
      description: 'The value of the program number field in the Program Map Table.',
    }),
    Scte35Pid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'scte35Pid' },
      description: 'Packet Identifier (PID) of the SCTE-35 stream in the transport stream.',
    }),
    Scte35Source: M3u8Scte35SourceSchema.exactOptional().openapi({
      xml: { name: 'scte35Source' },
      description:
        "For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).",
    }),
    TimedMetadata: TimedMetadataSchema.exactOptional().openapi({
      xml: { name: 'timedMetadata' },
      description:
        'Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH) to include ID3 metadata in this output. This includes ID3 metadata from the following features: ID3 timestamp period (timedMetadataId3Period), and Custom ID3 metadata inserter (timedMetadataInsertion). To exclude this ID3 metadata in this output: set ID3 metadata to None (NONE) or leave blank.',
    }),
    TimedMetadataPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataPid' },
      description: 'Packet Identifier (PID) of the ID3 metadata stream in the transport stream.',
    }),
    TransportStreamId: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'transportStreamId' },
      description: 'The value of the transport stream ID field in the Program Map Table.',
    }),
    VideoPid: IntegerMin32Max8182Schema.exactOptional().openapi({
      xml: { name: 'videoPid' },
      description:
        'Packet Identifier (PID) of the elementary video stream in the transport stream.',
    }),
  })
  .openapi({
    description:
      'These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.',
    required: [],
  })
  .openapi('M3u8Settings')

const MovClapAtomSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description: "When enabled, include 'clap' atom if appropriate for the video output settings.",
  })
  .openapi('MovClapAtom')

const MovCslgAtomSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      "When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.",
  })
  .openapi('MovCslgAtom')

const MovMpeg2FourCCControlSchema = z
  .enum(['XDCAM', 'MPEG'])
  .openapi({
    description:
      'When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.',
  })
  .openapi('MovMpeg2FourCCControl')

const MovPaddingControlSchema = z
  .enum(['OMNEON', 'NONE'])
  .openapi({
    description:
      "Unless you need Omneon compatibility: Keep the default value, None. To make this output compatible with Omneon: Choose Omneon. When you do, MediaConvert increases the length of the 'elst' edit list atom. Note that this might cause file rejections when a recipient of the output file doesn't expect this extra padding.",
  })
  .openapi('MovPaddingControl')

const MovReferenceSchema = z
  .enum(['SELF_CONTAINED', 'EXTERNAL'])
  .openapi({ description: 'Always keep the default value (SELF_CONTAINED) for this setting.' })
  .openapi('MovReference')

const MovSettingsSchema = z
  .object({
    ClapAtom: MovClapAtomSchema.exactOptional().openapi({
      xml: { name: 'clapAtom' },
      description:
        "When enabled, include 'clap' atom if appropriate for the video output settings.",
    }),
    CslgAtom: MovCslgAtomSchema.exactOptional().openapi({
      xml: { name: 'cslgAtom' },
      description:
        "When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.",
    }),
    Mpeg2FourCCControl: MovMpeg2FourCCControlSchema.exactOptional().openapi({
      xml: { name: 'mpeg2FourCCControl' },
      description:
        'When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.',
    }),
    PaddingControl: MovPaddingControlSchema.exactOptional().openapi({
      xml: { name: 'paddingControl' },
      description:
        "Unless you need Omneon compatibility: Keep the default value, None. To make this output compatible with Omneon: Choose Omneon. When you do, MediaConvert increases the length of the 'elst' edit list atom. Note that this might cause file rejections when a recipient of the output file doesn't expect this extra padding.",
    }),
    Reference: MovReferenceSchema.exactOptional().openapi({
      xml: { name: 'reference' },
      description: 'Always keep the default value (SELF_CONTAINED) for this setting.',
    }),
  })
  .openapi({
    description: 'These settings relate to your QuickTime MOV output container.',
    required: [],
  })
  .openapi('MovSettings')

const Mp4CslgAtomSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      "When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.",
  })
  .openapi('Mp4CslgAtom')

const IntegerMin0Max1Schema = z.int().min(0).max(1).openapi('IntegerMin0Max1')

const Mp4FreeSpaceBoxSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({ description: 'Inserts a free-space box immediately after the moov box.' })
  .openapi('Mp4FreeSpaceBox')

const Mp4MoovPlacementSchema = z
  .enum(['PROGRESSIVE_DOWNLOAD', 'NORMAL'])
  .openapi({
    description:
      'If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.',
  })
  .openapi('Mp4MoovPlacement')

const Mp4SettingsSchema = z
  .object({
    AudioDuration: CmfcAudioDurationSchema.exactOptional().openapi({
      xml: { name: 'audioDuration' },
      description:
        'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
    }),
    CslgAtom: Mp4CslgAtomSchema.exactOptional().openapi({
      xml: { name: 'cslgAtom' },
      description:
        "When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.",
    }),
    CttsVersion: IntegerMin0Max1Schema.exactOptional().openapi({
      xml: { name: 'cttsVersion' },
      description:
        'Ignore this setting unless compliance to the CTTS box version specification matters in your workflow. Specify a value of 1 to set your CTTS box version to 1 and make your output compliant with the specification. When you specify a value of 1, you must also set CSLG atom (cslgAtom) to the value INCLUDE. Keep the default value 0 to set your CTTS box version to 0. This can provide backward compatibility for some players and packagers.',
    }),
    FreeSpaceBox: Mp4FreeSpaceBoxSchema.exactOptional().openapi({
      xml: { name: 'freeSpaceBox' },
      description: 'Inserts a free-space box immediately after the moov box.',
    }),
    MoovPlacement: Mp4MoovPlacementSchema.exactOptional().openapi({
      xml: { name: 'moovPlacement' },
      description:
        'If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.',
    }),
    Mp4MajorBrand: StringSchema.exactOptional().openapi({
      xml: { name: 'mp4MajorBrand' },
      description:
        'Overrides the "Major Brand" field in the output file. Usually not necessary to specify.',
    }),
  })
  .openapi({
    description:
      'These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.',
    required: [],
  })
  .openapi('Mp4Settings')

const MpdAccessibilityCaptionHintsSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      'Optional. Choose Include (INCLUDE) to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn\'t generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude (EXCLUDE), to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/>',
  })
  .openapi('MpdAccessibilityCaptionHints')

const MpdAudioDurationSchema = z
  .enum(['DEFAULT_CODEC_DURATION', 'MATCH_VIDEO_DURATION'])
  .openapi({
    description:
      'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
  })
  .openapi('MpdAudioDuration')

const MpdCaptionContainerTypeSchema = z
  .enum(['RAW', 'FRAGMENTED_MP4'])
  .openapi({
    description:
      'Use this setting only in DASH output groups that include sidecar TTML or IMSC captions. You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.',
  })
  .openapi('MpdCaptionContainerType')

const MpdKlvMetadataSchema = z
  .enum(['NONE', 'PASSTHROUGH'])
  .openapi({
    description:
      'To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.',
  })
  .openapi('MpdKlvMetadata')

const MpdManifestMetadataSignalingSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata (TimedMetadata) to Passthrough.',
  })
  .openapi('MpdManifestMetadataSignaling')

const MpdScte35EsamSchema = z
  .enum(['INSERT', 'NONE'])
  .openapi({
    description:
      'Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).',
  })
  .openapi('MpdScte35Esam')

const MpdScte35SourceSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      "Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.",
  })
  .openapi('MpdScte35Source')

const MpdTimedMetadataSchema = z
  .enum(['PASSTHROUGH', 'NONE'])
  .openapi({
    description:
      'To include ID3 metadata in this output: Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). Specify this ID3 metadata in Custom ID3 metadata inserter (timedMetadataInsertion). MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None (NONE) or leave blank.',
  })
  .openapi('MpdTimedMetadata')

const MpdTimedMetadataBoxVersionSchema = z
  .enum(['VERSION_0', 'VERSION_1'])
  .openapi({
    description:
      'Specify the event message box (eMSG) version for ID3 timed metadata in your output.\nFor more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.\nLeave blank to use the default value Version 0.\nWhen you specify Version 1, you must also set ID3 metadata (timedMetadata) to Passthrough.',
  })
  .openapi('MpdTimedMetadataBoxVersion')

const MpdSettingsSchema = z
  .object({
    AccessibilityCaptionHints: MpdAccessibilityCaptionHintsSchema.exactOptional().openapi({
      xml: { name: 'accessibilityCaptionHints' },
      description:
        'Optional. Choose Include (INCLUDE) to have MediaConvert mark up your DASH manifest with <Accessibility> elements for embedded 608 captions. This markup isn\'t generally required, but some video players require it to discover and play embedded 608 captions. Keep the default value, Exclude (EXCLUDE), to leave these elements out. When you enable this setting, this is the markup that MediaConvert includes in your manifest: <Accessibility schemeIdUri="urn:scte:dash:cc:cea-608:2015" value="CC1=eng"/>',
    }),
    AudioDuration: MpdAudioDurationSchema.exactOptional().openapi({
      xml: { name: 'audioDuration' },
      description:
        'Specify this setting only when your output will be consumed by a downstream repackaging workflow that is sensitive to very small duration differences between video and audio. For this situation, choose Match video duration (MATCH_VIDEO_DURATION). In all other cases, keep the default value, Default codec duration (DEFAULT_CODEC_DURATION). When you choose Match video duration, MediaConvert pads the output audio streams with silence or trims them to ensure that the total duration of each audio stream is at least as long as the total duration of the video stream. After padding or trimming, the audio stream duration is no more than one frame longer than the video stream. MediaConvert applies audio padding or trimming only to the end of the last segment of the output. For unsegmented outputs, MediaConvert adds padding only to the end of the file. When you keep the default value, any minor discrepancies between audio and video duration will depend on your output audio codec.',
    }),
    CaptionContainerType: MpdCaptionContainerTypeSchema.exactOptional().openapi({
      xml: { name: 'captionContainerType' },
      description:
        'Use this setting only in DASH output groups that include sidecar TTML or IMSC captions. You specify sidecar captions in a separate output from your audio and video. Choose Raw (RAW) for captions in a single XML file in a raw container. Choose Fragmented MPEG-4 (FRAGMENTED_MP4) for captions in XML format contained within fragmented MP4 files. This set of fragmented MP4 files is separate from your video and audio fragmented MP4 files.',
    }),
    KlvMetadata: MpdKlvMetadataSchema.exactOptional().openapi({
      xml: { name: 'klvMetadata' },
      description:
        'To include key-length-value metadata in this output: Set KLV metadata insertion to Passthrough. MediaConvert reads KLV metadata present in your input and writes each instance to a separate event message box in the output, according to MISB ST1910.1. To exclude this KLV metadata: Set KLV metadata insertion to None or leave blank.',
    }),
    ManifestMetadataSignaling: MpdManifestMetadataSignalingSchema.exactOptional().openapi({
      xml: { name: 'manifestMetadataSignaling' },
      description:
        'To add an InbandEventStream element in your output MPD manifest for each type of event message, set Manifest metadata signaling to Enabled. For ID3 event messages, the InbandEventStream element schemeIdUri will be same value that you specify for ID3 metadata scheme ID URI. For SCTE35 event messages, the InbandEventStream element schemeIdUri will be "urn:scte:scte35:2013:bin". To leave these elements out of your output MPD manifest, set Manifest metadata signaling to Disabled. To enable Manifest metadata signaling, you must also set SCTE-35 source to Passthrough, ESAM SCTE-35 to insert, or ID3 metadata (TimedMetadata) to Passthrough.',
    }),
    Scte35Esam: MpdScte35EsamSchema.exactOptional().openapi({
      xml: { name: 'scte35Esam' },
      description:
        'Use this setting only when you specify SCTE-35 markers from ESAM. Choose INSERT to put SCTE-35 markers in this output at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).',
    }),
    Scte35Source: MpdScte35SourceSchema.exactOptional().openapi({
      xml: { name: 'scte35Source' },
      description:
        "Ignore this setting unless you have SCTE-35 markers in your input video file. Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want those SCTE-35 markers in this output.",
    }),
    TimedMetadata: MpdTimedMetadataSchema.exactOptional().openapi({
      xml: { name: 'timedMetadata' },
      description:
        'To include ID3 metadata in this output: Set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH). Specify this ID3 metadata in Custom ID3 metadata inserter (timedMetadataInsertion). MediaConvert writes each instance of ID3 metadata in a separate Event Message (eMSG) box. To exclude this ID3 metadata: Set ID3 metadata to None (NONE) or leave blank.',
    }),
    TimedMetadataBoxVersion: MpdTimedMetadataBoxVersionSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataBoxVersion' },
      description:
        'Specify the event message box (eMSG) version for ID3 timed metadata in your output.\nFor more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.3 Syntax.\nLeave blank to use the default value Version 0.\nWhen you specify Version 1, you must also set ID3 metadata (timedMetadata) to Passthrough.',
    }),
    TimedMetadataSchemeIdUri: StringMax1000Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataSchemeIdUri' },
      description:
        'Specify the event message box (eMSG) scheme ID URI (scheme_id_uri) for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. Leave blank to use the default value: https://aomedia.org/emsg/ID3 When you specify a value for ID3 metadata scheme ID URI, you must also set ID3 metadata (timedMetadata) to Passthrough.',
    }),
    TimedMetadataValue: StringMax1000Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataValue' },
      description:
        'Specify the event message box (eMSG) value for ID3 timed metadata in your output. For more information, see ISO/IEC 23009-1:2022 section 5.10.3.3.4 Semantics. When you specify a value for ID3 Metadata Value, you must also set ID3 metadata (timedMetadata) to Passthrough.',
    }),
  })
  .openapi({
    description:
      'These settings relate to the fragmented MP4 container for the segments in your DASH outputs.',
    required: [],
  })
  .openapi('MpdSettings')

const MxfAfdSignalingSchema = z
  .enum(['NO_COPY', 'COPY_FROM_VIDEO'])
  .openapi({
    description:
      "Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.",
  })
  .openapi('MxfAfdSignaling')

const MxfProfileSchema = z
  .enum(['D_10', 'XDCAM', 'OP1A', 'XAVC'])
  .openapi({
    description:
      'Specify the MXF profile, also called shim, for this output. When you choose Auto, MediaConvert chooses a profile based on the video codec and resolution. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.',
  })
  .openapi('MxfProfile')

const MxfXavcDurationModeSchema = z
  .enum(['ALLOW_ANY_DURATION', 'DROP_FRAMES_FOR_COMPLIANCE'])
  .openapi({
    description:
      'To create an output that complies with the XAVC file format guidelines for interoperability, keep the default value, Drop frames for compliance (DROP_FRAMES_FOR_COMPLIANCE). To include all frames from your input in this output, keep the default setting, Allow any duration (ALLOW_ANY_DURATION). The number of frames that MediaConvert excludes when you set this to Drop frames for compliance depends on the output frame rate and duration.',
  })
  .openapi('MxfXavcDurationMode')

const MxfXavcProfileSettingsSchema = z
  .object({
    DurationMode: MxfXavcDurationModeSchema.exactOptional().openapi({
      xml: { name: 'durationMode' },
      description:
        'To create an output that complies with the XAVC file format guidelines for interoperability, keep the default value, Drop frames for compliance (DROP_FRAMES_FOR_COMPLIANCE). To include all frames from your input in this output, keep the default setting, Allow any duration (ALLOW_ANY_DURATION). The number of frames that MediaConvert excludes when you set this to Drop frames for compliance depends on the output frame rate and duration.',
    }),
    MaxAncDataSize: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'maxAncDataSize' },
      description:
        'Specify a value for this setting only for outputs that you set up with one of these two XAVC profiles: XAVC HD Intra CBG (XAVC_HD_INTRA_CBG) or XAVC 4K Intra CBG (XAVC_4K_INTRA_CBG). Specify the amount of space in each frame that the service reserves for ancillary data, such as teletext captions. The default value for this setting is 1492 bytes per frame. This should be sufficient to prevent overflow unless you have multiple pages of teletext captions data. If you have a large amount of teletext data, specify a larger number.',
    }),
  })
  .openapi({
    description:
      'Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.',
    required: [],
  })
  .openapi('MxfXavcProfileSettings')

const MxfSettingsSchema = z
  .object({
    AfdSignaling: MxfAfdSignalingSchema.exactOptional().openapi({
      xml: { name: 'afdSignaling' },
      description:
        "Optional. When you have AFD signaling set up in your output video stream, use this setting to choose whether to also include it in the MXF wrapper. Choose Don't copy (NO_COPY) to exclude AFD signaling from the MXF wrapper. Choose Copy from video stream (COPY_FROM_VIDEO) to copy the AFD values from the video stream for this output to the MXF wrapper. Regardless of which option you choose, the AFD values remain in the video stream. Related settings: To set up your output to include or exclude AFD values, see AfdSignaling, under VideoDescription. On the console, find AFD signaling under the output's video encoding settings.",
    }),
    Profile: MxfProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description:
        'Specify the MXF profile, also called shim, for this output. When you choose Auto, MediaConvert chooses a profile based on the video codec and resolution. For a list of codecs supported with each MXF profile, see https://docs.aws.amazon.com/mediaconvert/latest/ug/codecs-supported-with-each-mxf-profile.html. For more information about the automatic selection behavior, see https://docs.aws.amazon.com/mediaconvert/latest/ug/default-automatic-selection-of-mxf-profiles.html.',
    }),
    XavcProfileSettings: MxfXavcProfileSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavcProfileSettings' },
      description:
        'Specify the XAVC profile settings for MXF outputs when you set your MXF profile to XAVC.',
    }),
  })
  .openapi({ description: 'These settings relate to your MXF output container.', required: [] })
  .openapi('MxfSettings')

const ContainerSettingsSchema = z
  .object({
    CmfcSettings: CmfcSettingsSchema.exactOptional().openapi({
      xml: { name: 'cmfcSettings' },
      description:
        'These settings relate to the fragmented MP4 container for the segments in your CMAF outputs.',
    }),
    Container: ContainerTypeSchema.exactOptional().openapi({
      xml: { name: 'container' },
      description:
        'Container for this output. Some containers require a container settings object. If not specified, the default object will be created.',
    }),
    F4vSettings: F4vSettingsSchema.exactOptional().openapi({
      xml: { name: 'f4vSettings' },
      description: 'Settings for F4v container',
    }),
    M2tsSettings: M2tsSettingsSchema.exactOptional().openapi({
      xml: { name: 'm2tsSettings' },
      description:
        "MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.",
    }),
    M3u8Settings: M3u8SettingsSchema.exactOptional().openapi({
      xml: { name: 'm3u8Settings' },
      description:
        'These settings relate to the MPEG-2 transport stream (MPEG2-TS) container for the MPEG2-TS segments in your HLS outputs.',
    }),
    MovSettings: MovSettingsSchema.exactOptional().openapi({
      xml: { name: 'movSettings' },
      description: 'These settings relate to your QuickTime MOV output container.',
    }),
    Mp4Settings: Mp4SettingsSchema.exactOptional().openapi({
      xml: { name: 'mp4Settings' },
      description:
        'These settings relate to your MP4 output container. You can create audio only outputs with this container. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/supported-codecs-containers-audio-only.html#output-codecs-and-containers-supported-for-audio-only.',
    }),
    MpdSettings: MpdSettingsSchema.exactOptional().openapi({
      xml: { name: 'mpdSettings' },
      description:
        'These settings relate to the fragmented MP4 container for the segments in your DASH outputs.',
    }),
    MxfSettings: MxfSettingsSchema.exactOptional().openapi({
      xml: { name: 'mxfSettings' },
      description: 'These settings relate to your MXF output container.',
    }),
  })
  .openapi({ description: 'Container specific settings.', required: [] })
  .openapi('ContainerSettings')

const HlsAudioOnlyContainerSchema = z
  .enum(['AUTOMATIC', 'M2TS'])
  .openapi({
    description:
      'Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create a raw audio-only file with no container. Regardless of the value that you specify here, if this output has video, the service will place outputs into an MPEG2-TS container.',
  })
  .openapi('HlsAudioOnlyContainer')

const HlsAudioTrackTypeSchema = z
  .enum([
    'ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT',
    'ALTERNATE_AUDIO_AUTO_SELECT',
    'ALTERNATE_AUDIO_NOT_AUTO_SELECT',
    'AUDIO_ONLY_VARIANT_STREAM',
  ])
  .openapi({
    description:
      'Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO',
  })
  .openapi('HlsAudioTrackType')

const HlsDescriptiveVideoServiceFlagSchema = z
  .enum(['DONT_FLAG', 'FLAG'])
  .openapi({
    description:
      'Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don\'t flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.',
  })
  .openapi('HlsDescriptiveVideoServiceFlag')

const HlsIFrameOnlyManifestSchema = z
  .enum(['INCLUDE', 'EXCLUDE'])
  .openapi({
    description:
      "Choose Include (INCLUDE) to have MediaConvert generate a child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).",
  })
  .openapi('HlsIFrameOnlyManifest')

const HlsSettingsSchema = z
  .object({
    AudioGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'audioGroupId' },
      description: 'Specifies the group to which the audio rendition belongs.',
    }),
    AudioOnlyContainer: HlsAudioOnlyContainerSchema.exactOptional().openapi({
      xml: { name: 'audioOnlyContainer' },
      description:
        'Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.',
    }),
    AudioRenditionSets: StringSchema.exactOptional().openapi({
      xml: { name: 'audioRenditionSets' },
      description:
        "List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.",
    }),
    AudioTrackType: HlsAudioTrackTypeSchema.exactOptional().openapi({
      xml: { name: 'audioTrackType' },
      description:
        'Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO',
    }),
    DescriptiveVideoServiceFlag: HlsDescriptiveVideoServiceFlagSchema.exactOptional().openapi({
      xml: { name: 'descriptiveVideoServiceFlag' },
      description:
        'Specify whether to flag this audio track as descriptive video service (DVS) in your HLS parent manifest. When you choose Flag (FLAG), MediaConvert includes the parameter CHARACTERISTICS="public.accessibility.describes-video" in the EXT-X-MEDIA entry for this track. When you keep the default choice, Don\'t flag (DONT_FLAG), MediaConvert leaves this parameter out. The DVS flag can help with accessibility on Apple devices. For more information, see the Apple documentation.',
    }),
    IFrameOnlyManifest: HlsIFrameOnlyManifestSchema.exactOptional().openapi({
      xml: { name: 'iFrameOnlyManifest' },
      description:
        "Choose Include (INCLUDE) to have MediaConvert generate a child manifest that lists only the I-frames for this rendition, in addition to your regular manifest for this rendition. You might use this manifest as part of a workflow that creates preview functions for your video. MediaConvert adds both the I-frame only child manifest and the regular child manifest to the parent manifest. When you don't need the I-frame only child manifest, keep the default value Exclude (EXCLUDE).",
    }),
    SegmentModifier: StringSchema.exactOptional().openapi({
      xml: { name: 'segmentModifier' },
      description:
        'Use this setting to add an identifying string to the filename of each segment. The service adds this string between the name modifier and segment index number. You can use format identifiers in the string. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/using-variables-in-your-job-settings.html',
    }),
  })
  .openapi({ description: 'Settings for HLS output groups', required: [] })
  .openapi('HlsSettings')

const OutputSettingsSchema = z
  .object({
    HlsSettings: HlsSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsSettings' },
      description: 'Settings for HLS output groups',
    }),
  })
  .openapi({ description: 'Specific settings for this type of output.', required: [] })
  .openapi('OutputSettings')

const StringMin0Schema = z.string().min(0).openapi('StringMin0')

const AfdSignalingSchema = z
  .enum(['NONE', 'AUTO', 'FIXED'])
  .openapi({
    description:
      'This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.',
  })
  .openapi('AfdSignaling')

const AntiAliasSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.',
  })
  .openapi('AntiAlias')

const Av1AdaptiveQuantizationSchema = z
  .enum(['OFF', 'LOW', 'MEDIUM', 'HIGH', 'HIGHER', 'MAX'])
  .openapi({
    description:
      'Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization (spatialAdaptiveQuantization).',
  })
  .openapi('Av1AdaptiveQuantization')

const Av1BitDepthSchema = z
  .enum(['BIT_8', 'BIT_10'])
  .openapi({
    description:
      'Specify the Bit depth (Av1BitDepth). You can choose 8-bit (BIT_8) or 10-bit (BIT_10).',
  })
  .openapi('Av1BitDepth')

const Av1FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('Av1FramerateControl')

const Av1FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('Av1FramerateConversionAlgorithm')

const IntegerMin1000Max1152000000Schema = z
  .int()
  .min(1000)
  .max(1152000000)
  .openapi('IntegerMin1000Max1152000000')

const IntegerMin0Max15Schema = z.int().min(0).max(15).openapi('IntegerMin0Max15')

const IntegerMin1Max10Schema = z.int().min(1).max(10).openapi('IntegerMin1Max10')

const DoubleMin0Max1Schema = z.float64().openapi('DoubleMin0Max1')

const Av1QvbrSettingsSchema = z
  .object({
    QvbrQualityLevel: IntegerMin1Max10Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevel' },
      description:
        'Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.',
    }),
    QvbrQualityLevelFineTune: DoubleMin0Max1Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevelFineTune' },
      description:
        'Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.',
    }),
  })
  .openapi({
    description:
      'Settings for quality-defined variable bitrate encoding with the AV1 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).',
    required: [],
  })
  .openapi('Av1QvbrSettings')

const Av1RateControlModeSchema = z
  .literal('QVBR')
  .openapi({
    description:
      "'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'",
  })
  .openapi('Av1RateControlMode')

const IntegerMin1Max32Schema = z.int().min(1).max(32).openapi('IntegerMin1Max32')

const Av1SpatialAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
  })
  .openapi('Av1SpatialAdaptiveQuantization')

const Av1SettingsSchema = z
  .object({
    AdaptiveQuantization: Av1AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        'Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to Spatial adaptive quantization (spatialAdaptiveQuantization).',
    }),
    BitDepth: Av1BitDepthSchema.exactOptional().openapi({
      xml: { name: 'bitDepth' },
      description:
        'Specify the Bit depth (Av1BitDepth). You can choose 8-bit (BIT_8) or 10-bit (BIT_10).',
    }),
    FramerateControl: Av1FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: Av1FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    GopSize: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        "Specify the GOP length (keyframe interval) in frames. With AV1, MediaConvert doesn't support GOP length in seconds. This value must be greater than zero and preferably equal to 1 + ((numberBFrames + 1) * x), where x is an integer value.",
    }),
    MaxBitrate: IntegerMin1000Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.',
    }),
    NumberBFramesBetweenReferenceFrames: IntegerMin0Max15Schema.exactOptional().openapi({
      xml: { name: 'numberBFramesBetweenReferenceFrames' },
      description:
        'Specify from the number of B-frames, in the range of 0-15. For AV1 encoding, we recommend using 7 or 15. Choose a larger number for a lower bitrate and smaller file size; choose a smaller number for better video quality.',
    }),
    QvbrSettings: Av1QvbrSettingsSchema.exactOptional().openapi({
      xml: { name: 'qvbrSettings' },
      description:
        'Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).',
    }),
    RateControlMode: Av1RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        "'With AV1 outputs, for rate control mode, MediaConvert supports only quality-defined variable bitrate (QVBR). You can''t use CBR or VBR.'",
    }),
    Slices: IntegerMin1Max32Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Specify the number of slices per picture. This value must be 1, 2, 4, 8, 16, or 32. For progressive pictures, this value must be less than or equal to the number of macroblock rows. For interlaced pictures, this value must be less than or equal to half the number of macroblock rows.',
    }),
    SpatialAdaptiveQuantization: Av1SpatialAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'spatialAdaptiveQuantization' },
      description:
        "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
    }),
  })
  .openapi({
    description:
      'Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.',
    required: [],
  })
  .openapi('Av1Settings')

const AvcIntraClassSchema = z
  .enum(['CLASS_50', 'CLASS_100', 'CLASS_200', 'CLASS_4K_2K'])
  .openapi({
    description:
      'Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality. Note that for Class 4K/2K, MediaConvert supports only 4:2:2 chroma subsampling.',
  })
  .openapi('AvcIntraClass')

const AvcIntraUhdQualityTuningLevelSchema = z
  .enum(['SINGLE_PASS', 'MULTI_PASS'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how many transcoding passes MediaConvert does with your video. When you choose Multi-pass (MULTI_PASS), your video quality is better and your output bitrate is more accurate. That is, the actual bitrate of your output is closer to the target bitrate defined in the specification. When you choose Single-pass (SINGLE_PASS), your encoding time is faster. The default behavior is Single-pass (SINGLE_PASS).',
  })
  .openapi('AvcIntraUhdQualityTuningLevel')

const AvcIntraUhdSettingsSchema = z
  .object({
    QualityTuningLevel: AvcIntraUhdQualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how many transcoding passes MediaConvert does with your video. When you choose Multi-pass (MULTI_PASS), your video quality is better and your output bitrate is more accurate. That is, the actual bitrate of your output is closer to the target bitrate defined in the specification. When you choose Single-pass (SINGLE_PASS), your encoding time is faster. The default behavior is Single-pass (SINGLE_PASS).',
    }),
  })
  .openapi({
    description:
      "Optional when you set AVC-Intra class (avcIntraClass) to Class 4K/2K (CLASS_4K_2K). When you set AVC-Intra class to a different value, this object isn't allowed.",
    required: [],
  })
  .openapi('AvcIntraUhdSettings')

const AvcIntraFramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('AvcIntraFramerateControl')

const AvcIntraFramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('AvcIntraFramerateConversionAlgorithm')

const IntegerMin24Max60000Schema = z.int().min(24).max(60000).openapi('IntegerMin24Max60000')

const AvcIntraInterlaceModeSchema = z
  .enum(['PROGRESSIVE', 'TOP_FIELD', 'BOTTOM_FIELD', 'FOLLOW_TOP_FIELD', 'FOLLOW_BOTTOM_FIELD'])
  .openapi({
    description:
      "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
  })
  .openapi('AvcIntraInterlaceMode')

const AvcIntraScanTypeConversionModeSchema = z
  .enum(['INTERLACED', 'INTERLACED_OPTIMIZE'])
  .openapi({
    description:
      "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
  })
  .openapi('AvcIntraScanTypeConversionMode')

const AvcIntraSlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('AvcIntraSlowPal')

const AvcIntraTelecineSchema = z
  .enum(['NONE', 'HARD'])
  .openapi({
    description:
      'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
  })
  .openapi('AvcIntraTelecine')

const AvcIntraSettingsSchema = z
  .object({
    AvcIntraClass: AvcIntraClassSchema.exactOptional().openapi({
      xml: { name: 'avcIntraClass' },
      description:
        'Specify the AVC-Intra class of your output. The AVC-Intra class selection determines the output video bit rate depending on the frame rate of the output. Outputs with higher class values have higher bitrates and improved image quality. Note that for Class 4K/2K, MediaConvert supports only 4:2:2 chroma subsampling.',
    }),
    AvcIntraUhdSettings: AvcIntraUhdSettingsSchema.exactOptional().openapi({
      xml: { name: 'avcIntraUhdSettings' },
      description:
        "Optional when you set AVC-Intra class (avcIntraClass) to Class 4K/2K (CLASS_4K_2K). When you set AVC-Intra class to a different value, this object isn't allowed.",
    }),
    FramerateControl: AvcIntraFramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm:
      AvcIntraFramerateConversionAlgorithmSchema.exactOptional().openapi({
        xml: { name: 'framerateConversionAlgorithm' },
        description:
          'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
      }),
    FramerateDenominator: IntegerMin1Max1001Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin24Max60000Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    InterlaceMode: AvcIntraInterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
    }),
    ScanTypeConversionMode: AvcIntraScanTypeConversionModeSchema.exactOptional().openapi({
      xml: { name: 'scanTypeConversionMode' },
      description:
        "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
    }),
    SlowPal: AvcIntraSlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    Telecine: AvcIntraTelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
    }),
  })
  .openapi({
    description:
      'Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.',
    required: [],
  })
  .openapi('AvcIntraSettings')

const VideoCodecSchema = z
  .enum([
    'AV1',
    'AVC_INTRA',
    'FRAME_CAPTURE',
    'H_264',
    'H_265',
    'MPEG2',
    'PRORES',
    'VC3',
    'VP8',
    'VP9',
    'XAVC',
  ])
  .openapi({ description: 'Type of video codec' })
  .openapi('VideoCodec')

const IntegerMin1Max10000000Schema = z.int().min(1).max(10000000).openapi('IntegerMin1Max10000000')

const IntegerMin1Max100Schema = z.int().min(1).max(100).openapi('IntegerMin1Max100')

const FrameCaptureSettingsSchema = z
  .object({
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places.',
    }),
    MaxCaptures: IntegerMin1Max10000000Schema.exactOptional().openapi({
      xml: { name: 'maxCaptures' },
      description: 'Maximum number of captures (encoded jpg output files).',
    }),
    Quality: IntegerMin1Max100Schema.exactOptional().openapi({
      xml: { name: 'quality' },
      description: 'JPEG Quality - a higher value equals higher quality.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.',
    required: [],
  })
  .openapi('FrameCaptureSettings')

const H264AdaptiveQuantizationSchema = z
  .enum(['OFF', 'AUTO', 'LOW', 'MEDIUM', 'HIGH', 'HIGHER', 'MAX'])
  .openapi({
    description:
      "Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization (H264AdaptiveQuantization) to Off (OFF). Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization.",
  })
  .openapi('H264AdaptiveQuantization')

const BandwidthReductionFilterSharpeningSchema = z
  .enum(['LOW', 'MEDIUM', 'HIGH', 'OFF'])
  .openapi({
    description:
      'Optionally specify the level of sharpening to apply when you use the Bandwidth reduction filter.  Sharpening adds contrast to the edges of your video content and can reduce softness. Keep the default value Off to apply no sharpening. Set Sharpening strength to Low to apply a minimal amount of sharpening, or High to apply a maximum amount of sharpening.',
  })
  .openapi('BandwidthReductionFilterSharpening')

const BandwidthReductionFilterStrengthSchema = z
  .enum(['LOW', 'MEDIUM', 'HIGH', 'AUTO', 'OFF'])
  .openapi({
    description:
      'Specify the strength of the Bandwidth reduction filter. For most workflows, we recommend that you choose Auto to reduce the bandwidth of your output with little to no perceptual decrease in video quality. For high quality and high bitrate outputs, choose Low. For the most bandwidth reduction, choose High. We recommend that you choose High for low bitrate outputs. Note that High may incur a slight increase in the softness of your output.',
  })
  .openapi('BandwidthReductionFilterStrength')

const BandwidthReductionFilterSchema = z
  .object({
    Sharpening: BandwidthReductionFilterSharpeningSchema.exactOptional().openapi({
      xml: { name: 'sharpening' },
      description:
        'Optionally specify the level of sharpening to apply when you use the Bandwidth reduction filter.  Sharpening adds contrast to the edges of your video content and can reduce softness. Keep the default value Off to apply no sharpening. Set Sharpening strength to Low to apply a minimal amount of sharpening, or High to apply a maximum amount of sharpening.',
    }),
    Strength: BandwidthReductionFilterStrengthSchema.exactOptional().openapi({
      xml: { name: 'strength' },
      description:
        'Specify the strength of the Bandwidth reduction filter. For most workflows, we recommend that you choose Auto to reduce the bandwidth of your output with little to no perceptual decrease in video quality. For high quality and high bitrate outputs, choose Low. For the most bandwidth reduction, choose High. We recommend that you choose High for low bitrate outputs. Note that High may incur a slight increase in the softness of your output.',
    }),
  })
  .openapi({
    description:
      'The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.',
    required: [],
  })
  .openapi('BandwidthReductionFilter')

const H264CodecLevelSchema = z
  .enum([
    'AUTO',
    'LEVEL_1',
    'LEVEL_1_1',
    'LEVEL_1_2',
    'LEVEL_1_3',
    'LEVEL_2',
    'LEVEL_2_1',
    'LEVEL_2_2',
    'LEVEL_3',
    'LEVEL_3_1',
    'LEVEL_3_2',
    'LEVEL_4',
    'LEVEL_4_1',
    'LEVEL_4_2',
    'LEVEL_5',
    'LEVEL_5_1',
    'LEVEL_5_2',
  ])
  .openapi({
    description:
      "Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).",
  })
  .openapi('H264CodecLevel')

const H264CodecProfileSchema = z
  .enum(['BASELINE', 'HIGH', 'HIGH_10BIT', 'HIGH_422', 'HIGH_422_10BIT', 'MAIN'])
  .openapi({
    description:
      'H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.',
  })
  .openapi('H264CodecProfile')

const H264DynamicSubGopSchema = z
  .enum(['ADAPTIVE', 'STATIC'])
  .openapi({
    description:
      'Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).',
  })
  .openapi('H264DynamicSubGop')

const H264EntropyEncodingSchema = z
  .enum(['CABAC', 'CAVLC'])
  .openapi({
    description: 'Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.',
  })
  .openapi('H264EntropyEncoding')

const H264FieldEncodingSchema = z
  .enum(['PAFF', 'FORCE_FIELD', 'MBAFF'])
  .openapi({
    description:
      'The video encoding method for your MPEG-4 AVC output. Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field (FORCE_FIELD) to disable PAFF encoding and create separate interlaced fields. Choose MBAFF to disable PAFF and have MediaConvert use MBAFF encoding for interlaced outputs.',
  })
  .openapi('H264FieldEncoding')

const H264FlickerAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled (DISABLED). Change this value to Enabled (ENABLED) to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.',
  })
  .openapi('H264FlickerAdaptiveQuantization')

const H264FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('H264FramerateControl')

const H264FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('H264FramerateConversionAlgorithm')

const H264GopBReferenceSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description: 'If enable, use reference B frames for GOP structures that have B frames > 1.',
  })
  .openapi('H264GopBReference')

const H264GopSizeUnitsSchema = z
  .enum(['FRAMES', 'SECONDS', 'AUTO'])
  .openapi({
    description:
      "Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto (AUTO) and and leave GOP size (GopSize) blank. By default, if you don't specify GOP mode control (GopSizeUnits), MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames (FRAMES) or Specified, seconds (SECONDS) and then provide the GOP length in the related setting GOP size (GopSize).",
  })
  .openapi('H264GopSizeUnits')

const IntegerMin0Max1152000000Schema = z
  .int()
  .min(0)
  .max(1152000000)
  .openapi('IntegerMin0Max1152000000')

const H264InterlaceModeSchema = z
  .enum(['PROGRESSIVE', 'TOP_FIELD', 'BOTTOM_FIELD', 'FOLLOW_TOP_FIELD', 'FOLLOW_BOTTOM_FIELD'])
  .openapi({
    description:
      "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
  })
  .openapi('H264InterlaceMode')

const IntegerMin0Max30Schema = z.int().min(0).max(30).openapi('IntegerMin0Max30')

const IntegerMin0Max7Schema = z.int().min(0).max(7).openapi('IntegerMin0Max7')

const H264ParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
  })
  .openapi('H264ParControl')

const H264QualityTuningLevelSchema = z
  .enum(['SINGLE_PASS', 'SINGLE_PASS_HQ', 'MULTI_PASS_HQ'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
  })
  .openapi('H264QualityTuningLevel')

const H264QvbrSettingsSchema = z
  .object({
    MaxAverageBitrate: IntegerMin1000Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'maxAverageBitrate' },
      description:
        'Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.',
    }),
    QvbrQualityLevel: IntegerMin1Max10Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevel' },
      description:
        'Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.',
    }),
    QvbrQualityLevelFineTune: DoubleMin0Max1Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevelFineTune' },
      description:
        'Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.',
    }),
  })
  .openapi({
    description:
      'Settings for quality-defined variable bitrate encoding with the H.264 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).',
    required: [],
  })
  .openapi('H264QvbrSettings')

const H264RateControlModeSchema = z
  .enum(['VBR', 'CBR', 'QVBR'])
  .openapi({
    description:
      'Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).',
  })
  .openapi('H264RateControlMode')

const H264RepeatPpsSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Places a PPS header on each encoded picture, even if repeated.' })
  .openapi('H264RepeatPps')

const H264ScanTypeConversionModeSchema = z
  .enum(['INTERLACED', 'INTERLACED_OPTIMIZE'])
  .openapi({
    description:
      "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
  })
  .openapi('H264ScanTypeConversionMode')

const H264SceneChangeDetectSchema = z
  .enum(['DISABLED', 'ENABLED', 'TRANSITION_DETECTION'])
  .openapi({
    description:
      'Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.',
  })
  .openapi('H264SceneChangeDetect')

const H264SlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('H264SlowPal')

const IntegerMin0Max128Schema = z.int().min(0).max(128).openapi('IntegerMin0Max128')

const H264SpatialAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Only use this setting when you change the default value, Auto (AUTO), for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (H264AdaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.",
  })
  .openapi('H264SpatialAdaptiveQuantization')

const H264SyntaxSchema = z
  .enum(['DEFAULT', 'RP2027'])
  .openapi({ description: 'Produces a bitstream compliant with SMPTE RP-2027.' })
  .openapi('H264Syntax')

const H264TelecineSchema = z
  .enum(['NONE', 'SOFT', 'HARD'])
  .openapi({
    description:
      'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
  })
  .openapi('H264Telecine')

const H264TemporalAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization). To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.",
  })
  .openapi('H264TemporalAdaptiveQuantization')

const H264UnregisteredSeiTimecodeSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description: 'Inserts timecode for each frame as 4 bytes of an unregistered SEI message.',
  })
  .openapi('H264UnregisteredSeiTimecode')

const H264SettingsSchema = z
  .object({
    AdaptiveQuantization: H264AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        "Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set H264AdaptiveQuantization to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization (H264AdaptiveQuantization) to Off (OFF). Related settings: The value that you choose here applies to the following settings: H264FlickerAdaptiveQuantization, H264SpatialAdaptiveQuantization, and H264TemporalAdaptiveQuantization.",
    }),
    BandwidthReductionFilter: BandwidthReductionFilterSchema.exactOptional().openapi({
      xml: { name: 'bandwidthReductionFilter' },
      description:
        'The Bandwidth reduction filter increases the video quality of your output relative to its bitrate. Use to lower the bitrate of your constant quality QVBR output, with little or no perceptual decrease in quality. Or, use to increase the video quality of outputs with other rate control modes relative to the bitrate that you specify. Bandwidth reduction increases further when your input is low quality or noisy. Outputs that use this feature incur pro-tier pricing. When you include Bandwidth reduction filter, you cannot include the Noise reducer preprocessor.',
    }),
    Bitrate: IntegerMin1000Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.',
    }),
    CodecLevel: H264CodecLevelSchema.exactOptional().openapi({
      xml: { name: 'codecLevel' },
      description:
        "Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).",
    }),
    CodecProfile: H264CodecProfileSchema.exactOptional().openapi({
      xml: { name: 'codecProfile' },
      description:
        'H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.',
    }),
    DynamicSubGop: H264DynamicSubGopSchema.exactOptional().openapi({
      xml: { name: 'dynamicSubGop' },
      description:
        'Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).',
    }),
    EntropyEncoding: H264EntropyEncodingSchema.exactOptional().openapi({
      xml: { name: 'entropyEncoding' },
      description: 'Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.',
    }),
    FieldEncoding: H264FieldEncodingSchema.exactOptional().openapi({
      xml: { name: 'fieldEncoding' },
      description:
        'The video encoding method for your MPEG-4 AVC output. Keep the default value, PAFF, to have MediaConvert use PAFF encoding for interlaced outputs. Choose Force field (FORCE_FIELD) to disable PAFF encoding and create separate interlaced fields. Choose MBAFF to disable PAFF and have MediaConvert use MBAFF encoding for interlaced outputs.',
    }),
    FlickerAdaptiveQuantization: H264FlickerAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'flickerAdaptiveQuantization' },
      description:
        'Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264FlickerAdaptiveQuantization is Disabled (DISABLED). Change this value to Enabled (ENABLED) to reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. To manually enable or disable H264FlickerAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.',
    }),
    FramerateControl: H264FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: H264FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    GopBReference: H264GopBReferenceSchema.exactOptional().openapi({
      xml: { name: 'gopBReference' },
      description: 'If enable, use reference B frames for GOP structures that have B frames > 1.',
    }),
    GopClosedCadence: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        "Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. If you do explicitly specify a value, for segmented outputs, don't set this value to 0.",
    }),
    GopSize: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        'Use this setting only when you set GOP mode control (GopSizeUnits) to Specified, frames (FRAMES) or Specified, seconds (SECONDS). Specify the GOP length using a whole number of frames or a decimal value of seconds. MediaConvert will interpret this value as frames or seconds depending on the value you choose for GOP mode control (GopSizeUnits). If you want to allow MediaConvert to automatically determine GOP size, leave GOP size blank and set GOP mode control to Auto (AUTO). If your output group specifies HLS, DASH, or CMAF, leave GOP size blank and set GOP mode control to Auto in each output in your output group.',
    }),
    GopSizeUnits: H264GopSizeUnitsSchema.exactOptional().openapi({
      xml: { name: 'gopSizeUnits' },
      description:
        "Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto (AUTO) and and leave GOP size (GopSize) blank. By default, if you don't specify GOP mode control (GopSizeUnits), MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames (FRAMES) or Specified, seconds (SECONDS) and then provide the GOP length in the related setting GOP size (GopSize).",
    }),
    HrdBufferFinalFillPercentage: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferFinalFillPercentage' },
      description:
        "If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.",
    }),
    HrdBufferInitialFillPercentage: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferInitialFillPercentage' },
      description: 'Percentage of the buffer that should initially be filled (HRD buffer model).',
    }),
    HrdBufferSize: IntegerMin0Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        'Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.',
    }),
    InterlaceMode: H264InterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
    }),
    MaxBitrate: IntegerMin1000Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.',
    }),
    MinIInterval: IntegerMin0Max30Schema.exactOptional().openapi({
      xml: { name: 'minIInterval' },
      description:
        'Use this setting only when you also enable Scene change detection (SceneChangeDetect). This setting determines how the encoder manages the spacing between I-frames that it inserts as part of the I-frame cadence and the I-frames that it inserts for Scene change detection. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. When you explicitly specify a value for this setting, the encoder determines whether to skip a cadence-driven I-frame by the value you set. For example, if you set Min I interval (minIInterval) to 5 and a cadence-driven I-frame would fall within 5 frames of a scene-change I-frame, then the encoder skips the cadence-driven I-frame. In this way, one GOP is shrunk slightly and one GOP is stretched slightly. When the cadence-driven I-frames are farther from the scene-change I-frame than the value you set, then the encoder leaves all I-frames in place and the GOPs surrounding the scene change are smaller than the usual cadence GOPs.',
    }),
    NumberBFramesBetweenReferenceFrames: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'numberBFramesBetweenReferenceFrames' },
      description:
        'This setting to determines the number of B-frames that MediaConvert puts between reference frames in this output. We recommend that you use automatic behavior to allow the transcoder to choose the best value based on characteristics of your input video. In the console, choose AUTO to select this automatic behavior. When you manually edit your JSON job specification, leave this setting out to choose automatic behavior. When you want to specify this number explicitly, choose a whole number from 0 through 7.',
    }),
    NumberReferenceFrames: IntegerMin1Max6Schema.exactOptional().openapi({
      xml: { name: 'numberReferenceFrames' },
      description:
        'Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.',
    }),
    ParControl: H264ParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
    }),
    ParDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.',
    }),
    ParNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.',
    }),
    QualityTuningLevel: H264QualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
    }),
    QvbrSettings: H264QvbrSettingsSchema.exactOptional().openapi({
      xml: { name: 'qvbrSettings' },
      description:
        'Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).',
    }),
    RateControlMode: H264RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).',
    }),
    RepeatPps: H264RepeatPpsSchema.exactOptional().openapi({
      xml: { name: 'repeatPps' },
      description: 'Places a PPS header on each encoded picture, even if repeated.',
    }),
    ScanTypeConversionMode: H264ScanTypeConversionModeSchema.exactOptional().openapi({
      xml: { name: 'scanTypeConversionMode' },
      description:
        "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
    }),
    SceneChangeDetect: H264SceneChangeDetectSchema.exactOptional().openapi({
      xml: { name: 'sceneChangeDetect' },
      description:
        'Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.',
    }),
    Slices: IntegerMin1Max32Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.',
    }),
    SlowPal: H264SlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    Softness: IntegerMin0Max128Schema.exactOptional().openapi({
      xml: { name: 'softness' },
      description:
        "Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.",
    }),
    SpatialAdaptiveQuantization: H264SpatialAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'spatialAdaptiveQuantization' },
      description:
        "Only use this setting when you change the default value, Auto (AUTO), for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264SpatialAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to set H264SpatialAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (H264AdaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher. To manually enable or disable H264SpatialAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.",
    }),
    Syntax: H264SyntaxSchema.exactOptional().openapi({
      xml: { name: 'syntax' },
      description: 'Produces a bitstream compliant with SMPTE RP-2027.',
    }),
    Telecine: H264TelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
    }),
    TemporalAdaptiveQuantization: H264TemporalAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'temporalAdaptiveQuantization' },
      description:
        "Only use this setting when you change the default value, AUTO, for the setting H264AdaptiveQuantization. When you keep all defaults, excluding H264AdaptiveQuantization and all other adaptive quantization from your JSON job specification, MediaConvert automatically applies the best types of quantization for your video content. When you set H264AdaptiveQuantization to a value other than AUTO, the default value for H264TemporalAdaptiveQuantization is Enabled (ENABLED). Keep this default value to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to set H264TemporalAdaptiveQuantization to Disabled (DISABLED). Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization). To manually enable or disable H264TemporalAdaptiveQuantization, you must set Adaptive quantization (H264AdaptiveQuantization) to a value other than AUTO.",
    }),
    UnregisteredSeiTimecode: H264UnregisteredSeiTimecodeSchema.exactOptional().openapi({
      xml: { name: 'unregisteredSeiTimecode' },
      description: 'Inserts timecode for each frame as 4 bytes of an unregistered SEI message.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.',
    required: [],
  })
  .openapi('H264Settings')

const H265AdaptiveQuantizationSchema = z
  .enum(['OFF', 'LOW', 'MEDIUM', 'HIGH', 'HIGHER', 'MAX', 'AUTO'])
  .openapi({
    description:
      'When you set Adaptive Quantization (H265AdaptiveQuantization) to Auto (AUTO), or leave blank, MediaConvert automatically applies quantization to improve the video quality of your output. Set Adaptive Quantization to Low (LOW), Medium (MEDIUM), High (HIGH), Higher (HIGHER), or Max (MAX) to manually control the strength of the quantization filter. When you do, you can specify a value for Spatial Adaptive Quantization (H265SpatialAdaptiveQuantization), Temporal Adaptive Quantization (H265TemporalAdaptiveQuantization), and Flicker Adaptive Quantization (H265FlickerAdaptiveQuantization), to further control the quantization filter. Set Adaptive Quantization to Off (OFF) to apply no quantization to your output.',
  })
  .openapi('H265AdaptiveQuantization')

const H265AlternateTransferFunctionSeiSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).',
  })
  .openapi('H265AlternateTransferFunctionSei')

const IntegerMin1000Max1466400000Schema = z
  .int()
  .min(1000)
  .max(1466400000)
  .openapi('IntegerMin1000Max1466400000')

const H265CodecLevelSchema = z
  .enum([
    'AUTO',
    'LEVEL_1',
    'LEVEL_2',
    'LEVEL_2_1',
    'LEVEL_3',
    'LEVEL_3_1',
    'LEVEL_4',
    'LEVEL_4_1',
    'LEVEL_5',
    'LEVEL_5_1',
    'LEVEL_5_2',
    'LEVEL_6',
    'LEVEL_6_1',
    'LEVEL_6_2',
  ])
  .openapi({ description: 'H.265 Level.' })
  .openapi('H265CodecLevel')

const H265CodecProfileSchema = z
  .enum([
    'MAIN_MAIN',
    'MAIN_HIGH',
    'MAIN10_MAIN',
    'MAIN10_HIGH',
    'MAIN_422_8BIT_MAIN',
    'MAIN_422_8BIT_HIGH',
    'MAIN_422_10BIT_MAIN',
    'MAIN_422_10BIT_HIGH',
  ])
  .openapi({
    description:
      'Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.',
  })
  .openapi('H265CodecProfile')

const H265DynamicSubGopSchema = z
  .enum(['ADAPTIVE', 'STATIC'])
  .openapi({
    description:
      'Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).',
  })
  .openapi('H265DynamicSubGop')

const H265FlickerAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off (OFF).',
  })
  .openapi('H265FlickerAdaptiveQuantization')

const H265FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('H265FramerateControl')

const H265FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('H265FramerateConversionAlgorithm')

const H265GopBReferenceSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description: 'If enable, use reference B frames for GOP structures that have B frames > 1.',
  })
  .openapi('H265GopBReference')

const H265GopSizeUnitsSchema = z
  .enum(['FRAMES', 'SECONDS', 'AUTO'])
  .openapi({
    description:
      "Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto (AUTO) and and leave GOP size (GopSize) blank. By default, if you don't specify GOP mode control (GopSizeUnits), MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames (FRAMES) or Specified, seconds (SECONDS) and then provide the GOP length in the related setting GOP size (GopSize).",
  })
  .openapi('H265GopSizeUnits')

const IntegerMin0Max1466400000Schema = z
  .int()
  .min(0)
  .max(1466400000)
  .openapi('IntegerMin0Max1466400000')

const H265InterlaceModeSchema = z
  .enum(['PROGRESSIVE', 'TOP_FIELD', 'BOTTOM_FIELD', 'FOLLOW_TOP_FIELD', 'FOLLOW_BOTTOM_FIELD'])
  .openapi({
    description:
      "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
  })
  .openapi('H265InterlaceMode')

const H265ParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
  })
  .openapi('H265ParControl')

const H265QualityTuningLevelSchema = z
  .enum(['SINGLE_PASS', 'SINGLE_PASS_HQ', 'MULTI_PASS_HQ'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
  })
  .openapi('H265QualityTuningLevel')

const H265QvbrSettingsSchema = z
  .object({
    MaxAverageBitrate: IntegerMin1000Max1466400000Schema.exactOptional().openapi({
      xml: { name: 'maxAverageBitrate' },
      description:
        'Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.',
    }),
    QvbrQualityLevel: IntegerMin1Max10Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevel' },
      description:
        'Use this setting only when you set Rate control mode (RateControlMode) to QVBR. Specify the target quality level for this output. MediaConvert determines the right number of bits to use for each part of the video to maintain the video quality that you specify. When you keep the default value, AUTO, MediaConvert picks a quality level for you, based on characteristics of your input video. If you prefer to specify a quality level, specify a number from 1 through 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9. Optionally, to specify a value between whole numbers, also provide a value for the setting qvbrQualityLevelFineTune. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33.',
    }),
    QvbrQualityLevelFineTune: DoubleMin0Max1Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevelFineTune' },
      description:
        'Optional. Specify a value here to set the QVBR quality to a level that is between whole numbers. For example, if you want your QVBR quality level to be 7.33, set qvbrQualityLevel to 7 and set qvbrQualityLevelFineTune to .33. MediaConvert rounds your QVBR quality level to the nearest third of a whole number. For example, if you set qvbrQualityLevel to 7 and you set qvbrQualityLevelFineTune to .25, your actual QVBR quality level is 7.33.',
    }),
  })
  .openapi({
    description:
      'Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).',
    required: [],
  })
  .openapi('H265QvbrSettings')

const H265RateControlModeSchema = z
  .enum(['VBR', 'CBR', 'QVBR'])
  .openapi({
    description:
      'Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).',
  })
  .openapi('H265RateControlMode')

const H265SampleAdaptiveOffsetFilterModeSchema = z
  .enum(['DEFAULT', 'ADAPTIVE', 'OFF'])
  .openapi({
    description:
      'Specify Sample Adaptive Offset (SAO) filter strength. Adaptive mode dynamically selects best strength based on content',
  })
  .openapi('H265SampleAdaptiveOffsetFilterMode')

const H265ScanTypeConversionModeSchema = z
  .enum(['INTERLACED', 'INTERLACED_OPTIMIZE'])
  .openapi({
    description:
      "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
  })
  .openapi('H265ScanTypeConversionMode')

const H265SceneChangeDetectSchema = z
  .enum(['DISABLED', 'ENABLED', 'TRANSITION_DETECTION'])
  .openapi({
    description:
      'Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.',
  })
  .openapi('H265SceneChangeDetect')

const H265SlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('H265SlowPal')

const H265SpatialAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
  })
  .openapi('H265SpatialAdaptiveQuantization')

const H265TelecineSchema = z
  .enum(['NONE', 'SOFT', 'HARD'])
  .openapi({
    description:
      'This field applies only if the Streams > Advanced > Framerate (framerate) field is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode) to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.',
  })
  .openapi('H265Telecine')

const H265TemporalAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).",
  })
  .openapi('H265TemporalAdaptiveQuantization')

const H265TemporalIdsSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.',
  })
  .openapi('H265TemporalIds')

const H265TilesSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.',
  })
  .openapi('H265Tiles')

const H265UnregisteredSeiTimecodeSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description: 'Inserts timecode for each frame as 4 bytes of an unregistered SEI message.',
  })
  .openapi('H265UnregisteredSeiTimecode')

const H265WriteMp4PackagingTypeSchema = z
  .enum(['HVC1', 'HEV1'])
  .openapi({
    description:
      "If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.",
  })
  .openapi('H265WriteMp4PackagingType')

const H265SettingsSchema = z
  .object({
    AdaptiveQuantization: H265AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        'When you set Adaptive Quantization (H265AdaptiveQuantization) to Auto (AUTO), or leave blank, MediaConvert automatically applies quantization to improve the video quality of your output. Set Adaptive Quantization to Low (LOW), Medium (MEDIUM), High (HIGH), Higher (HIGHER), or Max (MAX) to manually control the strength of the quantization filter. When you do, you can specify a value for Spatial Adaptive Quantization (H265SpatialAdaptiveQuantization), Temporal Adaptive Quantization (H265TemporalAdaptiveQuantization), and Flicker Adaptive Quantization (H265FlickerAdaptiveQuantization), to further control the quantization filter. Set Adaptive Quantization to Off (OFF) to apply no quantization to your output.',
    }),
    AlternateTransferFunctionSei: H265AlternateTransferFunctionSeiSchema.exactOptional().openapi({
      xml: { name: 'alternateTransferFunctionSei' },
      description:
        'Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).',
    }),
    Bitrate: IntegerMin1000Max1466400000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.',
    }),
    CodecLevel: H265CodecLevelSchema.exactOptional().openapi({
      xml: { name: 'codecLevel' },
      description: 'H.265 Level.',
    }),
    CodecProfile: H265CodecProfileSchema.exactOptional().openapi({
      xml: { name: 'codecProfile' },
      description:
        'Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.',
    }),
    DynamicSubGop: H265DynamicSubGopSchema.exactOptional().openapi({
      xml: { name: 'dynamicSubGop' },
      description:
        'Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).',
    }),
    FlickerAdaptiveQuantization: H265FlickerAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'flickerAdaptiveQuantization' },
      description:
        'Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set adaptiveQuantization to a value other than Off (OFF).',
    }),
    FramerateControl: H265FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: H265FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    GopBReference: H265GopBReferenceSchema.exactOptional().openapi({
      xml: { name: 'gopBReference' },
      description: 'If enable, use reference B frames for GOP structures that have B frames > 1.',
    }),
    GopClosedCadence: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        "Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. If you do explicitly specify a value, for segmented outputs, don't set this value to 0.",
    }),
    GopSize: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        'Use this setting only when you set GOP mode control (GopSizeUnits) to Specified, frames (FRAMES) or Specified, seconds (SECONDS). Specify the GOP length using a whole number of frames or a decimal value of seconds. MediaConvert will interpret this value as frames or seconds depending on the value you choose for GOP mode control (GopSizeUnits). If you want to allow MediaConvert to automatically determine GOP size, leave GOP size blank and set GOP mode control to Auto (AUTO). If your output group specifies HLS, DASH, or CMAF, leave GOP size blank and set GOP mode control to Auto in each output in your output group.',
    }),
    GopSizeUnits: H265GopSizeUnitsSchema.exactOptional().openapi({
      xml: { name: 'gopSizeUnits' },
      description:
        "Specify how the transcoder determines GOP size for this output. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, choose Auto (AUTO) and and leave GOP size (GopSize) blank. By default, if you don't specify GOP mode control (GopSizeUnits), MediaConvert will use automatic behavior. If your output group specifies HLS, DASH, or CMAF, set GOP mode control to Auto and leave GOP size blank in each output in your output group. To explicitly specify the GOP length, choose Specified, frames (FRAMES) or Specified, seconds (SECONDS) and then provide the GOP length in the related setting GOP size (GopSize).",
    }),
    HrdBufferFinalFillPercentage: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferFinalFillPercentage' },
      description:
        "If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.",
    }),
    HrdBufferInitialFillPercentage: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferInitialFillPercentage' },
      description: 'Percentage of the buffer that should initially be filled (HRD buffer model).',
    }),
    HrdBufferSize: IntegerMin0Max1466400000Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        'Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.',
    }),
    InterlaceMode: H265InterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
    }),
    MaxBitrate: IntegerMin1000Max1466400000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.',
    }),
    MinIInterval: IntegerMin0Max30Schema.exactOptional().openapi({
      xml: { name: 'minIInterval' },
      description:
        'Use this setting only when you also enable Scene change detection (SceneChangeDetect). This setting determines how the encoder manages the spacing between I-frames that it inserts as part of the I-frame cadence and the I-frames that it inserts for Scene change detection. We recommend that you have the transcoder automatically choose this value for you based on characteristics of your input video. To enable this automatic behavior, keep the default value by leaving this setting out of your JSON job specification. In the console, do this by keeping the default empty value. When you explicitly specify a value for this setting, the encoder determines whether to skip a cadence-driven I-frame by the value you set. For example, if you set Min I interval (minIInterval) to 5 and a cadence-driven I-frame would fall within 5 frames of a scene-change I-frame, then the encoder skips the cadence-driven I-frame. In this way, one GOP is shrunk slightly and one GOP is stretched slightly. When the cadence-driven I-frames are farther from the scene-change I-frame than the value you set, then the encoder leaves all I-frames in place and the GOPs surrounding the scene change are smaller than the usual cadence GOPs.',
    }),
    NumberBFramesBetweenReferenceFrames: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'numberBFramesBetweenReferenceFrames' },
      description:
        "Specify the number of B-frames that MediaConvert puts between reference frames in this output. Valid values are whole numbers from 0 through 7. When you don't specify a value, MediaConvert defaults to 2.",
    }),
    NumberReferenceFrames: IntegerMin1Max6Schema.exactOptional().openapi({
      xml: { name: 'numberReferenceFrames' },
      description:
        'Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.',
    }),
    ParControl: H265ParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
    }),
    ParDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.',
    }),
    ParNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.',
    }),
    QualityTuningLevel: H265QualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
    }),
    QvbrSettings: H265QvbrSettingsSchema.exactOptional().openapi({
      xml: { name: 'qvbrSettings' },
      description:
        'Settings for quality-defined variable bitrate encoding with the H.265 codec. Use these settings only when you set QVBR for Rate control mode (RateControlMode).',
    }),
    RateControlMode: H265RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).',
    }),
    SampleAdaptiveOffsetFilterMode:
      H265SampleAdaptiveOffsetFilterModeSchema.exactOptional().openapi({
        xml: { name: 'sampleAdaptiveOffsetFilterMode' },
        description:
          'Specify Sample Adaptive Offset (SAO) filter strength. Adaptive mode dynamically selects best strength based on content',
      }),
    ScanTypeConversionMode: H265ScanTypeConversionModeSchema.exactOptional().openapi({
      xml: { name: 'scanTypeConversionMode' },
      description:
        "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
    }),
    SceneChangeDetect: H265SceneChangeDetectSchema.exactOptional().openapi({
      xml: { name: 'sceneChangeDetect' },
      description:
        'Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.',
    }),
    Slices: IntegerMin1Max32Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.',
    }),
    SlowPal: H265SlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    SpatialAdaptiveQuantization: H265SpatialAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'spatialAdaptiveQuantization' },
      description:
        "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
    }),
    Telecine: H265TelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'This field applies only if the Streams > Advanced > Framerate (framerate) field is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode) to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.',
    }),
    TemporalAdaptiveQuantization: H265TemporalAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'temporalAdaptiveQuantization' },
      description:
        "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).",
    }),
    TemporalIds: H265TemporalIdsSchema.exactOptional().openapi({
      xml: { name: 'temporalIds' },
      description:
        'Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.',
    }),
    Tiles: H265TilesSchema.exactOptional().openapi({
      xml: { name: 'tiles' },
      description:
        'Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.',
    }),
    UnregisteredSeiTimecode: H265UnregisteredSeiTimecodeSchema.exactOptional().openapi({
      xml: { name: 'unregisteredSeiTimecode' },
      description: 'Inserts timecode for each frame as 4 bytes of an unregistered SEI message.',
    }),
    WriteMp4PackagingType: H265WriteMp4PackagingTypeSchema.exactOptional().openapi({
      xml: { name: 'writeMp4PackagingType' },
      description:
        "If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting only with CMAF or DASH outputs, or with standalone file outputs in an MPEG-4 container (MP4 outputs). Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. For MP4 outputs, when you choose HVC1, your output video might not work properly with some downstream systems and video players. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.",
    }),
  })
  .openapi({ description: 'Settings for H265 codec', required: [] })
  .openapi('H265Settings')

const Mpeg2AdaptiveQuantizationSchema = z
  .enum(['OFF', 'LOW', 'MEDIUM', 'HIGH'])
  .openapi({
    description:
      'Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).',
  })
  .openapi('Mpeg2AdaptiveQuantization')

const IntegerMin1000Max288000000Schema = z
  .int()
  .min(1000)
  .max(288000000)
  .openapi('IntegerMin1000Max288000000')

const Mpeg2CodecLevelSchema = z
  .enum(['AUTO', 'LOW', 'MAIN', 'HIGH1440', 'HIGH'])
  .openapi({
    description: 'Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.',
  })
  .openapi('Mpeg2CodecLevel')

const Mpeg2CodecProfileSchema = z
  .enum(['MAIN', 'PROFILE_422'])
  .openapi({
    description: 'Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.',
  })
  .openapi('Mpeg2CodecProfile')

const Mpeg2DynamicSubGopSchema = z
  .enum(['ADAPTIVE', 'STATIC'])
  .openapi({
    description:
      'Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).',
  })
  .openapi('Mpeg2DynamicSubGop')

const Mpeg2FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('Mpeg2FramerateControl')

const Mpeg2FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('Mpeg2FramerateConversionAlgorithm')

const Mpeg2GopSizeUnitsSchema = z
  .enum(['FRAMES', 'SECONDS'])
  .openapi({
    description:
      "Specify the units for GOP size (GopSize). If you don't specify a value here, by default the encoder measures GOP size in frames.",
  })
  .openapi('Mpeg2GopSizeUnits')

const IntegerMin0Max47185920Schema = z.int().min(0).max(47185920).openapi('IntegerMin0Max47185920')

const Mpeg2InterlaceModeSchema = z
  .enum(['PROGRESSIVE', 'TOP_FIELD', 'BOTTOM_FIELD', 'FOLLOW_TOP_FIELD', 'FOLLOW_BOTTOM_FIELD'])
  .openapi({
    description:
      "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
  })
  .openapi('Mpeg2InterlaceMode')

const Mpeg2IntraDcPrecisionSchema = z
  .enum([
    'AUTO',
    'INTRA_DC_PRECISION_8',
    'INTRA_DC_PRECISION_9',
    'INTRA_DC_PRECISION_10',
    'INTRA_DC_PRECISION_11',
  ])
  .openapi({
    description:
      'Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.',
  })
  .openapi('Mpeg2IntraDcPrecision')

const IntegerMin1000Max300000000Schema = z
  .int()
  .min(1000)
  .max(300000000)
  .openapi('IntegerMin1000Max300000000')

const Mpeg2ParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
  })
  .openapi('Mpeg2ParControl')

const Mpeg2QualityTuningLevelSchema = z
  .enum(['SINGLE_PASS', 'MULTI_PASS'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
  })
  .openapi('Mpeg2QualityTuningLevel')

const Mpeg2RateControlModeSchema = z
  .enum(['VBR', 'CBR'])
  .openapi({
    description:
      'Use Rate control mode (Mpeg2RateControlMode) to specify whether the bitrate is variable (vbr) or constant (cbr).',
  })
  .openapi('Mpeg2RateControlMode')

const Mpeg2ScanTypeConversionModeSchema = z
  .enum(['INTERLACED', 'INTERLACED_OPTIMIZE'])
  .openapi({
    description:
      "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
  })
  .openapi('Mpeg2ScanTypeConversionMode')

const Mpeg2SceneChangeDetectSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.',
  })
  .openapi('Mpeg2SceneChangeDetect')

const Mpeg2SlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('Mpeg2SlowPal')

const Mpeg2SpatialAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
  })
  .openapi('Mpeg2SpatialAdaptiveQuantization')

const Mpeg2SyntaxSchema = z
  .enum(['DEFAULT', 'D_10'])
  .openapi({
    description:
      "Specify whether this output's video uses the D10 syntax. Keep the default value to not use the syntax. Related settings: When you choose D10 (D_10) for your MXF profile (profile), you must also set this value to D10 (D_10).",
  })
  .openapi('Mpeg2Syntax')

const Mpeg2TelecineSchema = z
  .enum(['NONE', 'SOFT', 'HARD'])
  .openapi({
    description:
      'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
  })
  .openapi('Mpeg2Telecine')

const Mpeg2TemporalAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).",
  })
  .openapi('Mpeg2TemporalAdaptiveQuantization')

const Mpeg2SettingsSchema = z
  .object({
    AdaptiveQuantization: Mpeg2AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        'Specify the strength of any adaptive quantization filters that you enable. The value that you choose here applies to the following settings: Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).',
    }),
    Bitrate: IntegerMin1000Max288000000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.',
    }),
    CodecLevel: Mpeg2CodecLevelSchema.exactOptional().openapi({
      xml: { name: 'codecLevel' },
      description: 'Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.',
    }),
    CodecProfile: Mpeg2CodecProfileSchema.exactOptional().openapi({
      xml: { name: 'codecProfile' },
      description:
        'Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.',
    }),
    DynamicSubGop: Mpeg2DynamicSubGopSchema.exactOptional().openapi({
      xml: { name: 'dynamicSubGop' },
      description:
        'Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).',
    }),
    FramerateControl: Mpeg2FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: Mpeg2FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max1001Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin24Max60000Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    GopClosedCadence: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        "Specify the relative frequency of open to closed GOPs in this output. For example, if you want to allow four open GOPs and then require a closed GOP, set this value to 5. When you create a streaming output, we recommend that you keep the default value, 1, so that players starting mid-stream receive an IDR frame as quickly as possible. Don't set this value to 0; that would break output segmenting.",
    }),
    GopSize: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        'Specify the interval between keyframes, in seconds or frames, for this output. Default: 12 Related settings: When you specify the GOP size in seconds, set GOP mode control (GopSizeUnits) to Specified, seconds (SECONDS). The default value for GOP mode control (GopSizeUnits) is Frames (FRAMES).',
    }),
    GopSizeUnits: Mpeg2GopSizeUnitsSchema.exactOptional().openapi({
      xml: { name: 'gopSizeUnits' },
      description:
        "Specify the units for GOP size (GopSize). If you don't specify a value here, by default the encoder measures GOP size in frames.",
    }),
    HrdBufferFinalFillPercentage: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferFinalFillPercentage' },
      description:
        "If your downstream systems have strict buffer requirements: Specify the minimum percentage of the HRD buffer that's available at the end of each encoded video segment. For the best video quality: Set to 0 or leave blank to automatically determine the final buffer fill percentage.",
    }),
    HrdBufferInitialFillPercentage: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferInitialFillPercentage' },
      description: 'Percentage of the buffer that should initially be filled (HRD buffer model).',
    }),
    HrdBufferSize: IntegerMin0Max47185920Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        'Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.',
    }),
    InterlaceMode: Mpeg2InterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
    }),
    IntraDcPrecision: Mpeg2IntraDcPrecisionSchema.exactOptional().openapi({
      xml: { name: 'intraDcPrecision' },
      description:
        'Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.',
    }),
    MaxBitrate: IntegerMin1000Max300000000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.',
    }),
    MinIInterval: IntegerMin0Max30Schema.exactOptional().openapi({
      xml: { name: 'minIInterval' },
      description:
        'Use this setting only when you also enable Scene change detection (SceneChangeDetect). This setting determines how the encoder manages the spacing between I-frames that it inserts as part of the I-frame cadence and the I-frames that it inserts for Scene change detection. When you specify a value for this setting, the encoder determines whether to skip a cadence-driven I-frame by the value you set. For example, if you set Min I interval (minIInterval) to 5 and a cadence-driven I-frame would fall within 5 frames of a scene-change I-frame, then the encoder skips the cadence-driven I-frame. In this way, one GOP is shrunk slightly and one GOP is stretched slightly. When the cadence-driven I-frames are farther from the scene-change I-frame than the value you set, then the encoder leaves all I-frames in place and the GOPs surrounding the scene change are smaller than the usual cadence GOPs.',
    }),
    NumberBFramesBetweenReferenceFrames: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'numberBFramesBetweenReferenceFrames' },
      description:
        "Specify the number of B-frames that MediaConvert puts between reference frames in this output. Valid values are whole numbers from 0 through 7. When you don't specify a value, MediaConvert defaults to 2.",
    }),
    ParControl: Mpeg2ParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
    }),
    ParDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.',
    }),
    ParNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.',
    }),
    QualityTuningLevel: Mpeg2QualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
    }),
    RateControlMode: Mpeg2RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'Use Rate control mode (Mpeg2RateControlMode) to specify whether the bitrate is variable (vbr) or constant (cbr).',
    }),
    ScanTypeConversionMode: Mpeg2ScanTypeConversionModeSchema.exactOptional().openapi({
      xml: { name: 'scanTypeConversionMode' },
      description:
        "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
    }),
    SceneChangeDetect: Mpeg2SceneChangeDetectSchema.exactOptional().openapi({
      xml: { name: 'sceneChangeDetect' },
      description:
        'Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.',
    }),
    SlowPal: Mpeg2SlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    Softness: IntegerMin0Max128Schema.exactOptional().openapi({
      xml: { name: 'softness' },
      description:
        "Ignore this setting unless you need to comply with a specification that requires a specific value. If you don't have a specification requirement, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, to use the AWS Elemental default matrices. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.",
    }),
    SpatialAdaptiveQuantization: Mpeg2SpatialAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'spatialAdaptiveQuantization' },
      description:
        "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
    }),
    Syntax: Mpeg2SyntaxSchema.exactOptional().openapi({
      xml: { name: 'syntax' },
      description:
        "Specify whether this output's video uses the D10 syntax. Keep the default value to not use the syntax. Related settings: When you choose D10 (D_10) for your MXF profile (profile), you must also set this value to D10 (D_10).",
    }),
    Telecine: Mpeg2TelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard or soft telecine to create a smoother picture. Hard telecine (HARD) produces a 29.97i output. Soft telecine (SOFT) produces an output with a 23.976 output that signals to the video player device to do the conversion during play back. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
    }),
    TemporalAdaptiveQuantization: Mpeg2TemporalAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'temporalAdaptiveQuantization' },
      description:
        "Keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).",
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.',
    required: [],
  })
  .openapi('Mpeg2Settings')

const ProresChromaSamplingSchema = z
  .enum(['PRESERVE_444_SAMPLING', 'SUBSAMPLE_TO_422'])
  .openapi({
    description:
      'This setting applies only to ProRes 4444 and ProRes 4444 XQ outputs that you create from inputs that use 4:4:4 chroma sampling. Set Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING) to allow outputs to also use 4:4:4 chroma sampling. You must specify a value for this setting when your output codec profile supports 4:4:4 chroma sampling. Related Settings: When you set Chroma sampling to Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING), you must choose an output codec profile that supports 4:4:4 chroma sampling. These values for Profile (CodecProfile) support 4:4:4 chroma sampling: Apple ProRes 4444 (APPLE_PRORES_4444) or Apple ProRes 4444 XQ (APPLE_PRORES_4444_XQ). When you set Chroma sampling to Preserve 4:4:4 sampling, you must disable all video preprocessors except for Nexguard file marker (PartnerWatermarking). When you set Chroma sampling to Preserve 4:4:4 sampling and use framerate conversion, you must set Frame rate conversion algorithm (FramerateConversionAlgorithm) to Drop duplicate (DUPLICATE_DROP).',
  })
  .openapi('ProresChromaSampling')

const ProresCodecProfileSchema = z
  .enum([
    'APPLE_PRORES_422',
    'APPLE_PRORES_422_HQ',
    'APPLE_PRORES_422_LT',
    'APPLE_PRORES_422_PROXY',
    'APPLE_PRORES_4444',
    'APPLE_PRORES_4444_XQ',
  ])
  .openapi({
    description:
      'Use Profile (ProResCodecProfile) to specify the type of Apple ProRes codec to use for this output.',
  })
  .openapi('ProresCodecProfile')

const ProresFramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('ProresFramerateControl')

const ProresFramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('ProresFramerateConversionAlgorithm')

const ProresInterlaceModeSchema = z
  .enum(['PROGRESSIVE', 'TOP_FIELD', 'BOTTOM_FIELD', 'FOLLOW_TOP_FIELD', 'FOLLOW_BOTTOM_FIELD'])
  .openapi({
    description:
      "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
  })
  .openapi('ProresInterlaceMode')

const ProresParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
  })
  .openapi('ProresParControl')

const ProresScanTypeConversionModeSchema = z
  .enum(['INTERLACED', 'INTERLACED_OPTIMIZE'])
  .openapi({
    description:
      "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
  })
  .openapi('ProresScanTypeConversionMode')

const ProresSlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('ProresSlowPal')

const ProresTelecineSchema = z
  .enum(['NONE', 'HARD'])
  .openapi({
    description:
      'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
  })
  .openapi('ProresTelecine')

const ProresSettingsSchema = z
  .object({
    ChromaSampling: ProresChromaSamplingSchema.exactOptional().openapi({
      xml: { name: 'chromaSampling' },
      description:
        'This setting applies only to ProRes 4444 and ProRes 4444 XQ outputs that you create from inputs that use 4:4:4 chroma sampling. Set Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING) to allow outputs to also use 4:4:4 chroma sampling. You must specify a value for this setting when your output codec profile supports 4:4:4 chroma sampling. Related Settings: When you set Chroma sampling to Preserve 4:4:4 sampling (PRESERVE_444_SAMPLING), you must choose an output codec profile that supports 4:4:4 chroma sampling. These values for Profile (CodecProfile) support 4:4:4 chroma sampling: Apple ProRes 4444 (APPLE_PRORES_4444) or Apple ProRes 4444 XQ (APPLE_PRORES_4444_XQ). When you set Chroma sampling to Preserve 4:4:4 sampling, you must disable all video preprocessors except for Nexguard file marker (PartnerWatermarking). When you set Chroma sampling to Preserve 4:4:4 sampling and use framerate conversion, you must set Frame rate conversion algorithm (FramerateConversionAlgorithm) to Drop duplicate (DUPLICATE_DROP).',
    }),
    CodecProfile: ProresCodecProfileSchema.exactOptional().openapi({
      xml: { name: 'codecProfile' },
      description:
        'Use Profile (ProResCodecProfile) to specify the type of Apple ProRes codec to use for this output.',
    }),
    FramerateControl: ProresFramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: ProresFramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    InterlaceMode: ProresInterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
    }),
    ParControl: ProresParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
    }),
    ParDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.',
    }),
    ParNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.',
    }),
    ScanTypeConversionMode: ProresScanTypeConversionModeSchema.exactOptional().openapi({
      xml: { name: 'scanTypeConversionMode' },
      description:
        "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
    }),
    SlowPal: ProresSlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output. When you enable slow PAL, MediaConvert relabels the video frames to 25 fps and resamples your audio to keep it synchronized with the video. Note that enabling this setting will slightly reduce the duration of your video. Required settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    Telecine: ProresTelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.',
    required: [],
  })
  .openapi('ProresSettings')

const Vc3FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('Vc3FramerateControl')

const Vc3FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('Vc3FramerateConversionAlgorithm')

const Vc3InterlaceModeSchema = z
  .enum(['INTERLACED', 'PROGRESSIVE'])
  .openapi({
    description:
      "Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.",
  })
  .openapi('Vc3InterlaceMode')

const Vc3ScanTypeConversionModeSchema = z
  .enum(['INTERLACED', 'INTERLACED_OPTIMIZE'])
  .openapi({
    description:
      "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
  })
  .openapi('Vc3ScanTypeConversionMode')

const Vc3SlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('Vc3SlowPal')

const Vc3TelecineSchema = z
  .enum(['NONE', 'HARD'])
  .openapi({
    description:
      'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
  })
  .openapi('Vc3Telecine')

const Vc3ClassSchema = z
  .enum(['CLASS_145_8BIT', 'CLASS_220_8BIT', 'CLASS_220_10BIT'])
  .openapi({
    description:
      'Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 (CLASS_145) gives you an output with a bitrate of approximately 145 Mbps and Class 220 (CLASS_220) gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output.',
  })
  .openapi('Vc3Class')

const Vc3SettingsSchema = z
  .object({
    FramerateControl: Vc3FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: Vc3FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max1001Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin24Max60000Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    InterlaceMode: Vc3InterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Optional. Choose the scan line type for this output. If you don't specify a value, MediaConvert will create a progressive output.",
    }),
    ScanTypeConversionMode: Vc3ScanTypeConversionModeSchema.exactOptional().openapi({
      xml: { name: 'scanTypeConversionMode' },
      description:
        "Use this setting for interlaced outputs, when your output frame rate is half of your input frame rate. In this situation, choose Optimized interlacing (INTERLACED_OPTIMIZE) to create a better quality interlaced output. In this case, each progressive frame from the input corresponds to an interlaced field in the output. Keep the default value, Basic interlacing (INTERLACED), for all other output frame rates. With basic interlacing, MediaConvert performs any frame rate conversion first and then interlaces the frames. When you choose Optimized interlacing and you set your output frame rate to a value that isn't suitable for optimized interlacing, MediaConvert automatically falls back to basic interlacing. Required settings: To use optimized interlacing, you must set Telecine (telecine) to None (NONE) or Soft (SOFT). You can't use optimized interlacing for hard telecine outputs. You must also set Interlace mode (interlaceMode) to a value other than Progressive (PROGRESSIVE).",
    }),
    SlowPal: Vc3SlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Framerate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    Telecine: Vc3TelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'When you do frame rate conversion from 23.976 frames per second (fps) to 29.97 fps, and your output scan type is interlaced, you can optionally enable hard telecine (HARD) to create a smoother picture. When you keep the default value, None (NONE), MediaConvert does a standard frame rate conversion to 29.97 without doing anything with the field polarity to create a smoother picture.',
    }),
    Vc3Class: Vc3ClassSchema.exactOptional().openapi({
      xml: { name: 'vc3Class' },
      description:
        'Specify the VC3 class to choose the quality characteristics for this output. VC3 class, together with the settings Framerate (framerateNumerator and framerateDenominator) and Resolution (height and width), determine your output bitrate. For example, say that your video resolution is 1920x1080 and your framerate is 29.97. Then Class 145 (CLASS_145) gives you an output with a bitrate of approximately 145 Mbps and Class 220 (CLASS_220) gives you and output with a bitrate of approximately 220 Mbps. VC3 class also specifies the color bit depth of your output.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3',
    required: [],
  })
  .openapi('Vc3Settings')

const Vp8FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('Vp8FramerateControl')

const Vp8FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('Vp8FramerateConversionAlgorithm')

const Vp8ParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
  })
  .openapi('Vp8ParControl')

const Vp8QualityTuningLevelSchema = z
  .enum(['MULTI_PASS', 'MULTI_PASS_HQ'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.',
  })
  .openapi('Vp8QualityTuningLevel')

const Vp8RateControlModeSchema = z
  .literal('VBR')
  .openapi({
    description:
      'With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.',
  })
  .openapi('Vp8RateControlMode')

const Vp8SettingsSchema = z
  .object({
    Bitrate: IntegerMin1000Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Target bitrate in bits/second. For example, enter five megabits per second as 5000000.',
    }),
    FramerateControl: Vp8FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: Vp8FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    GopSize: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description: 'GOP Length (keyframe interval) in frames. Must be greater than zero.',
    }),
    HrdBufferSize: IntegerMin0Max47185920Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        'Optional. Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.',
    }),
    MaxBitrate: IntegerMin1000Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.',
    }),
    ParControl: Vp8ParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
    }),
    ParDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.',
    }),
    ParNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.',
    }),
    QualityTuningLevel: Vp8QualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.',
    }),
    RateControlMode: Vp8RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'With the VP8 codec, you can use only the variable bitrate (VBR) rate control mode.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.',
    required: [],
  })
  .openapi('Vp8Settings')

const IntegerMin1000Max480000000Schema = z
  .int()
  .min(1000)
  .max(480000000)
  .openapi('IntegerMin1000Max480000000')

const Vp9FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('Vp9FramerateControl')

const Vp9FramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('Vp9FramerateConversionAlgorithm')

const Vp9ParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'Optional. Specify how the service determines the pixel aspect ratio (PAR) for this output. The default behavior, Follow source (INITIALIZE_FROM_SOURCE), uses the PAR from your input video for your output. To specify a different PAR in the console, choose any value other than Follow source. To specify a different PAR by editing the JSON job specification, choose SPECIFIED. When you choose SPECIFIED for this setting, you must also specify values for the parNumerator and parDenominator settings.',
  })
  .openapi('Vp9ParControl')

const Vp9QualityTuningLevelSchema = z
  .enum(['MULTI_PASS', 'MULTI_PASS_HQ'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.',
  })
  .openapi('Vp9QualityTuningLevel')

const Vp9RateControlModeSchema = z
  .literal('VBR')
  .openapi({
    description:
      'With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.',
  })
  .openapi('Vp9RateControlMode')

const Vp9SettingsSchema = z
  .object({
    Bitrate: IntegerMin1000Max480000000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Target bitrate in bits/second. For example, enter five megabits per second as 5000000.',
    }),
    FramerateControl: Vp9FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: Vp9FramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    GopSize: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description: 'GOP Length (keyframe interval) in frames. Must be greater than zero.',
    }),
    HrdBufferSize: IntegerMin0Max47185920Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        'Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.',
    }),
    MaxBitrate: IntegerMin1000Max480000000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'Ignore this setting unless you set qualityTuningLevel to MULTI_PASS. Optional. Specify the maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. The default behavior uses twice the target bitrate as the maximum bitrate.',
    }),
    ParControl: Vp9ParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'Optional. Specify how the service determines the pixel aspect ratio for this output. The default behavior is to use the same pixel aspect ratio as your input video.',
    }),
    ParDenominator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parDenominator is 33.',
    }),
    ParNumerator: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description:
        'Required when you set Pixel aspect ratio (parControl) to SPECIFIED. On the console, this corresponds to any value other than Follow source. When you specify an output pixel aspect ratio (PAR) that is different from your input video PAR, provide your output PAR as a ratio. For example, for D1/DV NTSC widescreen, you would specify the ratio 40:33. In this example, the value for parNumerator is 40.',
    }),
    QualityTuningLevel: Vp9QualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, multi-pass encoding.',
    }),
    RateControlMode: Vp9RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'With the VP9 codec, you can use only the variable bitrate (VBR) rate control mode.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.',
    required: [],
  })
  .openapi('Vp9Settings')

const XavcAdaptiveQuantizationSchema = z
  .enum(['OFF', 'AUTO', 'LOW', 'MEDIUM', 'HIGH', 'HIGHER', 'MAX'])
  .openapi({
    description:
      "Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set Adaptive quantization (adaptiveQuantization) to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off (OFF). Related settings: The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).",
  })
  .openapi('XavcAdaptiveQuantization')

const XavcEntropyEncodingSchema = z
  .enum(['AUTO', 'CABAC', 'CAVLC'])
  .openapi({
    description:
      "Optional. Choose a specific entropy encoding mode only when you want to override XAVC recommendations. If you choose the value auto, MediaConvert uses the mode that the XAVC file format specifies given this output's operating point.",
  })
  .openapi('XavcEntropyEncoding')

const XavcFramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({
    description:
      'If you are using the console, use the Frame rate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list. The framerates shown in the dropdown list are decimal approximations of fractions. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate that you specify in the settings FramerateNumerator and FramerateDenominator.',
  })
  .openapi('XavcFramerateControl')

const XavcFramerateConversionAlgorithmSchema = z
  .enum(['DUPLICATE_DROP', 'INTERPOLATE', 'FRAMEFORMER'])
  .openapi({
    description:
      'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
  })
  .openapi('XavcFramerateConversionAlgorithm')

const XavcProfileSchema = z
  .enum(['XAVC_HD_INTRA_CBG', 'XAVC_4K_INTRA_CBG', 'XAVC_4K_INTRA_VBR', 'XAVC_HD', 'XAVC_4K'])
  .openapi({
    description:
      "Specify the XAVC profile for this output. For more information, see the Sony documentation at https://www.xavc-info.org/. Note that MediaConvert doesn't support the interlaced video XAVC operating points for XAVC_HD_INTRA_CBG. To create an interlaced XAVC output, choose the profile XAVC_HD.",
  })
  .openapi('XavcProfile')

const XavcSlowPalSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Frame rate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
  })
  .openapi('XavcSlowPal')

const XavcSpatialAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
  })
  .openapi('XavcSpatialAdaptiveQuantization')

const XavcTemporalAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal adaptive quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).",
  })
  .openapi('XavcTemporalAdaptiveQuantization')

const Xavc4kIntraCbgProfileClassSchema = z
  .enum(['CLASS_100', 'CLASS_300', 'CLASS_480'])
  .openapi({
    description:
      'Specify the XAVC Intra 4k (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
  })
  .openapi('Xavc4kIntraCbgProfileClass')

const Xavc4kIntraCbgProfileSettingsSchema = z
  .object({
    XavcClass: Xavc4kIntraCbgProfileClassSchema.exactOptional().openapi({
      xml: { name: 'xavcClass' },
      description:
        'Specify the XAVC Intra 4k (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_CBG.',
    required: [],
  })
  .openapi('Xavc4kIntraCbgProfileSettings')

const Xavc4kIntraVbrProfileClassSchema = z
  .enum(['CLASS_100', 'CLASS_300', 'CLASS_480'])
  .openapi({
    description:
      'Specify the XAVC Intra 4k (VBR) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
  })
  .openapi('Xavc4kIntraVbrProfileClass')

const Xavc4kIntraVbrProfileSettingsSchema = z
  .object({
    XavcClass: Xavc4kIntraVbrProfileClassSchema.exactOptional().openapi({
      xml: { name: 'xavcClass' },
      description:
        'Specify the XAVC Intra 4k (VBR) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_VBR.',
    required: [],
  })
  .openapi('Xavc4kIntraVbrProfileSettings')

const Xavc4kProfileBitrateClassSchema = z
  .enum(['BITRATE_CLASS_100', 'BITRATE_CLASS_140', 'BITRATE_CLASS_200'])
  .openapi({
    description:
      'Specify the XAVC 4k (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
  })
  .openapi('Xavc4kProfileBitrateClass')

const Xavc4kProfileCodecProfileSchema = z
  .enum(['HIGH', 'HIGH_422'])
  .openapi({
    description:
      'Specify the codec profile for this output. Choose High, 8-bit, 4:2:0 (HIGH) or High, 10-bit, 4:2:2 (HIGH_422). These profiles are specified in ITU-T H.264.',
  })
  .openapi('Xavc4kProfileCodecProfile')

const XavcFlickerAdaptiveQuantizationSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.',
  })
  .openapi('XavcFlickerAdaptiveQuantization')

const XavcGopBReferenceSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      "Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.",
  })
  .openapi('XavcGopBReference')

const Xavc4kProfileQualityTuningLevelSchema = z
  .enum(['SINGLE_PASS', 'SINGLE_PASS_HQ', 'MULTI_PASS_HQ'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
  })
  .openapi('Xavc4kProfileQualityTuningLevel')

const IntegerMin8Max12Schema = z.int().min(8).max(12).openapi('IntegerMin8Max12')

const Xavc4kProfileSettingsSchema = z
  .object({
    BitrateClass: Xavc4kProfileBitrateClassSchema.exactOptional().openapi({
      xml: { name: 'bitrateClass' },
      description:
        'Specify the XAVC 4k (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
    }),
    CodecProfile: Xavc4kProfileCodecProfileSchema.exactOptional().openapi({
      xml: { name: 'codecProfile' },
      description:
        'Specify the codec profile for this output. Choose High, 8-bit, 4:2:0 (HIGH) or High, 10-bit, 4:2:2 (HIGH_422). These profiles are specified in ITU-T H.264.',
    }),
    FlickerAdaptiveQuantization: XavcFlickerAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'flickerAdaptiveQuantization' },
      description:
        'The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.',
    }),
    GopBReference: XavcGopBReferenceSchema.exactOptional().openapi({
      xml: { name: 'gopBReference' },
      description:
        "Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.",
    }),
    GopClosedCadence: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        'Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.',
    }),
    HrdBufferSize: IntegerMin0Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        "Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.",
    }),
    QualityTuningLevel: Xavc4kProfileQualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
    }),
    Slices: IntegerMin8Max12Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K.',
    required: [],
  })
  .openapi('Xavc4kProfileSettings')

const XavcHdIntraCbgProfileClassSchema = z
  .enum(['CLASS_50', 'CLASS_100', 'CLASS_200'])
  .openapi({
    description:
      'Specify the XAVC Intra HD (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
  })
  .openapi('XavcHdIntraCbgProfileClass')

const XavcHdIntraCbgProfileSettingsSchema = z
  .object({
    XavcClass: XavcHdIntraCbgProfileClassSchema.exactOptional().openapi({
      xml: { name: 'xavcClass' },
      description:
        'Specify the XAVC Intra HD (CBG) Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD_INTRA_CBG.',
    required: [],
  })
  .openapi('XavcHdIntraCbgProfileSettings')

const XavcHdProfileBitrateClassSchema = z
  .enum(['BITRATE_CLASS_25', 'BITRATE_CLASS_35', 'BITRATE_CLASS_50'])
  .openapi({
    description:
      'Specify the XAVC HD (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
  })
  .openapi('XavcHdProfileBitrateClass')

const XavcInterlaceModeSchema = z
  .enum(['PROGRESSIVE', 'TOP_FIELD', 'BOTTOM_FIELD', 'FOLLOW_TOP_FIELD', 'FOLLOW_BOTTOM_FIELD'])
  .openapi({
    description:
      "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
  })
  .openapi('XavcInterlaceMode')

const XavcHdProfileQualityTuningLevelSchema = z
  .enum(['SINGLE_PASS', 'SINGLE_PASS_HQ', 'MULTI_PASS_HQ'])
  .openapi({
    description:
      'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
  })
  .openapi('XavcHdProfileQualityTuningLevel')

const IntegerMin4Max12Schema = z.int().min(4).max(12).openapi('IntegerMin4Max12')

const XavcHdProfileTelecineSchema = z
  .enum(['NONE', 'HARD'])
  .openapi({
    description:
      'Ignore this setting unless you set Frame rate (framerateNumerator divided by framerateDenominator) to 29.970. If your input framerate is 23.976, choose Hard (HARD). Otherwise, keep the default value None (NONE). For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-telecine-and-inverse-telecine.html.',
  })
  .openapi('XavcHdProfileTelecine')

const XavcHdProfileSettingsSchema = z
  .object({
    BitrateClass: XavcHdProfileBitrateClassSchema.exactOptional().openapi({
      xml: { name: 'bitrateClass' },
      description:
        'Specify the XAVC HD (Long GOP) Bitrate Class to set the bitrate of your output. Outputs of the same class have similar image quality over the operating points that are valid for that class.',
    }),
    FlickerAdaptiveQuantization: XavcFlickerAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'flickerAdaptiveQuantization' },
      description:
        'The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (XavcAdaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. Enable this setting to have the encoder reduce I-frame pop. I-frame pop appears as a visual flicker that can arise when the encoder saves bits by copying some macroblocks many times from frame to frame, and then refreshes them at the I-frame. When you enable this setting, the encoder updates these macroblocks slightly more often to smooth out the flicker. This setting is disabled by default. Related setting: In addition to enabling this setting, you must also set Adaptive quantization (adaptiveQuantization) to a value other than Off (OFF) or Auto (AUTO). Use Adaptive quantization to adjust the degree of smoothing that Flicker adaptive quantization provides.',
    }),
    GopBReference: XavcGopBReferenceSchema.exactOptional().openapi({
      xml: { name: 'gopBReference' },
      description:
        "Specify whether the encoder uses B-frames as reference frames for other pictures in the same GOP. Choose Allow (ENABLED) to allow the encoder to use B-frames as reference frames. Choose Don't allow (DISABLED) to prevent the encoder from using B-frames as reference frames.",
    }),
    GopClosedCadence: IntegerMin0Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        'Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.',
    }),
    HrdBufferSize: IntegerMin0Max1152000000Schema.exactOptional().openapi({
      xml: { name: 'hrdBufferSize' },
      description:
        "Specify the size of the buffer that MediaConvert uses in the HRD buffer model for this output. Specify this value in bits; for example, enter five megabits as 5000000. When you don't set this value, or you set it to zero, MediaConvert calculates the default by doubling the bitrate of this output point.",
    }),
    InterlaceMode: XavcInterlaceModeSchema.exactOptional().openapi({
      xml: { name: 'interlaceMode' },
      description:
        "Choose the scan line type for the output. Keep the default value, Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Use Top field first (TOP_FIELD) or Bottom field first (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Use Follow, default top (FOLLOW_TOP_FIELD) or Follow, default bottom (FOLLOW_BOTTOM_FIELD) to produce outputs with the same field polarity as the source. For jobs that have multiple inputs, the output field polarity might change over the course of the output. Follow behavior depends on the input scan type. If the source is interlaced, the output will be interlaced with the same polarity as the source. If the source is progressive, the output will be interlaced with top field bottom field first, depending on which of the Follow options you choose.",
    }),
    QualityTuningLevel: XavcHdProfileQualityTuningLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityTuningLevel' },
      description:
        'Optional. Use Quality tuning level (qualityTuningLevel) to choose how you want to trade off encoding speed for output video quality. The default behavior is faster, lower quality, single-pass encoding.',
    }),
    Slices: IntegerMin4Max12Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.',
    }),
    Telecine: XavcHdProfileTelecineSchema.exactOptional().openapi({
      xml: { name: 'telecine' },
      description:
        'Ignore this setting unless you set Frame rate (framerateNumerator divided by framerateDenominator) to 29.970. If your input framerate is 23.976, choose Hard (HARD). Otherwise, keep the default value None (NONE). For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-telecine-and-inverse-telecine.html.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD.',
    required: [],
  })
  .openapi('XavcHdProfileSettings')

const XavcSettingsSchema = z
  .object({
    AdaptiveQuantization: XavcAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        "Keep the default value, Auto (AUTO), for this setting to have MediaConvert automatically apply the best types of quantization for your video content. When you want to apply your quantization settings manually, you must set Adaptive quantization (adaptiveQuantization) to a value other than Auto (AUTO). Use this setting to specify the strength of any adaptive quantization filters that you enable. If you don't want MediaConvert to do any adaptive quantization in this transcode, set Adaptive quantization to Off (OFF). Related settings: The value that you choose here applies to the following settings: Flicker adaptive quantization (flickerAdaptiveQuantization), Spatial adaptive quantization (spatialAdaptiveQuantization), and Temporal adaptive quantization (temporalAdaptiveQuantization).",
    }),
    EntropyEncoding: XavcEntropyEncodingSchema.exactOptional().openapi({
      xml: { name: 'entropyEncoding' },
      description:
        "Optional. Choose a specific entropy encoding mode only when you want to override XAVC recommendations. If you choose the value auto, MediaConvert uses the mode that the XAVC file format specifies given this output's operating point.",
    }),
    FramerateControl: XavcFramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'If you are using the console, use the Frame rate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list. The framerates shown in the dropdown list are decimal approximations of fractions. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate that you specify in the settings FramerateNumerator and FramerateDenominator.',
    }),
    FramerateConversionAlgorithm: XavcFramerateConversionAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'framerateConversionAlgorithm' },
      description:
        'Choose the method that you want MediaConvert to use when increasing or decreasing the frame rate. We recommend using drop duplicate (DUPLICATE_DROP) for numerically simple conversions, such as 60 fps to 30 fps. For numerically complex conversions, you can use interpolate (INTERPOLATE) to avoid stutter. This results in a smooth picture, but might introduce undesirable video artifacts. For complex frame rate conversions, especially if your source video has already been converted from its original cadence, use FrameFormer (FRAMEFORMER) to do motion-compensated interpolation. FrameFormer chooses the best conversion method frame by frame. Note that using FrameFormer increases the transcoding time and incurs a significant add-on cost.',
    }),
    FramerateDenominator: IntegerMin1Max1001Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Frame rate. In this example, specify 23.976.',
    }),
    FramerateNumerator: IntegerMin24Max60000Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example, 24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.',
    }),
    Profile: XavcProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description:
        "Specify the XAVC profile for this output. For more information, see the Sony documentation at https://www.xavc-info.org/. Note that MediaConvert doesn't support the interlaced video XAVC operating points for XAVC_HD_INTRA_CBG. To create an interlaced XAVC output, choose the profile XAVC_HD.",
    }),
    SlowPal: XavcSlowPalSchema.exactOptional().openapi({
      xml: { name: 'slowPal' },
      description:
        'Ignore this setting unless your input frame rate is 23.976 or 24 frames per second (fps). Enable slow PAL to create a 25 fps output by relabeling the video frames and resampling your audio. Note that enabling this setting will slightly reduce the duration of your video. Related settings: You must also set Frame rate to 25. In your JSON job specification, set (framerateControl) to (SPECIFIED), (framerateNumerator) to 25 and (framerateDenominator) to 1.',
    }),
    Softness: IntegerMin0Max128Schema.exactOptional().openapi({
      xml: { name: 'softness' },
      description:
        'Ignore this setting unless your downstream workflow requires that you specify it explicitly. Otherwise, we recommend that you adjust the softness of your output by using a lower value for the setting Sharpness (sharpness) or by enabling a noise reducer filter (noiseReducerFilter). The Softness (softness) setting specifies the quantization matrices that the encoder uses. Keep the default value, 0, for flat quantization. Choose the value 1 or 16 to use the default JVT softening quantization matricies from the H.264 specification. Choose a value from 17 to 128 to use planar interpolation. Increasing values from 17 to 128 result in increasing reduction of high-frequency data. The value 128 results in the softest video.',
    }),
    SpatialAdaptiveQuantization: XavcSpatialAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'spatialAdaptiveQuantization' },
      description:
        "The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on spatial variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas that can sustain more distortion with no noticeable visual degradation and uses more bits on areas where any small distortion will be noticeable. For example, complex textured blocks are encoded with fewer bits and smooth textured blocks are encoded with more bits. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen with a lot of complex texture, you might choose to disable this feature. Related setting: When you enable spatial adaptive quantization, set the value for Adaptive quantization (adaptiveQuantization) depending on your content. For homogeneous content, such as cartoons and video games, set it to Low. For content with a wider variety of textures, set it to High or Higher.",
    }),
    TemporalAdaptiveQuantization: XavcTemporalAdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'temporalAdaptiveQuantization' },
      description:
        "The best way to set up adaptive quantization is to keep the default value, Auto (AUTO), for the setting Adaptive quantization (adaptiveQuantization). When you do so, MediaConvert automatically applies the best types of quantization for your video content. Include this setting in your JSON job specification only when you choose to change the default value for Adaptive quantization. For this setting, keep the default value, Enabled (ENABLED), to adjust quantization within each frame based on temporal variation of content complexity. When you enable this feature, the encoder uses fewer bits on areas of the frame that aren't moving and uses more bits on complex objects with sharp edges that move a lot. For example, this feature improves the readability of text tickers on newscasts and scoreboards on sports matches. Enabling this feature will almost always improve your video quality. Note, though, that this feature doesn't take into account where the viewer's attention is likely to be. If viewers are likely to be focusing their attention on a part of the screen that doesn't have moving objects with sharp edges, such as sports athletes' faces, you might choose to disable this feature. Related setting: When you enable temporal adaptive quantization, adjust the strength of the filter with the setting Adaptive quantization (adaptiveQuantization).",
    }),
    Xavc4kIntraCbgProfileSettings: Xavc4kIntraCbgProfileSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavc4kIntraCbgProfileSettings' },
      description:
        'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_CBG.',
    }),
    Xavc4kIntraVbrProfileSettings: Xavc4kIntraVbrProfileSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavc4kIntraVbrProfileSettings' },
      description:
        'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K_INTRA_VBR.',
    }),
    Xavc4kProfileSettings: Xavc4kProfileSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavc4kProfileSettings' },
      description:
        'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_4K.',
    }),
    XavcHdIntraCbgProfileSettings: XavcHdIntraCbgProfileSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavcHdIntraCbgProfileSettings' },
      description:
        'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD_INTRA_CBG.',
    }),
    XavcHdProfileSettings: XavcHdProfileSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavcHdProfileSettings' },
      description:
        'Required when you set (Profile) under (VideoDescription)>(CodecSettings)>(XavcSettings) to the value XAVC_HD.',
    }),
  })
  .openapi({
    description:
      'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value XAVC.',
    required: [],
  })
  .openapi('XavcSettings')

const VideoCodecSettingsSchema = z
  .object({
    Av1Settings: Av1SettingsSchema.exactOptional().openapi({
      xml: { name: 'av1Settings' },
      description:
        'Required when you set Codec, under VideoDescription>CodecSettings to the value AV1.',
    }),
    AvcIntraSettings: AvcIntraSettingsSchema.exactOptional().openapi({
      xml: { name: 'avcIntraSettings' },
      description:
        'Required when you choose AVC-Intra for your output video codec. For more information about the AVC-Intra settings, see the relevant specification. For detailed information about SD and HD in AVC-Intra, see https://ieeexplore.ieee.org/document/7290936. For information about 4K/2K in AVC-Intra, see https://pro-av.panasonic.net/en/avc-ultra/AVC-ULTRAoverview.pdf.',
    }),
    Codec: VideoCodecSchema.exactOptional().openapi({
      xml: { name: 'codec' },
      description:
        'Specifies the video codec. This must be equal to one of the enum values defined by the object VideoCodec.',
    }),
    FrameCaptureSettings: FrameCaptureSettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureSettings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.',
    }),
    H264Settings: H264SettingsSchema.exactOptional().openapi({
      xml: { name: 'h264Settings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.',
    }),
    H265Settings: H265SettingsSchema.exactOptional().openapi({
      xml: { name: 'h265Settings' },
      description: 'Settings for H265 codec',
    }),
    Mpeg2Settings: Mpeg2SettingsSchema.exactOptional().openapi({
      xml: { name: 'mpeg2Settings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.',
    }),
    ProresSettings: ProresSettingsSchema.exactOptional().openapi({
      xml: { name: 'proresSettings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.',
    }),
    Vc3Settings: Vc3SettingsSchema.exactOptional().openapi({
      xml: { name: 'vc3Settings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VC3',
    }),
    Vp8Settings: Vp8SettingsSchema.exactOptional().openapi({
      xml: { name: 'vp8Settings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP8.',
    }),
    Vp9Settings: Vp9SettingsSchema.exactOptional().openapi({
      xml: { name: 'vp9Settings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value VP9.',
    }),
    XavcSettings: XavcSettingsSchema.exactOptional().openapi({
      xml: { name: 'xavcSettings' },
      description:
        'Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value XAVC.',
    }),
  })
  .openapi({
    description:
      'Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings',
    required: [],
  })
  .openapi('VideoCodecSettings')

const ColorMetadataSchema = z
  .enum(['IGNORE', 'INSERT'])
  .openapi({
    description:
      "Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.",
  })
  .openapi('ColorMetadata')

const DropFrameTimecodeSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.',
  })
  .openapi('DropFrameTimecode')

const RespondToAfdSchema = z
  .enum(['NONE', 'RESPOND', 'PASSTHROUGH'])
  .openapi({
    description:
      'Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.',
  })
  .openapi('RespondToAfd')

const ScalingBehaviorSchema = z
  .enum(['DEFAULT', 'STRETCH_TO_OUTPUT'])
  .openapi({
    description:
      'Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.',
  })
  .openapi('ScalingBehavior')

const VideoTimecodeInsertionSchema = z
  .enum(['DISABLED', 'PIC_TIMING_SEI'])
  .openapi({
    description:
      'Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.',
  })
  .openapi('VideoTimecodeInsertion')

const IntegerMin90Max105Schema = z.int().min(90).max(105).openapi('IntegerMin90Max105')

const IntegerMin920Max1023Schema = z.int().min(920).max(1023).openapi('IntegerMin920Max1023')

const IntegerMinNegative5Max10Schema = z.int().min(-5).max(10).openapi('IntegerMinNegative5Max10')

const ClipLimitsSchema = z
  .object({
    MaximumRGBTolerance: IntegerMin90Max105Schema.exactOptional().openapi({
      xml: { name: 'maximumRGBTolerance' },
      description:
        'Specify the Maximum RGB color sample range tolerance for your output. MediaConvert corrects any YUV values that, when converted to RGB, would be outside the upper tolerance that you specify. Enter an integer from 90 to 105 as an offset percentage to the maximum possible value. Leave blank to use the default value 100. When you specify a value for Maximum RGB tolerance, you must set Sample range conversion to Limited range clip.',
    }),
    MaximumYUV: IntegerMin920Max1023Schema.exactOptional().openapi({
      xml: { name: 'maximumYUV' },
      description:
        'Specify the Maximum YUV color sample limit. MediaConvert conforms any pixels in your input above the value that you specify to typical limited range bounds. Enter an integer from 920 to 1023. Leave blank to use the default value 940. The value that you enter applies to 10-bit ranges. For 8-bit ranges, MediaConvert automatically scales this value down. When you specify a value for Maximum YUV, you must set Sample range conversion to Limited range clip.',
    }),
    MinimumRGBTolerance: IntegerMinNegative5Max10Schema.exactOptional().openapi({
      xml: { name: 'minimumRGBTolerance' },
      description:
        'Specify the Minimum RGB color sample range tolerance for your output. MediaConvert corrects any YUV values that, when converted to RGB, would be outside the lower tolerance that you specify. Enter an integer from -5 to 10 as an offset percentage to the minimum possible value. Leave blank to use the default value 0. When you specify a value for Minimum RGB tolerance, you must set Sample range conversion to Limited range clip.',
    }),
    MinimumYUV: IntegerMin0Max128Schema.exactOptional().openapi({
      xml: { name: 'minimumYUV' },
      description:
        'Specify the Minimum YUV color sample limit. MediaConvert conforms any pixels in your input below the value that you specify to typical limited range bounds. Enter an integer from 0 to 128. Leave blank to use the default value 64. The value that you enter applies to 10-bit ranges. For 8-bit ranges, MediaConvert automatically scales this value down. When you specify a value for Minumum YUV, you must set Sample range conversion to Limited range clip.',
    }),
  })
  .openapi({
    description:
      'Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip.',
    required: [],
  })
  .openapi('ClipLimits')

const ColorSpaceConversionSchema = z
  .enum([
    'NONE',
    'FORCE_601',
    'FORCE_709',
    'FORCE_HDR10',
    'FORCE_HLG_2020',
    'FORCE_P3DCI',
    'FORCE_P3D65_SDR',
    'FORCE_P3D65_HDR',
  ])
  .openapi({
    description:
      "Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses tone mapping to approximate the outcome of manually regrading from HDR to SDR. When you specify an output color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:\n  * HDR 10: BT.2020, PQ, BT.2020 non-constant\n  * HLG 2020: BT.2020, HLG, BT.2020 non-constant\n  * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709\n  * P3D65 (SDR): Display P3, sRGB, BT.709\n  * P3D65 (HDR): Display P3, PQ, BT.709",
  })
  .openapi('ColorSpaceConversion')

const HDRToSDRToneMapperSchema = z
  .enum(['PRESERVE_DETAILS', 'VIBRANT'])
  .openapi({
    description:
      'Specify how MediaConvert maps brightness and colors from your HDR input to your SDR output. The mode that you select represents a creative choice, with different tradeoffs in the details and tones of your output. To maintain details in bright or saturated areas of your output: Choose Preserve details. For some sources, your SDR output may look less bright and less saturated when compared to your HDR source. MediaConvert automatically applies this mode for HLG sources, regardless of your choice. For a bright and saturated output: Choose Vibrant. We recommend that you choose this mode when any of your source content is HDR10, and for the best results when it is mastered for 1000 nits. You may notice loss of details in bright or saturated areas of your output. HDR to SDR tone mapping has no effect when your input is SDR.',
  })
  .openapi('HDRToSDRToneMapper')

const IntegerMinNegative180Max180Schema = z
  .int()
  .min(-180)
  .max(180)
  .openapi('IntegerMinNegative180Max180')

const SampleRangeConversionSchema = z
  .enum(['LIMITED_RANGE_SQUEEZE', 'NONE', 'LIMITED_RANGE_CLIP'])
  .openapi({
    description:
      'Specify how MediaConvert limits the color sample range for this output. To create a limited range output from a full range input: Choose Limited range squeeze. For full range inputs, MediaConvert performs a linear offset to color samples equally across all pixels and frames. Color samples in 10-bit outputs are limited to 64 through 940, and 8-bit outputs are limited to 16 through 235. Note: For limited range inputs, values for color samples are passed through to your output unchanged. MediaConvert does not limit the sample range. To correct pixels in your input that are out of range or out of gamut: Choose Limited range clip. Use for broadcast applications. MediaConvert conforms any pixels outside of the values that you specify under Minimum YUV and Maximum YUV to limited range bounds. MediaConvert also corrects any YUV values that, when converted to RGB, would be outside the bounds you specify under Minimum RGB tolerance and Maximum RGB tolerance. With either limited range conversion, MediaConvert writes the sample range metadata in the output.',
  })
  .openapi('SampleRangeConversion')

const ColorCorrectorSchema = z
  .object({
    Brightness: IntegerMin1Max100Schema.exactOptional().openapi({
      xml: { name: 'brightness' },
      description: 'Brightness level.',
    }),
    ClipLimits: ClipLimitsSchema.exactOptional().openapi({
      xml: { name: 'clipLimits' },
      description:
        'Specify YUV limits and RGB tolerances when you set Sample range conversion to Limited range clip.',
    }),
    ColorSpaceConversion: ColorSpaceConversionSchema.exactOptional().openapi({
      xml: { name: 'colorSpaceConversion' },
      description:
        "Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, from SDR to HDR, and from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output. HDR to SDR conversion uses tone mapping to approximate the outcome of manually regrading from HDR to SDR. When you specify an output color space, MediaConvert uses the following color space metadata, which includes color primaries, transfer characteristics, and matrix coefficients:\n  * HDR 10: BT.2020, PQ, BT.2020 non-constant\n  * HLG 2020: BT.2020, HLG, BT.2020 non-constant\n  * P3DCI (Theater): DCIP3, SMPTE 428M, BT.709\n  * P3D65 (SDR): Display P3, sRGB, BT.709\n  * P3D65 (HDR): Display P3, PQ, BT.709",
    }),
    Contrast: IntegerMin1Max100Schema.exactOptional().openapi({
      xml: { name: 'contrast' },
      description: 'Contrast level.',
    }),
    Hdr10Metadata: Hdr10MetadataSchema.exactOptional().openapi({
      xml: { name: 'hdr10Metadata' },
      description:
        "Use these settings when you convert to the HDR 10 color space. Specify the SMPTE ST 2086 Mastering Display Color Volume static metadata that you want signaled in the output. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. When you set Color space conversion (ColorSpaceConversion) to HDR 10 (FORCE_HDR10), these settings are required. You must set values for Max frame average light level (maxFrameAverageLightLevel) and Max content light level (maxContentLightLevel); these settings don't have a default value. The default values for the other HDR 10 metadata settings are defined by the P3D65 color space. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.",
    }),
    HdrToSdrToneMapper: HDRToSDRToneMapperSchema.exactOptional().openapi({
      xml: { name: 'hdrToSdrToneMapper' },
      description:
        'Specify how MediaConvert maps brightness and colors from your HDR input to your SDR output. The mode that you select represents a creative choice, with different tradeoffs in the details and tones of your output. To maintain details in bright or saturated areas of your output: Choose Preserve details. For some sources, your SDR output may look less bright and less saturated when compared to your HDR source. MediaConvert automatically applies this mode for HLG sources, regardless of your choice. For a bright and saturated output: Choose Vibrant. We recommend that you choose this mode when any of your source content is HDR10, and for the best results when it is mastered for 1000 nits. You may notice loss of details in bright or saturated areas of your output. HDR to SDR tone mapping has no effect when your input is SDR.',
    }),
    Hue: IntegerMinNegative180Max180Schema.exactOptional().openapi({
      xml: { name: 'hue' },
      description: 'Hue in degrees.',
    }),
    SampleRangeConversion: SampleRangeConversionSchema.exactOptional().openapi({
      xml: { name: 'sampleRangeConversion' },
      description:
        'Specify how MediaConvert limits the color sample range for this output. To create a limited range output from a full range input: Choose Limited range squeeze. For full range inputs, MediaConvert performs a linear offset to color samples equally across all pixels and frames. Color samples in 10-bit outputs are limited to 64 through 940, and 8-bit outputs are limited to 16 through 235. Note: For limited range inputs, values for color samples are passed through to your output unchanged. MediaConvert does not limit the sample range. To correct pixels in your input that are out of range or out of gamut: Choose Limited range clip. Use for broadcast applications. MediaConvert conforms any pixels outside of the values that you specify under Minimum YUV and Maximum YUV to limited range bounds. MediaConvert also corrects any YUV values that, when converted to RGB, would be outside the bounds you specify under Minimum RGB tolerance and Maximum RGB tolerance. With either limited range conversion, MediaConvert writes the sample range metadata in the output.',
    }),
    Saturation: IntegerMin1Max100Schema.exactOptional().openapi({
      xml: { name: 'saturation' },
      description: 'Saturation level.',
    }),
    SdrReferenceWhiteLevel: IntegerMin100Max1000Schema.exactOptional().openapi({
      xml: { name: 'sdrReferenceWhiteLevel' },
      description:
        'Specify the reference white level, in nits, for all of your SDR inputs. Use to correct brightness levels within HDR10 outputs. The following color metadata must be present in your SDR input: color primaries, transfer characteristics, and matrix coefficients. If your SDR input has missing color metadata, or if you want to correct input color metadata, manually specify a color space in the input video selector. For 1,000 nit peak brightness displays, we recommend that you set SDR reference white level to 203 (according to ITU-R BT.2408). Leave blank to use the default value of 100, or specify an integer from 100 to 1000.',
    }),
  })
  .openapi({ description: 'Settings for color correction.', required: [] })
  .openapi('ColorCorrector')

const DeinterlaceAlgorithmSchema = z
  .enum(['INTERPOLATE', 'INTERPOLATE_TICKER', 'BLEND', 'BLEND_TICKER'])
  .openapi({
    description:
      'Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.',
  })
  .openapi('DeinterlaceAlgorithm')

const DeinterlacerControlSchema = z
  .enum(['FORCE_ALL_FRAMES', 'NORMAL'])
  .openapi({
    description:
      '- When set to NORMAL (default), the deinterlacer does not convert frames that are tagged in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is a good chance that the metadata has tagged frames as progressive when they are not progressive. Do not turn on otherwise; processing frames that are already progressive into progressive will probably result in lower quality video.',
  })
  .openapi('DeinterlacerControl')

const DeinterlacerModeSchema = z
  .enum(['DEINTERLACE', 'INVERSE_TELECINE', 'ADAPTIVE'])
  .openapi({
    description:
      'Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.',
  })
  .openapi('DeinterlacerMode')

const DeinterlacerSchema = z
  .object({
    Algorithm: DeinterlaceAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'algorithm' },
      description:
        'Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.',
    }),
    Control: DeinterlacerControlSchema.exactOptional().openapi({
      xml: { name: 'control' },
      description:
        '- When set to NORMAL (default), the deinterlacer does not convert frames that are tagged in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is a good chance that the metadata has tagged frames as progressive when they are not progressive. Do not turn on otherwise; processing frames that are already progressive into progressive will probably result in lower quality video.',
    }),
    Mode: DeinterlacerModeSchema.exactOptional().openapi({
      xml: { name: 'mode' },
      description:
        'Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.',
    }),
  })
  .openapi({ description: 'Settings for deinterlacer', required: [] })
  .openapi('Deinterlacer')

const DolbyVisionLevel6MetadataSchema = z
  .object({
    MaxCll: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'maxCll' },
      description:
        'Maximum Content Light Level. Static HDR metadata that corresponds to the brightest pixel in the entire stream. Measured in nits.',
    }),
    MaxFall: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'maxFall' },
      description:
        'Maximum Frame-Average Light Level. Static HDR metadata that corresponds to the highest frame-average brightness in the entire stream. Measured in nits.',
    }),
  })
  .openapi({
    description:
      'Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.',
    required: [],
  })
  .openapi('DolbyVisionLevel6Metadata')

const DolbyVisionLevel6ModeSchema = z
  .enum(['PASSTHROUGH', 'RECALCULATE', 'SPECIFY'])
  .openapi({
    description:
      'Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.',
  })
  .openapi('DolbyVisionLevel6Mode')

const DolbyVisionMappingSchema = z
  .enum(['HDR10_NOMAP', 'HDR10_1000'])
  .openapi({
    description:
      'Required when you set Dolby Vision Profile to Profile 8.1. When you set Content mapping to None, content mapping is not applied to the HDR10-compatible signal. Depending on the source peak nit level, clipping might occur on HDR devices without Dolby Vision. When you set Content mapping to HDR10 1000, the transcoder creates a 1,000 nits peak HDR10-compatible signal by applying static content mapping to the source. This mode is speed-optimized for PQ10 sources with metadata that is created from analysis. For graded Dolby Vision content, be aware that creative intent might not be guaranteed with extreme 1,000 nits trims.',
  })
  .openapi('DolbyVisionMapping')

const DolbyVisionProfileSchema = z
  .enum(['PROFILE_5', 'PROFILE_8_1'])
  .openapi({
    description:
      'Required when you enable Dolby Vision. Use Profile 5 to include frame-interleaved Dolby Vision metadata in your output. Your input must include Dolby Vision metadata or an HDR10 YUV color space. Use Profile 8.1 to include frame-interleaved Dolby Vision metadata and HDR10 metadata in your output. Your input must include Dolby Vision metadata.',
  })
  .openapi('DolbyVisionProfile')

const DolbyVisionSchema = z
  .object({
    L6Metadata: DolbyVisionLevel6MetadataSchema.exactOptional().openapi({
      xml: { name: 'l6Metadata' },
      description:
        'Use these settings when you set DolbyVisionLevel6Mode to SPECIFY to override the MaxCLL and MaxFALL values in your input with new values.',
    }),
    L6Mode: DolbyVisionLevel6ModeSchema.exactOptional().openapi({
      xml: { name: 'l6Mode' },
      description:
        'Use Dolby Vision Mode to choose how the service will handle Dolby Vision MaxCLL and MaxFALL properies.',
    }),
    Mapping: DolbyVisionMappingSchema.exactOptional().openapi({
      xml: { name: 'mapping' },
      description:
        'Required when you set Dolby Vision Profile to Profile 8.1. When you set Content mapping to None, content mapping is not applied to the HDR10-compatible signal. Depending on the source peak nit level, clipping might occur on HDR devices without Dolby Vision. When you set Content mapping to HDR10 1000, the transcoder creates a 1,000 nits peak HDR10-compatible signal by applying static content mapping to the source. This mode is speed-optimized for PQ10 sources with metadata that is created from analysis. For graded Dolby Vision content, be aware that creative intent might not be guaranteed with extreme 1,000 nits trims.',
    }),
    Profile: DolbyVisionProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description:
        'Required when you enable Dolby Vision. Use Profile 5 to include frame-interleaved Dolby Vision metadata in your output. Your input must include Dolby Vision metadata or an HDR10 YUV color space. Use Profile 8.1 to include frame-interleaved Dolby Vision metadata and HDR10 metadata in your output. Your input must include Dolby Vision metadata.',
    }),
  })
  .openapi({
    description: 'Create Dolby Vision Profile 5 or Profile 8.1 compatible video output.',
    required: [],
  })
  .openapi('DolbyVision')

const IntegerMin0Max4000Schema = z.int().min(0).max(4000).openapi('IntegerMin0Max4000')

const Hdr10PlusSchema = z
  .object({
    MasteringMonitorNits: IntegerMin0Max4000Schema.exactOptional().openapi({
      xml: { name: 'masteringMonitorNits' },
      description:
        'Specify the HDR10+ mastering display normalized peak luminance, in nits. This is the normalized actual peak luminance of the mastering display, as defined by ST 2094-40.',
    }),
    TargetMonitorNits: IntegerMin0Max4000Schema.exactOptional().openapi({
      xml: { name: 'targetMonitorNits' },
      description:
        'Specify the HDR10+ target display nominal peak luminance, in nits. This is the nominal maximum luminance of the target display as defined by ST 2094-40.',
    }),
  })
  .openapi({ description: 'Setting for HDR10+ metadata insertion', required: [] })
  .openapi('Hdr10Plus')

const NoiseReducerFilterSchema = z
  .enum(['BILATERAL', 'MEAN', 'GAUSSIAN', 'LANCZOS', 'SHARPEN', 'CONSERVE', 'SPATIAL', 'TEMPORAL'])
  .openapi({
    description:
      'Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.',
  })
  .openapi('NoiseReducerFilter')

const IntegerMin0Max3Schema = z.int().min(0).max(3).openapi('IntegerMin0Max3')

const NoiseReducerFilterSettingsSchema = z
  .object({
    Strength: IntegerMin0Max3Schema.exactOptional().openapi({
      xml: { name: 'strength' },
      description:
        'Relative strength of noise reducing filter. Higher values produce stronger filtering.',
    }),
  })
  .openapi({ description: 'Settings for a noise reducer filter', required: [] })
  .openapi('NoiseReducerFilterSettings')

const IntegerMinNegative2Max3Schema = z.int().min(-2).max(3).openapi('IntegerMinNegative2Max3')

const IntegerMin0Max16Schema = z.int().min(0).max(16).openapi('IntegerMin0Max16')

const NoiseReducerSpatialFilterSettingsSchema = z
  .object({
    PostFilterSharpenStrength: IntegerMin0Max3Schema.exactOptional().openapi({
      xml: { name: 'postFilterSharpenStrength' },
      description:
        'Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength.',
    }),
    Speed: IntegerMinNegative2Max3Schema.exactOptional().openapi({
      xml: { name: 'speed' },
      description:
        'The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value.',
    }),
    Strength: IntegerMin0Max16Schema.exactOptional().openapi({
      xml: { name: 'strength' },
      description:
        'Relative strength of noise reducing filter. Higher values produce stronger filtering.',
    }),
  })
  .openapi({ description: 'Noise reducer filter settings for spatial filter.', required: [] })
  .openapi('NoiseReducerSpatialFilterSettings')

const IntegerMin0Max4Schema = z.int().min(0).max(4).openapi('IntegerMin0Max4')

const NoiseFilterPostTemporalSharpeningSchema = z
  .enum(['DISABLED', 'ENABLED', 'AUTO'])
  .openapi({
    description:
      'When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), the bandwidth and sharpness of your output is reduced. You can optionally use Post temporal sharpening (postTemporalSharpening) to apply sharpening to the edges of your output. Note that Post temporal sharpening will also make the bandwidth reduction from the Noise reducer smaller. The default behavior, Auto (AUTO), allows the transcoder to determine whether to apply sharpening, depending on your input type and quality. When you set Post temporal sharpening to Enabled (ENABLED), specify how much sharpening is applied using Post temporal sharpening strength (postTemporalSharpeningStrength). Set Post temporal sharpening to Disabled (DISABLED) to not apply sharpening.',
  })
  .openapi('NoiseFilterPostTemporalSharpening')

const NoiseFilterPostTemporalSharpeningStrengthSchema = z
  .enum(['LOW', 'MEDIUM', 'HIGH'])
  .openapi({
    description:
      'Use Post temporal sharpening strength (postTemporalSharpeningStrength) to define the amount of sharpening the transcoder applies to your output. Set Post temporal sharpening strength to Low (LOW), Medium (MEDIUM), or High (HIGH) to indicate the amount of sharpening.',
  })
  .openapi('NoiseFilterPostTemporalSharpeningStrength')

const IntegerMinNegative1Max3Schema = z.int().min(-1).max(3).openapi('IntegerMinNegative1Max3')

const NoiseReducerTemporalFilterSettingsSchema = z
  .object({
    AggressiveMode: IntegerMin0Max4Schema.exactOptional().openapi({
      xml: { name: 'aggressiveMode' },
      description:
        'Use Aggressive mode for content that has complex motion. Higher values produce stronger temporal filtering. This filters highly complex scenes more aggressively and creates better VQ for low bitrate outputs.',
    }),
    PostTemporalSharpening: NoiseFilterPostTemporalSharpeningSchema.exactOptional().openapi({
      xml: { name: 'postTemporalSharpening' },
      description:
        'When you set Noise reducer (noiseReducer) to Temporal (TEMPORAL), the bandwidth and sharpness of your output is reduced. You can optionally use Post temporal sharpening (postTemporalSharpening) to apply sharpening to the edges of your output. Note that Post temporal sharpening will also make the bandwidth reduction from the Noise reducer smaller. The default behavior, Auto (AUTO), allows the transcoder to determine whether to apply sharpening, depending on your input type and quality. When you set Post temporal sharpening to Enabled (ENABLED), specify how much sharpening is applied using Post temporal sharpening strength (postTemporalSharpeningStrength). Set Post temporal sharpening to Disabled (DISABLED) to not apply sharpening.',
    }),
    PostTemporalSharpeningStrength:
      NoiseFilterPostTemporalSharpeningStrengthSchema.exactOptional().openapi({
        xml: { name: 'postTemporalSharpeningStrength' },
        description:
          'Use Post temporal sharpening strength (postTemporalSharpeningStrength) to define the amount of sharpening the transcoder applies to your output. Set Post temporal sharpening strength to Low (LOW), Medium (MEDIUM), or High (HIGH) to indicate the amount of sharpening.',
      }),
    Speed: IntegerMinNegative1Max3Schema.exactOptional().openapi({
      xml: { name: 'speed' },
      description:
        'The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.',
    }),
    Strength: IntegerMin0Max16Schema.exactOptional().openapi({
      xml: { name: 'strength' },
      description:
        'Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction',
    }),
  })
  .openapi({ description: 'Noise reducer filter settings for temporal filter.', required: [] })
  .openapi('NoiseReducerTemporalFilterSettings')

const NoiseReducerSchema = z
  .object({
    Filter: NoiseReducerFilterSchema.exactOptional().openapi({
      xml: { name: 'filter' },
      description:
        'Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.',
    }),
    FilterSettings: NoiseReducerFilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'filterSettings' },
      description: 'Settings for a noise reducer filter',
    }),
    SpatialFilterSettings: NoiseReducerSpatialFilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'spatialFilterSettings' },
      description: 'Noise reducer filter settings for spatial filter.',
    }),
    TemporalFilterSettings: NoiseReducerTemporalFilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'temporalFilterSettings' },
      description: 'Noise reducer filter settings for temporal filter.',
    }),
  })
  .openapi({
    description:
      'Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter.',
    required: [],
  })
  .openapi('NoiseReducer')

const StringMin1Max100000Schema = z.string().min(1).max(100000).openapi('StringMin1Max100000')

const IntegerMin0Max4194303Schema = z.int().min(0).max(4194303).openapi('IntegerMin0Max4194303')

const WatermarkingStrengthSchema = z
  .enum(['LIGHTEST', 'LIGHTER', 'DEFAULT', 'STRONGER', 'STRONGEST'])
  .openapi({
    description:
      "Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.",
  })
  .openapi('WatermarkingStrength')

const NexGuardFileMarkerSettingsSchema = z
  .object({
    License: StringMin1Max100000Schema.exactOptional().openapi({
      xml: { name: 'license' },
      description:
        'Use the base64 license string that Nagra provides you. Enter it directly in your JSON job specification or in the console. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.',
    }),
    Payload: IntegerMin0Max4194303Schema.exactOptional().openapi({
      xml: { name: 'payload' },
      description:
        'Specify the payload ID that you want associated with this output. Valid values vary depending on your Nagra NexGuard forensic watermarking workflow. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job. For PreRelease Content (NGPR/G2), specify an integer from 1 through 4,194,303. You must generate a unique ID for each asset you watermark, and keep a record of which ID you have assigned to each asset. Neither Nagra nor MediaConvert keep track of the relationship between output files and your IDs. For OTT Streaming, create two adaptive bitrate (ABR) stacks for each asset. Do this by setting up two output groups. For one output group, set the value of Payload ID (payload) to 0 in every output. For the other output group, set Payload ID (payload) to 1 in every output.',
    }),
    Preset: StringMin1Max256Schema.exactOptional().openapi({
      xml: { name: 'preset' },
      description:
        'Enter one of the watermarking preset strings that Nagra provides you. Required when you include Nagra NexGuard File Marker watermarking (NexGuardWatermarkingSettings) in your job.',
    }),
    Strength: WatermarkingStrengthSchema.exactOptional().openapi({
      xml: { name: 'strength' },
      description:
        "Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.",
    }),
  })
  .openapi({
    description:
      'For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.',
    required: [],
  })
  .openapi('NexGuardFileMarkerSettings')

const PartnerWatermarkingSchema = z
  .object({
    NexguardFileMarkerSettings: NexGuardFileMarkerSettingsSchema.exactOptional().openapi({
      xml: { name: 'nexguardFileMarkerSettings' },
      description:
        'For forensic video watermarking, MediaConvert supports Nagra NexGuard File Marker watermarking. MediaConvert supports both PreRelease Content (NGPR/G2) and OTT Streaming workflows.',
    }),
  })
  .openapi({
    description:
      'If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.',
    required: [],
  })
  .openapi('PartnerWatermarking')

const IntegerMin10Max48Schema = z.int().min(10).max(48).openapi('IntegerMin10Max48')

const TimecodeBurninPositionSchema = z
  .enum([
    'TOP_CENTER',
    'TOP_LEFT',
    'TOP_RIGHT',
    'MIDDLE_LEFT',
    'MIDDLE_CENTER',
    'MIDDLE_RIGHT',
    'BOTTOM_LEFT',
    'BOTTOM_CENTER',
    'BOTTOM_RIGHT',
  ])
  .openapi({
    description:
      'Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.',
  })
  .openapi('TimecodeBurninPosition')

const StringPatternSchema = z
  .string()
  .regex(/^[ -~]+$/)
  .openapi('StringPattern')

const TimecodeBurninSchema = z
  .object({
    FontSize: IntegerMin10Max48Schema.exactOptional().openapi({
      xml: { name: 'fontSize' },
      description:
        'Use Font Size (FontSize) to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48.',
    }),
    Position: TimecodeBurninPositionSchema.exactOptional().openapi({
      xml: { name: 'position' },
      description:
        'Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.',
    }),
    Prefix: StringPatternSchema.exactOptional().openapi({
      xml: { name: 'prefix' },
      description:
        'Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.',
    }),
  })
  .openapi({
    description: 'Settings for burning the output timecode and specified prefix into the output.',
    required: [],
  })
  .openapi('TimecodeBurnin')

const VideoPreprocessorSchema = z
  .object({
    ColorCorrector: ColorCorrectorSchema.exactOptional().openapi({
      xml: { name: 'colorCorrector' },
      description:
        'Use these settings to convert the color space or to modify properties such as hue and contrast for this output. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/converting-the-color-space.html.',
    }),
    Deinterlacer: DeinterlacerSchema.exactOptional().openapi({
      xml: { name: 'deinterlacer' },
      description:
        'Use the deinterlacer to produce smoother motion and a clearer picture. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-scan-type.html.',
    }),
    DolbyVision: DolbyVisionSchema.exactOptional().openapi({
      xml: { name: 'dolbyVision' },
      description: 'Enable Dolby Vision feature to produce Dolby Vision compatible video output.',
    }),
    Hdr10Plus: Hdr10PlusSchema.exactOptional().openapi({
      xml: { name: 'hdr10Plus' },
      description: 'Enable HDR10+ analyis and metadata injection. Compatible with HEVC only.',
    }),
    ImageInserter: ImageInserterSchema.exactOptional().openapi({
      xml: { name: 'imageInserter' },
      description:
        'Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.',
    }),
    NoiseReducer: NoiseReducerSchema.exactOptional().openapi({
      xml: { name: 'noiseReducer' },
      description:
        'Enable the Noise reducer feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default. When you enable Noise reducer, you must also select a value for Noise reducer filter. For AVC outputs, when you include Noise reducer, you cannot include the Bandwidth reduction filter.',
    }),
    PartnerWatermarking: PartnerWatermarkingSchema.exactOptional().openapi({
      xml: { name: 'partnerWatermarking' },
      description:
        'If you work with a third party video watermarking partner, use the group of settings that correspond with your watermarking partner to include watermarks in your output.',
    }),
    TimecodeBurnin: TimecodeBurninSchema.exactOptional().openapi({
      xml: { name: 'timecodeBurnin' },
      description: 'Settings for burning the output timecode and specified prefix into the output.',
    }),
  })
  .openapi({
    description:
      'Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.',
    required: [],
  })
  .openapi('VideoPreprocessor')

const VideoDescriptionSchema = z
  .object({
    AfdSignaling: AfdSignalingSchema.exactOptional().openapi({
      xml: { name: 'afdSignaling' },
      description:
        'This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.',
    }),
    AntiAlias: AntiAliasSchema.exactOptional().openapi({
      xml: { name: 'antiAlias' },
      description:
        'The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.',
    }),
    CodecSettings: VideoCodecSettingsSchema.exactOptional().openapi({
      xml: { name: 'codecSettings' },
      description:
        'Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AV1, Av1Settings * AVC_INTRA, AvcIntraSettings * FRAME_CAPTURE, FrameCaptureSettings * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * VC3, Vc3Settings * VP8, Vp8Settings * VP9, Vp9Settings * XAVC, XavcSettings',
    }),
    ColorMetadata: ColorMetadataSchema.exactOptional().openapi({
      xml: { name: 'colorMetadata' },
      description:
        "Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.",
    }),
    Crop: RectangleSchema.exactOptional().openapi({
      xml: { name: 'crop' },
      description:
        'Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.',
    }),
    DropFrameTimecode: DropFrameTimecodeSchema.exactOptional().openapi({
      xml: { name: 'dropFrameTimecode' },
      description:
        'Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.',
    }),
    FixedAfd: IntegerMin0Max15Schema.exactOptional().openapi({
      xml: { name: 'fixedAfd' },
      description:
        'Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all frames of this video output.',
    }),
    Height: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description:
        "Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height.",
    }),
    Position: RectangleSchema.exactOptional().openapi({
      xml: { name: 'position' },
      description:
        'Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black.',
    }),
    RespondToAfd: RespondToAfdSchema.exactOptional().openapi({
      xml: { name: 'respondToAfd' },
      description:
        'Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.',
    }),
    ScalingBehavior: ScalingBehaviorSchema.exactOptional().openapi({
      xml: { name: 'scalingBehavior' },
      description:
        'Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.',
    }),
    Sharpness: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'sharpness' },
      description:
        'Use Sharpness (Sharpness) setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.',
    }),
    TimecodeInsertion: VideoTimecodeInsertionSchema.exactOptional().openapi({
      xml: { name: 'timecodeInsertion' },
      description:
        'Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.',
    }),
    VideoPreprocessors: VideoPreprocessorSchema.exactOptional().openapi({
      xml: { name: 'videoPreprocessors' },
      description:
        'Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.',
    }),
    Width: IntegerMin32Max8192Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description:
        "Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width.",
    }),
  })
  .openapi({
    description:
      'Settings related to video encoding of your output. The specific video settings depend on the video codec that you choose. When you work directly in your JSON job specification, include one instance of Video description (VideoDescription) per output.',
    required: [],
  })
  .openapi('VideoDescription')

type OutputType = {
  AudioDescriptions?: z.infer<typeof ListOfAudioDescriptionSchema>
  CaptionDescriptions?: z.infer<typeof ListOfCaptionDescriptionSchema>
  ContainerSettings?: z.infer<typeof ContainerSettingsSchema>
  Extension?: z.infer<typeof StringSchema>
  NameModifier?: z.infer<typeof StringMin1Schema>
  OutputSettings?: z.infer<typeof OutputSettingsSchema>
  Preset?: z.infer<typeof StringMin0Schema>
  VideoDescription?: z.infer<typeof VideoDescriptionSchema>
}

const OutputSchema: z.ZodType<OutputType> = z
  .object({
    AudioDescriptions: ListOfAudioDescriptionSchema.exactOptional().openapi({
      xml: { name: 'audioDescriptions' },
      description:
        '(AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.',
    }),
    CaptionDescriptions: ListOfCaptionDescriptionSchema.exactOptional().openapi({
      xml: { name: 'captionDescriptions' },
      description:
        '(CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.',
    }),
    ContainerSettings: ContainerSettingsSchema.exactOptional().openapi({
      xml: { name: 'containerSettings' },
      description: 'Container specific settings.',
    }),
    Extension: StringSchema.exactOptional().openapi({
      xml: { name: 'extension' },
      description:
        'Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * WebM container, webm * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)',
    }),
    NameModifier: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'nameModifier' },
      description:
        'Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.',
    }),
    OutputSettings: OutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'outputSettings' },
      description: 'Specific settings for this type of output.',
    }),
    Preset: StringMin0Schema.exactOptional().openapi({
      xml: { name: 'preset' },
      description:
        'Use Preset (Preset) to specify a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.',
    }),
    VideoDescription: VideoDescriptionSchema.exactOptional().openapi({
      xml: { name: 'videoDescription' },
      description:
        'VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.',
    }),
  })
  .openapi({
    description:
      'Each output in your job is a collection of settings that describes how you want MediaConvert to encode a single output file or stream. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/create-outputs.html.',
    required: [],
  })
  .openapi('Output')

type ListOfOutputType = z.infer<typeof OutputSchema>[]

const ListOfOutputSchema: z.ZodType<ListOfOutputType> = z
  .array(OutputSchema)
  .openapi('ListOfOutput')

type OutputGroupType = {
  AutomatedEncodingSettings?: z.infer<typeof AutomatedEncodingSettingsSchema>
  CustomName?: z.infer<typeof StringSchema>
  Name?: z.infer<typeof StringSchema>
  OutputGroupSettings?: z.infer<typeof OutputGroupSettingsSchema>
  Outputs?: z.infer<typeof ListOfOutputSchema>
}

const OutputGroupSchema: z.ZodType<OutputGroupType> = z
  .object({
    AutomatedEncodingSettings: AutomatedEncodingSettingsSchema.exactOptional().openapi({
      xml: { name: 'automatedEncodingSettings' },
      description:
        'Use automated encoding to have MediaConvert choose your encoding settings for you, based on characteristics of your input video.',
    }),
    CustomName: StringSchema.exactOptional().openapi({
      xml: { name: 'customName' },
      description:
        'Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the output group',
    }),
    OutputGroupSettings: OutputGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'outputGroupSettings' },
      description: 'Output Group settings, including type',
    }),
    Outputs: ListOfOutputSchema.exactOptional().openapi({
      xml: { name: 'outputs' },
      description:
        'This object holds groups of encoding settings, one group of settings per output.',
    }),
  })
  .openapi({ description: 'Group of outputs', required: [] })
  .openapi('OutputGroup')

type ListOfOutputGroupType = z.infer<typeof OutputGroupSchema>[]

const ListOfOutputGroupSchema: z.ZodType<ListOfOutputGroupType> = z
  .array(OutputGroupSchema)
  .openapi('ListOfOutputGroup')

const TimecodeSourceSchema = z
  .enum(['EMBEDDED', 'ZEROBASED', 'SPECIFIEDSTART'])
  .openapi({
    description:
      'Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.',
  })
  .openapi('TimecodeSource')

const StringPattern0940191020191209301Schema = z
  .string()
  .regex(/^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
  .openapi('StringPattern0940191020191209301')

const TimecodeConfigSchema = z
  .object({
    Anchor: StringPattern010920405090509092Schema.exactOptional().openapi({
      xml: { name: 'anchor' },
      description:
        'If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED) the first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the first frame is the timecode value on the first input frame of the input.',
    }),
    Source: TimecodeSourceSchema.exactOptional().openapi({
      xml: { name: 'source' },
      description:
        'Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.',
    }),
    Start: StringPattern010920405090509092Schema.exactOptional().openapi({
      xml: { name: 'start' },
      description:
        'Only use when you set Source (TimecodeSource) to Specified start (SPECIFIEDSTART). Use Start timecode (Start) to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF).',
    }),
    TimestampOffset: StringPattern0940191020191209301Schema.exactOptional().openapi({
      xml: { name: 'timestampOffset' },
      description:
        'Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd". To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25.',
    }),
  })
  .openapi({
    description:
      "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.",
    required: [],
  })
  .openapi('TimecodeConfig')

const Id3InsertionSchema = z
  .object({
    Id3: StringPatternAZaZ0902Schema.exactOptional().openapi({
      xml: { name: 'id3' },
      description: 'Use ID3 tag (Id3) to provide a fully formed ID3 tag in base64-encode format.',
    }),
    Timecode: StringPattern010920405090509092Schema.exactOptional().openapi({
      xml: { name: 'timecode' },
      description: 'Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.',
    }),
  })
  .openapi({
    description:
      'To insert ID3 tags in your output, specify two values. Use ID3 tag (Id3) to specify the base 64 encoded string and use Timecode (TimeCode) to specify the time when the tag should be inserted. To insert multiple ID3 tags in your output, create multiple instances of ID3 insertion (Id3Insertion).',
    required: [],
  })
  .openapi('Id3Insertion')

const ListOfId3InsertionSchema = z.array(Id3InsertionSchema).openapi('ListOfId3Insertion')

const TimedMetadataInsertionSchema = z
  .object({
    Id3Insertions: ListOfId3InsertionSchema.exactOptional().openapi({
      xml: { name: 'id3Insertions' },
      description: 'Id3Insertions contains the array of Id3Insertion instances.',
    }),
  })
  .openapi({
    description:
      'Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
    required: [],
  })
  .openapi('TimedMetadataInsertion')

type JobSettingsType = {
  AdAvailOffset?: z.infer<typeof IntegerMinNegative1000Max1000Schema>
  AvailBlanking?: z.infer<typeof AvailBlankingSchema>
  Esam?: z.infer<typeof EsamSettingsSchema>
  ExtendedDataServices?: z.infer<typeof ExtendedDataServicesSchema>
  Inputs?: z.infer<typeof ListOfInputSchema>
  KantarWatermark?: z.infer<typeof KantarWatermarkSettingsSchema>
  MotionImageInserter?: z.infer<typeof MotionImageInserterSchema>
  NielsenConfiguration?: z.infer<typeof NielsenConfigurationSchema>
  NielsenNonLinearWatermark?: z.infer<typeof NielsenNonLinearWatermarkSettingsSchema>
  OutputGroups?: z.infer<typeof ListOfOutputGroupSchema>
  TimecodeConfig?: z.infer<typeof TimecodeConfigSchema>
  TimedMetadataInsertion?: z.infer<typeof TimedMetadataInsertionSchema>
}

const JobSettingsSchema: z.ZodType<JobSettingsType> = z
  .object({
    AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
      xml: { name: 'adAvailOffset' },
      description:
        'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.',
    }),
    AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
      xml: { name: 'availBlanking' },
      description:
        'Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.',
    }),
    Esam: EsamSettingsSchema.exactOptional().openapi({
      xml: { name: 'esam' },
      description:
        "Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.",
    }),
    ExtendedDataServices: ExtendedDataServicesSchema.exactOptional().openapi({
      xml: { name: 'extendedDataServices' },
      description:
        'If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.',
    }),
    Inputs: ListOfInputSchema.exactOptional().openapi({
      xml: { name: 'inputs' },
      description:
        'Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.',
    }),
    KantarWatermark: KantarWatermarkSettingsSchema.exactOptional().openapi({
      xml: { name: 'kantarWatermark' },
      description:
        'Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.',
    }),
    MotionImageInserter: MotionImageInserterSchema.exactOptional().openapi({
      xml: { name: 'motionImageInserter' },
      description:
        'Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.',
    }),
    NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
      xml: { name: 'nielsenConfiguration' },
      description:
        "Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.",
    }),
    NielsenNonLinearWatermark: NielsenNonLinearWatermarkSettingsSchema.exactOptional().openapi({
      xml: { name: 'nielsenNonLinearWatermark' },
      description:
        'Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]',
    }),
    OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
      xml: { name: 'outputGroups' },
      description:
        '(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings',
    }),
    TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
      xml: { name: 'timecodeConfig' },
      description:
        "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.",
    }),
    TimedMetadataInsertion: TimedMetadataInsertionSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataInsertion' },
      description:
        'Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
    }),
  })
  .openapi({
    description: 'JobSettings contains all the transcode settings for a job.',
    required: [],
  })
  .openapi('JobSettings')

const SimulateReservedQueueSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({
    description:
      'Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.',
  })
  .openapi('SimulateReservedQueue')

const JobStatusSchema = z
  .enum(['SUBMITTED', 'PROGRESSING', 'COMPLETE', 'CANCELED', 'ERROR'])
  .openapi({
    description: "A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.",
  })
  .openapi('JobStatus')

const StatusUpdateIntervalSchema = z
  .enum([
    'SECONDS_10',
    'SECONDS_12',
    'SECONDS_15',
    'SECONDS_20',
    'SECONDS_30',
    'SECONDS_60',
    'SECONDS_120',
    'SECONDS_180',
    'SECONDS_240',
    'SECONDS_300',
    'SECONDS_360',
    'SECONDS_420',
    'SECONDS_480',
    'SECONDS_540',
    'SECONDS_600',
  ])
  .openapi({
    description:
      'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
  })
  .openapi('StatusUpdateInterval')

const TimingSchema = z
  .object({
    FinishTime: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'finishTime' },
      description: 'The time, in Unix epoch format, that the transcoding job finished',
    }),
    StartTime: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'startTime' },
      description: 'The time, in Unix epoch format, that transcoding for the job began.',
    }),
    SubmitTime: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'submitTime' },
      description: 'The time, in Unix epoch format, that you submitted the job.',
    }),
  })
  .openapi({
    description:
      'Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.',
    required: [],
  })
  .openapi('Timing')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const WarningGroupSchema = z
  .object({
    Code: IntegerSchema.openapi({
      xml: { name: 'code' },
      description:
        'Warning code that identifies a specific warning in the job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html',
    }),
    Count: IntegerSchema.openapi({
      xml: { name: 'count' },
      description: 'The number of times this warning occurred in the job.',
    }),
  })
  .openapi({
    required: ['Count', 'Code'],
    description: 'Contains any warning codes and their count for the job.',
  })
  .openapi('WarningGroup')

const ListOfWarningGroupSchema = z.array(WarningGroupSchema).openapi('ListOfWarningGroup')

type JobType = {
  AccelerationSettings?: z.infer<typeof AccelerationSettingsSchema>
  AccelerationStatus?: z.infer<typeof AccelerationStatusSchema>
  Arn?: z.infer<typeof StringSchema>
  BillingTagsSource?: z.infer<typeof BillingTagsSourceSchema>
  ClientRequestToken?: z.infer<typeof StringSchema>
  CreatedAt?: z.infer<typeof TimestampUnixSchema>
  CurrentPhase?: z.infer<typeof JobPhaseSchema>
  ErrorCode?: z.infer<typeof IntegerSchema>
  ErrorMessage?: z.infer<typeof StringSchema>
  HopDestinations?: z.infer<typeof ListOfHopDestinationSchema>
  Id?: z.infer<typeof StringSchema>
  JobPercentComplete?: z.infer<typeof IntegerSchema>
  JobTemplate?: z.infer<typeof StringSchema>
  Messages?: z.infer<typeof JobMessagesSchema>
  OutputGroupDetails?: z.infer<typeof ListOfOutputGroupDetailSchema>
  Priority?: z.infer<typeof IntegerMinNegative50Max50Schema>
  Queue?: z.infer<typeof StringSchema>
  QueueTransitions?: z.infer<typeof ListOfQueueTransitionSchema>
  RetryCount?: z.infer<typeof IntegerSchema>
  Role: z.infer<typeof StringSchema>
  Settings: z.infer<typeof JobSettingsSchema>
  SimulateReservedQueue?: z.infer<typeof SimulateReservedQueueSchema>
  Status?: z.infer<typeof JobStatusSchema>
  StatusUpdateInterval?: z.infer<typeof StatusUpdateIntervalSchema>
  Timing?: z.infer<typeof TimingSchema>
  UserMetadata?: z.infer<typeof MapOfStringSchema>
  Warnings?: z.infer<typeof ListOfWarningGroupSchema>
}

const JobSchema: z.ZodType<JobType> = z
  .object({
    AccelerationSettings: AccelerationSettingsSchema.exactOptional().openapi({
      xml: { name: 'accelerationSettings' },
      description:
        'Accelerated transcoding can significantly speed up jobs with long, visually complex content.',
    }),
    AccelerationStatus: AccelerationStatusSchema.exactOptional().openapi({
      xml: { name: 'accelerationStatus' },
      description:
        "Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.",
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'An identifier for this resource that is unique within all of AWS.',
    }),
    BillingTagsSource: BillingTagsSourceSchema.exactOptional().openapi({
      xml: { name: 'billingTagsSource' },
      description:
        'The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.',
    }),
    ClientRequestToken: StringSchema.exactOptional().openapi({
      xml: { name: 'clientRequestToken' },
      description:
        'Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.',
    }),
    CreatedAt: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The time, in Unix epoch format in seconds, when the job got created.',
    }),
    CurrentPhase: JobPhaseSchema.exactOptional().openapi({
      xml: { name: 'currentPhase' },
      description: "A job's phase can be PROBING, TRANSCODING OR UPLOADING",
    }),
    ErrorCode: IntegerSchema.exactOptional().openapi({
      xml: { name: 'errorCode' },
      description: 'Error code for the job',
    }),
    ErrorMessage: StringSchema.exactOptional().openapi({
      xml: { name: 'errorMessage' },
      description: 'Error message of Job',
    }),
    HopDestinations: ListOfHopDestinationSchema.exactOptional().openapi({
      xml: { name: 'hopDestinations' },
      description: 'Optional list of hop destinations.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description:
        "A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources",
    }),
    JobPercentComplete: IntegerSchema.exactOptional().openapi({
      xml: { name: 'jobPercentComplete' },
      description:
        "An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.",
    }),
    JobTemplate: StringSchema.exactOptional().openapi({
      xml: { name: 'jobTemplate' },
      description:
        'The job template that the job is created from, if it is created from a job template.',
    }),
    Messages: JobMessagesSchema.exactOptional().openapi({
      xml: { name: 'messages' },
      description:
        'Provides messages from the service about jobs that you have already successfully submitted.',
    }),
    OutputGroupDetails: ListOfOutputGroupDetailSchema.exactOptional().openapi({
      xml: { name: 'outputGroupDetails' },
      description: 'List of output group details',
    }),
    Priority: IntegerMinNegative50Max50Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description: 'Relative priority on the job.',
    }),
    Queue: StringSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html",
    }),
    QueueTransitions: ListOfQueueTransitionSchema.exactOptional().openapi({
      xml: { name: 'queueTransitions' },
      description: "The job's queue hopping history.",
    }),
    RetryCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'retryCount' },
      description:
        'The number of times that the service automatically attempted to process your job after encountering an error.',
    }),
    Role: StringSchema.openapi({
      xml: { name: 'role' },
      description:
        'The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html',
    }),
    Settings: JobSettingsSchema.openapi({
      xml: { name: 'settings' },
      description: 'JobSettings contains all the transcode settings for a job.',
    }),
    SimulateReservedQueue: SimulateReservedQueueSchema.exactOptional().openapi({
      xml: { name: 'simulateReservedQueue' },
      description:
        'Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.',
    }),
    Status: JobStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: "A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.",
    }),
    StatusUpdateInterval: StatusUpdateIntervalSchema.exactOptional().openapi({
      xml: { name: 'statusUpdateInterval' },
      description:
        'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
    }),
    Timing: TimingSchema.exactOptional().openapi({
      xml: { name: 'timing' },
      description:
        'Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.',
    }),
    UserMetadata: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'userMetadata' },
      description:
        'User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.',
    }),
    Warnings: ListOfWarningGroupSchema.exactOptional().openapi({
      xml: { name: 'warnings' },
      description:
        'Contains any warning messages for the job. Use to help identify potential issues with your input, output, or job. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/warning_codes.html',
    }),
  })
  .openapi({
    required: ['Settings', 'Role'],
    description:
      'Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
  })
  .openapi('Job')

type CreateJobResponseType = { Job?: z.infer<typeof JobSchema> }

type InputTemplateType = {
  AudioSelectorGroups?: z.infer<typeof MapOfAudioSelectorGroupSchema>
  AudioSelectors?: z.infer<typeof MapOfAudioSelectorSchema>
  CaptionSelectors?: z.infer<typeof MapOfCaptionSelectorSchema>
  Crop?: z.infer<typeof RectangleSchema>
  DeblockFilter?: z.infer<typeof InputDeblockFilterSchema>
  DenoiseFilter?: z.infer<typeof InputDenoiseFilterSchema>
  DolbyVisionMetadataXml?: z.infer<typeof StringMin14PatternS3XmlXMLHttpsXmlXMLSchema>
  FilterEnable?: z.infer<typeof InputFilterEnableSchema>
  FilterStrength?: z.infer<typeof IntegerMin0Max5Schema>
  ImageInserter?: z.infer<typeof ImageInserterSchema>
  InputClippings?: z.infer<typeof ListOfInputClippingSchema>
  InputScanType?: z.infer<typeof InputScanTypeSchema>
  Position?: z.infer<typeof RectangleSchema>
  ProgramNumber?: z.infer<typeof IntegerMin1Max2147483647Schema>
  PsiControl?: z.infer<typeof InputPsiControlSchema>
  TimecodeSource?: z.infer<typeof InputTimecodeSourceSchema>
  TimecodeStart?: z.infer<typeof StringMin11Max11Pattern01D20305D205DSchema>
  VideoSelector?: z.infer<typeof VideoSelectorSchema>
}

const InputTemplateSchema: z.ZodType<InputTemplateType> = z
  .object({
    AudioSelectorGroups: MapOfAudioSelectorGroupSchema.exactOptional().openapi({
      xml: { name: 'audioSelectorGroups' },
      description:
        "Use audio selector groups to combine multiple sidecar audio inputs so that you can assign them to a single output audio tab (AudioDescription). Note that, if you're working with embedded audio, it's simpler to assign multiple input tracks into a single audio selector rather than use an audio selector group.",
    }),
    AudioSelectors: MapOfAudioSelectorSchema.exactOptional().openapi({
      xml: { name: 'audioSelectors' },
      description:
        'Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use multiple Audio selectors per input.',
    }),
    CaptionSelectors: MapOfCaptionSelectorSchema.exactOptional().openapi({
      xml: { name: 'captionSelectors' },
      description:
        'Use captions selectors to specify the captions data from your input that you use in your outputs. You can use up to 20 captions selectors per input.',
    }),
    Crop: RectangleSchema.exactOptional().openapi({
      xml: { name: 'crop' },
      description:
        'Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).',
    }),
    DeblockFilter: InputDeblockFilterSchema.exactOptional().openapi({
      xml: { name: 'deblockFilter' },
      description:
        'Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manually controllable for MPEG2 and uncompressed video inputs.',
    }),
    DenoiseFilter: InputDenoiseFilterSchema.exactOptional().openapi({
      xml: { name: 'denoiseFilter' },
      description:
        'Enable Denoise (InputDenoiseFilter) to filter noise from the input. Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.',
    }),
    DolbyVisionMetadataXml: StringMin14PatternS3XmlXMLHttpsXmlXMLSchema.exactOptional().openapi({
      xml: { name: 'dolbyVisionMetadataXml' },
      description:
        'Use this setting only when your video source has Dolby Vision studio mastering metadata that is carried in a separate XML file. Specify the Amazon S3 location for the metadata XML file. MediaConvert uses this file to provide global and frame-level metadata for Dolby Vision preprocessing. When you specify a file here and your input also has interleaved global and frame level metadata, MediaConvert ignores the interleaved metadata and uses only the the metadata from this external XML file. Note that your IAM service role must grant MediaConvert read permissions to this file. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.',
    }),
    FilterEnable: InputFilterEnableSchema.exactOptional().openapi({
      xml: { name: 'filterEnable' },
      description:
        'Specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The input is filtered regardless of input type.',
    }),
    FilterStrength: IntegerMin0Max5Schema.exactOptional().openapi({
      xml: { name: 'filterStrength' },
      description:
        'Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is 0 to 5. Default is 0.',
    }),
    ImageInserter: ImageInserterSchema.exactOptional().openapi({
      xml: { name: 'imageInserter' },
      description:
        'Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.',
    }),
    InputClippings: ListOfInputClippingSchema.exactOptional().openapi({
      xml: { name: 'inputClippings' },
      description:
        '(InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.',
    }),
    InputScanType: InputScanTypeSchema.exactOptional().openapi({
      xml: { name: 'inputScanType' },
      description:
        "When you have a progressive segmented frame (PsF) input, use this setting to flag the input as PsF. MediaConvert doesn't automatically detect PsF. Therefore, flagging your input as PsF results in better preservation of video quality when you do deinterlacing and frame rate conversion. If you don't specify, the default value is Auto (AUTO). Auto is the correct setting for all inputs that are not PsF. Don't set this value to PsF when your input is interlaced. Doing so creates horizontal interlacing artifacts.",
    }),
    Position: RectangleSchema.exactOptional().openapi({
      xml: { name: 'position' },
      description:
        'Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).',
    }),
    ProgramNumber: IntegerMin1Max2147483647Schema.exactOptional().openapi({
      xml: { name: 'programNumber' },
      description:
        "Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.",
    }),
    PsiControl: InputPsiControlSchema.exactOptional().openapi({
      xml: { name: 'psiControl' },
      description:
        'Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.',
    }),
    TimecodeSource: InputTimecodeSourceSchema.exactOptional().openapi({
      xml: { name: 'timecodeSource' },
      description:
        "Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.",
    }),
    TimecodeStart: StringMin11Max11Pattern01D20305D205DSchema.exactOptional().openapi({
      xml: { name: 'timecodeStart' },
      description:
        "Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.",
    }),
    VideoSelector: VideoSelectorSchema.exactOptional().openapi({
      xml: { name: 'videoSelector' },
      description:
        'Input video selectors contain the video settings for the input. Each of your inputs can have up to one video selector.',
    }),
  })
  .openapi({ description: 'Specified video input in a template.', required: [] })
  .openapi('InputTemplate')

type ListOfInputTemplateType = z.infer<typeof InputTemplateSchema>[]

const ListOfInputTemplateSchema: z.ZodType<ListOfInputTemplateType> = z
  .array(InputTemplateSchema)
  .openapi('ListOfInputTemplate')

type JobTemplateSettingsType = {
  AdAvailOffset?: z.infer<typeof IntegerMinNegative1000Max1000Schema>
  AvailBlanking?: z.infer<typeof AvailBlankingSchema>
  Esam?: z.infer<typeof EsamSettingsSchema>
  ExtendedDataServices?: z.infer<typeof ExtendedDataServicesSchema>
  Inputs?: z.infer<typeof ListOfInputTemplateSchema>
  KantarWatermark?: z.infer<typeof KantarWatermarkSettingsSchema>
  MotionImageInserter?: z.infer<typeof MotionImageInserterSchema>
  NielsenConfiguration?: z.infer<typeof NielsenConfigurationSchema>
  NielsenNonLinearWatermark?: z.infer<typeof NielsenNonLinearWatermarkSettingsSchema>
  OutputGroups?: z.infer<typeof ListOfOutputGroupSchema>
  TimecodeConfig?: z.infer<typeof TimecodeConfigSchema>
  TimedMetadataInsertion?: z.infer<typeof TimedMetadataInsertionSchema>
}

const JobTemplateSettingsSchema: z.ZodType<JobTemplateSettingsType> = z
  .object({
    AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
      xml: { name: 'adAvailOffset' },
      description:
        'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.',
    }),
    AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
      xml: { name: 'availBlanking' },
      description:
        'Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.',
    }),
    Esam: EsamSettingsSchema.exactOptional().openapi({
      xml: { name: 'esam' },
      description:
        "Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.",
    }),
    ExtendedDataServices: ExtendedDataServicesSchema.exactOptional().openapi({
      xml: { name: 'extendedDataServices' },
      description:
        'If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.',
    }),
    Inputs: ListOfInputTemplateSchema.exactOptional().openapi({
      xml: { name: 'inputs' },
      description:
        'Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template. Using the API, you can include multiple inputs when referencing a job template.',
    }),
    KantarWatermark: KantarWatermarkSettingsSchema.exactOptional().openapi({
      xml: { name: 'kantarWatermark' },
      description:
        'Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.',
    }),
    MotionImageInserter: MotionImageInserterSchema.exactOptional().openapi({
      xml: { name: 'motionImageInserter' },
      description:
        'Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.',
    }),
    NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
      xml: { name: 'nielsenConfiguration' },
      description:
        "Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.",
    }),
    NielsenNonLinearWatermark: NielsenNonLinearWatermarkSettingsSchema.exactOptional().openapi({
      xml: { name: 'nielsenNonLinearWatermark' },
      description:
        'Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]',
    }),
    OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
      xml: { name: 'outputGroups' },
      description:
        '(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings',
    }),
    TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
      xml: { name: 'timecodeConfig' },
      description:
        "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.",
    }),
    TimedMetadataInsertion: TimedMetadataInsertionSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataInsertion' },
      description:
        'Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
    }),
  })
  .openapi({
    description:
      'JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.',
    required: [],
  })
  .openapi('JobTemplateSettings')

const TypeSchema = z.enum(['SYSTEM', 'CUSTOM']).openapi('Type')

type JobTemplateType = {
  AccelerationSettings?: z.infer<typeof AccelerationSettingsSchema>
  Arn?: z.infer<typeof StringSchema>
  Category?: z.infer<typeof StringSchema>
  CreatedAt?: z.infer<typeof TimestampUnixSchema>
  Description?: z.infer<typeof StringSchema>
  HopDestinations?: z.infer<typeof ListOfHopDestinationSchema>
  LastUpdated?: z.infer<typeof TimestampUnixSchema>
  Name: z.infer<typeof StringSchema>
  Priority?: z.infer<typeof IntegerMinNegative50Max50Schema>
  Queue?: z.infer<typeof StringSchema>
  Settings: z.infer<typeof JobTemplateSettingsSchema>
  StatusUpdateInterval?: z.infer<typeof StatusUpdateIntervalSchema>
  Type?: z.infer<typeof TypeSchema>
}

const JobTemplateSchema: z.ZodType<JobTemplateType> = z
  .object({
    AccelerationSettings: AccelerationSettingsSchema.exactOptional().openapi({
      xml: { name: 'accelerationSettings' },
      description:
        'Accelerated transcoding can significantly speed up jobs with long, visually complex content.',
    }),
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'An identifier for this resource that is unique within all of AWS.',
    }),
    Category: StringSchema.exactOptional().openapi({
      xml: { name: 'category' },
      description: 'An optional category you create to organize your job templates.',
    }),
    CreatedAt: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The timestamp in epoch seconds for Job template creation.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'An optional description you create for each job template.',
    }),
    HopDestinations: ListOfHopDestinationSchema.exactOptional().openapi({
      xml: { name: 'hopDestinations' },
      description: 'Optional list of hop destinations.',
    }),
    LastUpdated: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'lastUpdated' },
      description: 'The timestamp in epoch seconds when the Job template was last updated.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        'A name you create for each job template. Each name must be unique within your account.',
    }),
    Priority: IntegerMinNegative50Max50Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description: 'Relative priority on the job.',
    }),
    Queue: StringSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.",
    }),
    Settings: JobTemplateSettingsSchema.openapi({
      xml: { name: 'settings' },
      description:
        'JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.',
    }),
    StatusUpdateInterval: StatusUpdateIntervalSchema.exactOptional().openapi({
      xml: { name: 'statusUpdateInterval' },
      description:
        'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
    }),
    Type: TypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        "A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.",
    }),
  })
  .openapi({
    required: ['Settings', 'Name'],
    description:
      'A job template is a pre-made set of encoding instructions that you can use to quickly create a job.',
  })
  .openapi('JobTemplate')

type CreateJobTemplateResponseType = { JobTemplate?: z.infer<typeof JobTemplateSchema> }

const CaptionDescriptionPresetSchema = z
  .object({
    CustomLanguageCode: StringPatternAZaZ23AZaZSchema.exactOptional().openapi({
      xml: { name: 'customLanguageCode' },
      description:
        'Specify the language for this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information when automatically selecting the font script for rendering the captions text. For all outputs, you can use an ISO 639-2 or ISO 639-3 code. For streaming outputs, you can also use any other code in the full RFC-5646 specification. Streaming outputs are those that are in one of the following output groups: CMAF, DASH ISO, Apple HLS, or Microsoft Smooth Streaming.',
    }),
    DestinationSettings: CaptionDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Settings related to one captions tab on the MediaConvert console. In your job JSON, an instance of captions DestinationSettings is equivalent to one captions tab in the console. Usually, one captions tab corresponds to one output captions track. Depending on your output captions format, one tab might correspond to a set of output captions tracks. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/including-captions.html.',
    }),
    LanguageCode: LanguageCodeSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        'Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.',
    }),
    LanguageDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'languageDescription' },
      description:
        'Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer\'s player device. For outputs in other output groups, the service ignores this setting.',
    }),
  })
  .openapi({ description: 'Caption Description for preset', required: [] })
  .openapi('CaptionDescriptionPreset')

const ListOfCaptionDescriptionPresetSchema = z
  .array(CaptionDescriptionPresetSchema)
  .openapi('ListOfCaptionDescriptionPreset')

type PresetSettingsType = {
  AudioDescriptions?: z.infer<typeof ListOfAudioDescriptionSchema>
  CaptionDescriptions?: z.infer<typeof ListOfCaptionDescriptionPresetSchema>
  ContainerSettings?: z.infer<typeof ContainerSettingsSchema>
  VideoDescription?: z.infer<typeof VideoDescriptionSchema>
}

const PresetSettingsSchema: z.ZodType<PresetSettingsType> = z
  .object({
    AudioDescriptions: ListOfAudioDescriptionSchema.exactOptional().openapi({
      xml: { name: 'audioDescriptions' },
      description:
        '(AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.',
    }),
    CaptionDescriptions: ListOfCaptionDescriptionPresetSchema.exactOptional().openapi({
      xml: { name: 'captionDescriptions' },
      description:
        'This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.',
    }),
    ContainerSettings: ContainerSettingsSchema.exactOptional().openapi({
      xml: { name: 'containerSettings' },
      description: 'Container specific settings.',
    }),
    VideoDescription: VideoDescriptionSchema.exactOptional().openapi({
      xml: { name: 'videoDescription' },
      description:
        'VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.',
    }),
  })
  .openapi({ description: 'Settings for preset', required: [] })
  .openapi('PresetSettings')

type PresetType = {
  Arn?: z.infer<typeof StringSchema>
  Category?: z.infer<typeof StringSchema>
  CreatedAt?: z.infer<typeof TimestampUnixSchema>
  Description?: z.infer<typeof StringSchema>
  LastUpdated?: z.infer<typeof TimestampUnixSchema>
  Name: z.infer<typeof StringSchema>
  Settings: z.infer<typeof PresetSettingsSchema>
  Type?: z.infer<typeof TypeSchema>
}

const PresetSchema: z.ZodType<PresetType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'An identifier for this resource that is unique within all of AWS.',
    }),
    Category: StringSchema.exactOptional().openapi({
      xml: { name: 'category' },
      description: 'An optional category you create to organize your presets.',
    }),
    CreatedAt: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The timestamp in epoch seconds for preset creation.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'An optional description you create for each preset.',
    }),
    LastUpdated: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'lastUpdated' },
      description: 'The timestamp in epoch seconds when the preset was last updated.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        'A name you create for each preset. Each name must be unique within your account.',
    }),
    Settings: PresetSettingsSchema.openapi({
      xml: { name: 'settings' },
      description: 'Settings for preset',
    }),
    Type: TypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        "A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.",
    }),
  })
  .openapi({
    required: ['Settings', 'Name'],
    description:
      'A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.',
  })
  .openapi('Preset')

type CreatePresetResponseType = { Preset?: z.infer<typeof PresetSchema> }

type GetJobResponseType = { Job?: z.infer<typeof JobSchema> }

type GetJobTemplateResponseType = { JobTemplate?: z.infer<typeof JobTemplateSchema> }

type GetPresetResponseType = { Preset?: z.infer<typeof PresetSchema> }

type ListOfJobTemplateType = z.infer<typeof JobTemplateSchema>[]

const ListOfJobTemplateSchema: z.ZodType<ListOfJobTemplateType> = z
  .array(JobTemplateSchema)
  .openapi('ListOfJobTemplate')

type ListJobTemplatesResponseType = {
  JobTemplates?: z.infer<typeof ListOfJobTemplateSchema>
  NextToken?: z.infer<typeof StringSchema>
}

type ListOfJobType = z.infer<typeof JobSchema>[]

const ListOfJobSchema: z.ZodType<ListOfJobType> = z.array(JobSchema).openapi('ListOfJob')

type ListJobsResponseType = {
  Jobs?: z.infer<typeof ListOfJobSchema>
  NextToken?: z.infer<typeof StringSchema>
}

type ListOfPresetType = z.infer<typeof PresetSchema>[]

const ListOfPresetSchema: z.ZodType<ListOfPresetType> = z
  .array(PresetSchema)
  .openapi('ListOfPreset')

type ListPresetsResponseType = {
  NextToken?: z.infer<typeof StringSchema>
  Presets?: z.infer<typeof ListOfPresetSchema>
}

type UpdateJobTemplateResponseType = { JobTemplate?: z.infer<typeof JobTemplateSchema> }

type UpdatePresetResponseType = { Preset?: z.infer<typeof PresetSchema> }

type CreateJobRequestType = {
  AccelerationSettings?: z.infer<typeof AccelerationSettingsSchema>
  BillingTagsSource?: z.infer<typeof BillingTagsSourceSchema>
  ClientRequestToken?: z.infer<typeof StringSchema>
  HopDestinations?: z.infer<typeof ListOfHopDestinationSchema>
  JobTemplate?: z.infer<typeof StringSchema>
  Priority?: z.infer<typeof IntegerMinNegative50Max50Schema>
  Queue?: z.infer<typeof StringSchema>
  Role: z.infer<typeof StringSchema>
  Settings: z.infer<typeof JobSettingsSchema>
  SimulateReservedQueue?: z.infer<typeof SimulateReservedQueueSchema>
  StatusUpdateInterval?: z.infer<typeof StatusUpdateIntervalSchema>
  Tags?: z.infer<typeof MapOfStringSchema>
  UserMetadata?: z.infer<typeof MapOfStringSchema>
}

type CreateJobTemplateRequestType = {
  AccelerationSettings?: z.infer<typeof AccelerationSettingsSchema>
  Category?: z.infer<typeof StringSchema>
  Description?: z.infer<typeof StringSchema>
  HopDestinations?: z.infer<typeof ListOfHopDestinationSchema>
  Name: z.infer<typeof StringSchema>
  Priority?: z.infer<typeof IntegerMinNegative50Max50Schema>
  Queue?: z.infer<typeof StringSchema>
  Settings: z.infer<typeof JobTemplateSettingsSchema>
  StatusUpdateInterval?: z.infer<typeof StatusUpdateIntervalSchema>
  Tags?: z.infer<typeof MapOfStringSchema>
}

type CreatePresetRequestType = {
  Category?: z.infer<typeof StringSchema>
  Description?: z.infer<typeof StringSchema>
  Name: z.infer<typeof StringSchema>
  Settings: z.infer<typeof PresetSettingsSchema>
  Tags?: z.infer<typeof MapOfStringSchema>
}

type UpdateJobTemplateRequestType = {
  AccelerationSettings?: z.infer<typeof AccelerationSettingsSchema>
  Category?: z.infer<typeof StringSchema>
  Description?: z.infer<typeof StringSchema>
  HopDestinations?: z.infer<typeof ListOfHopDestinationSchema>
  Priority?: z.infer<typeof IntegerMinNegative50Max50Schema>
  Queue?: z.infer<typeof StringSchema>
  Settings?: z.infer<typeof JobTemplateSettingsSchema>
  StatusUpdateInterval?: z.infer<typeof StatusUpdateIntervalSchema>
}

type UpdatePresetRequestType = {
  Category?: z.infer<typeof StringSchema>
  Description?: z.infer<typeof StringSchema>
  Settings?: z.infer<typeof PresetSettingsSchema>
}

const AssociateCertificateResponseSchema = z.looseObject({}).openapi('AssociateCertificateResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const CancelJobResponseSchema = z.looseObject({}).openapi('CancelJobResponse')

const CreateJobResponseSchema: z.ZodType<CreateJobResponseType> = z
  .object({
    Job: JobSchema.exactOptional().openapi({
      xml: { name: 'job' },
      description:
        'Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateJobResponse')

const CreateJobTemplateResponseSchema: z.ZodType<CreateJobTemplateResponseType> = z
  .object({
    JobTemplate: JobTemplateSchema.exactOptional().openapi({
      xml: { name: 'jobTemplate' },
      description:
        'A job template is a pre-made set of encoding instructions that you can use to quickly create a job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateJobTemplateResponse')

const CreatePresetResponseSchema: z.ZodType<CreatePresetResponseType> = z
  .object({
    Preset: PresetSchema.exactOptional().openapi({
      xml: { name: 'preset' },
      description:
        'A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreatePresetResponse')

const PricingPlanSchema = z
  .enum(['ON_DEMAND', 'RESERVED'])
  .openapi({
    description:
      'Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.',
  })
  .openapi('PricingPlan')

const CommitmentSchema = z
  .literal('ONE_YEAR')
  .openapi({
    description: 'The length of the term of your reserved queue pricing plan commitment.',
  })
  .openapi('Commitment')

const RenewalTypeSchema = z
  .enum(['AUTO_RENEW', 'EXPIRE'])
  .openapi({
    description:
      'Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.',
  })
  .openapi('RenewalType')

const ReservationPlanStatusSchema = z
  .enum(['ACTIVE', 'EXPIRED'])
  .openapi({
    description: 'Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.',
  })
  .openapi('ReservationPlanStatus')

const ReservationPlanSchema = z
  .object({
    Commitment: CommitmentSchema.exactOptional().openapi({
      xml: { name: 'commitment' },
      description: 'The length of the term of your reserved queue pricing plan commitment.',
    }),
    ExpiresAt: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'expiresAt' },
      description:
        'The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.',
    }),
    PurchasedAt: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'purchasedAt' },
      description:
        'The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.',
    }),
    RenewalType: RenewalTypeSchema.exactOptional().openapi({
      xml: { name: 'renewalType' },
      description:
        'Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.',
    }),
    ReservedSlots: IntegerSchema.exactOptional().openapi({
      xml: { name: 'reservedSlots' },
      description:
        "Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.",
    }),
    Status: ReservationPlanStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        'Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.',
    }),
  })
  .openapi({
    description:
      'Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.',
    required: [],
  })
  .openapi('ReservationPlan')

const QueueStatusSchema = z
  .enum(['ACTIVE', 'PAUSED'])
  .openapi({
    description:
      "Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.",
  })
  .openapi('QueueStatus')

const QueueSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'An identifier for this resource that is unique within all of AWS.',
    }),
    CreatedAt: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'createdAt' },
      description: 'The timestamp in epoch seconds for when you created the queue.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'An optional description that you create for each queue.',
    }),
    LastUpdated: TimestampUnixSchema.exactOptional().openapi({
      xml: { name: 'lastUpdated' },
      description: 'The timestamp in epoch seconds for when you most recently updated the queue.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        'A name that you create for each queue. Each name must be unique within your account.',
    }),
    PricingPlan: PricingPlanSchema.exactOptional().openapi({
      xml: { name: 'pricingPlan' },
      description:
        'Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.',
    }),
    ProgressingJobsCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'progressingJobsCount' },
      description: 'The estimated number of jobs with a PROGRESSING status.',
    }),
    ReservationPlan: ReservationPlanSchema.exactOptional().openapi({
      xml: { name: 'reservationPlan' },
      description:
        'Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.',
    }),
    Status: QueueStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        "Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.",
    }),
    SubmittedJobsCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'submittedJobsCount' },
      description: 'The estimated number of jobs with a SUBMITTED status.',
    }),
    Type: TypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description:
        "Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.",
    }),
  })
  .openapi({
    required: ['Name'],
    description:
      "You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.",
  })
  .openapi('Queue')

const CreateQueueResponseSchema = z
  .object({
    Queue: QueueSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.",
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateQueueResponse')

const DeleteJobTemplateResponseSchema = z.looseObject({}).openapi('DeleteJobTemplateResponse')

const DeletePolicyResponseSchema = z.looseObject({}).openapi('DeletePolicyResponse')

const DeletePresetResponseSchema = z.looseObject({}).openapi('DeletePresetResponse')

const DeleteQueueResponseSchema = z.looseObject({}).openapi('DeleteQueueResponse')

const EndpointSchema = z
  .object({
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: 'URL of endpoint',
    }),
  })
  .openapi({ description: 'Describes an account-specific API endpoint.', required: [] })
  .openapi('Endpoint')

const ListOfEndpointSchema = z.array(EndpointSchema).openapi('ListOfEndpoint')

const DescribeEndpointsResponseSchema = z
  .object({
    Endpoints: ListOfEndpointSchema.exactOptional().openapi({
      xml: { name: 'endpoints' },
      description: 'List of endpoints',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Use this string to request the next batch of endpoints.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeEndpointsResponse')

const DisassociateCertificateResponseSchema = z
  .looseObject({})
  .openapi('DisassociateCertificateResponse')

const GetJobResponseSchema: z.ZodType<GetJobResponseType> = z
  .object({
    Job: JobSchema.exactOptional().openapi({
      xml: { name: 'job' },
      description:
        'Each job converts an input file into an output file or files. For more information, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetJobResponse')

const GetJobTemplateResponseSchema: z.ZodType<GetJobTemplateResponseType> = z
  .object({
    JobTemplate: JobTemplateSchema.exactOptional().openapi({
      xml: { name: 'jobTemplate' },
      description:
        'A job template is a pre-made set of encoding instructions that you can use to quickly create a job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetJobTemplateResponse')

const InputPolicySchema = z
  .enum(['ALLOWED', 'DISALLOWED'])
  .openapi({
    description:
      'An input policy allows or disallows a job you submit to run based on the conditions that you specify.',
  })
  .openapi('InputPolicy')

const PolicySchema = z
  .object({
    HttpInputs: InputPolicySchema.exactOptional().openapi({
      xml: { name: 'httpInputs' },
      description: 'Allow or disallow jobs that specify HTTP inputs.',
    }),
    HttpsInputs: InputPolicySchema.exactOptional().openapi({
      xml: { name: 'httpsInputs' },
      description: 'Allow or disallow jobs that specify HTTPS inputs.',
    }),
    S3Inputs: InputPolicySchema.exactOptional().openapi({
      xml: { name: 's3Inputs' },
      description: 'Allow or disallow jobs that specify Amazon S3 inputs.',
    }),
  })
  .openapi({
    description:
      'A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
    required: [],
  })
  .openapi('Policy')

const GetPolicyResponseSchema = z
  .object({
    Policy: PolicySchema.exactOptional().openapi({
      xml: { name: 'policy' },
      description:
        'A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetPolicyResponse')

const GetPresetResponseSchema: z.ZodType<GetPresetResponseType> = z
  .object({
    Preset: PresetSchema.exactOptional().openapi({
      xml: { name: 'preset' },
      description:
        'A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetPresetResponse')

const GetQueueResponseSchema = z
  .object({
    Queue: QueueSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetQueueResponse')

const ListJobTemplatesResponseSchema: z.ZodType<ListJobTemplatesResponseType> = z
  .object({
    JobTemplates: ListOfJobTemplateSchema.exactOptional().openapi({
      xml: { name: 'jobTemplates' },
      description: 'List of Job templates.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Use this string to request the next batch of job templates.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListJobTemplatesResponse')

const ListJobsResponseSchema: z.ZodType<ListJobsResponseType> = z
  .object({
    Jobs: ListOfJobSchema.exactOptional().openapi({
      xml: { name: 'jobs' },
      description: 'List of jobs',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Use this string to request the next batch of jobs.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListJobsResponse')

const ListPresetsResponseSchema: z.ZodType<ListPresetsResponseType> = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Use this string to request the next batch of presets.',
    }),
    Presets: ListOfPresetSchema.exactOptional().openapi({
      xml: { name: 'presets' },
      description: 'List of presets',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListPresetsResponse')

const ListOfQueueSchema = z.array(QueueSchema).openapi('ListOfQueue')

const ListQueuesResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Use this string to request the next batch of queues.',
    }),
    Queues: ListOfQueueSchema.exactOptional().openapi({
      xml: { name: 'queues' },
      description: 'List of queues.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListQueuesResponse')

const ResourceTagsSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The Amazon Resource Name (ARN) of the resource.',
    }),
    Tags: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'The tags for the resource.',
    }),
  })
  .openapi({
    description:
      'The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.',
    required: [],
  })
  .openapi('ResourceTags')

const ListTagsForResourceResponseSchema = z
  .object({
    ResourceTags: ResourceTagsSchema.exactOptional().openapi({
      xml: { name: 'resourceTags' },
      description:
        'The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutPolicyResponseSchema = z
  .object({
    Policy: PolicySchema.exactOptional().openapi({
      xml: { name: 'policy' },
      description:
        'A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
    }),
  })
  .openapi({ required: [] })
  .openapi('PutPolicyResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const UpdateJobTemplateResponseSchema: z.ZodType<UpdateJobTemplateResponseType> = z
  .object({
    JobTemplate: JobTemplateSchema.exactOptional().openapi({
      xml: { name: 'jobTemplate' },
      description:
        'A job template is a pre-made set of encoding instructions that you can use to quickly create a job.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateJobTemplateResponse')

const UpdatePresetResponseSchema: z.ZodType<UpdatePresetResponseType> = z
  .object({
    Preset: PresetSchema.exactOptional().openapi({
      xml: { name: 'preset' },
      description:
        'A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePresetResponse')

const UpdateQueueResponseSchema = z
  .object({
    Queue: QueueSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.",
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateQueueResponse')

const AssociateCertificateRequestSchema = z
  .object({
    Arn: StringSchema.openapi({
      xml: { name: 'arn' },
      description:
        'The ARN of the ACM certificate that you want to associate with your MediaConvert resource.',
    }),
  })
  .openapi({ required: ['Arn'], title: 'AssociateCertificateRequest' })
  .openapi('AssociateCertificateRequest')

const CancelJobRequestSchema = z
  .looseObject({})
  .openapi({ title: 'CancelJobRequest' })
  .openapi('CancelJobRequest')

const CreateJobRequestSchema: z.ZodType<CreateJobRequestType> = z
  .object({
    AccelerationSettings: AccelerationSettingsSchema.exactOptional().openapi({
      xml: { name: 'accelerationSettings' },
      description:
        'Optional. Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.',
    }),
    BillingTagsSource: BillingTagsSourceSchema.exactOptional().openapi({
      xml: { name: 'billingTagsSource' },
      description:
        "Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.",
    }),
    ClientRequestToken: StringSchema.exactOptional().openapi({
      xml: { name: 'clientRequestToken' },
      description:
        'Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.',
    }),
    HopDestinations: ListOfHopDestinationSchema.exactOptional().openapi({
      xml: { name: 'hopDestinations' },
      description:
        'Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.',
    }),
    JobTemplate: StringSchema.exactOptional().openapi({
      xml: { name: 'jobTemplate' },
      description:
        'Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.',
    }),
    Priority: IntegerMinNegative50Max50Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description:
        "Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.",
    }),
    Queue: StringSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.",
    }),
    Role: StringSchema.openapi({
      xml: { name: 'role' },
      description:
        'Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.',
    }),
    Settings: JobSettingsSchema.openapi({
      xml: { name: 'settings' },
      description: 'JobSettings contains all the transcode settings for a job.',
    }),
    SimulateReservedQueue: SimulateReservedQueueSchema.exactOptional().openapi({
      xml: { name: 'simulateReservedQueue' },
      description:
        'Optional. Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.',
    }),
    StatusUpdateInterval: StatusUpdateIntervalSchema.exactOptional().openapi({
      xml: { name: 'statusUpdateInterval' },
      description:
        'Optional. Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
    }),
    Tags: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description:
        'Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.',
    }),
    UserMetadata: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'userMetadata' },
      description:
        'Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.',
    }),
  })
  .openapi({ required: ['Role', 'Settings'], title: 'CreateJobRequest' })
  .openapi('CreateJobRequest')

const CreateJobTemplateRequestSchema: z.ZodType<CreateJobTemplateRequestType> = z
  .object({
    AccelerationSettings: AccelerationSettingsSchema.exactOptional().openapi({
      xml: { name: 'accelerationSettings' },
      description:
        'Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.',
    }),
    Category: StringSchema.exactOptional().openapi({
      xml: { name: 'category' },
      description: 'Optional. A category for the job template you are creating',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'Optional. A description of the job template you are creating.',
    }),
    HopDestinations: ListOfHopDestinationSchema.exactOptional().openapi({
      xml: { name: 'hopDestinations' },
      description:
        'Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the job template you are creating.',
    }),
    Priority: IntegerMinNegative50Max50Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description:
        "Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.",
    }),
    Queue: StringSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description:
        "Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.",
    }),
    Settings: JobTemplateSettingsSchema.openapi({
      xml: { name: 'settings' },
      description:
        'JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.',
    }),
    StatusUpdateInterval: StatusUpdateIntervalSchema.exactOptional().openapi({
      xml: { name: 'statusUpdateInterval' },
      description:
        'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
    }),
    Tags: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description:
        'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
    }),
  })
  .openapi({ required: ['Settings', 'Name'], title: 'CreateJobTemplateRequest' })
  .openapi('CreateJobTemplateRequest')

const CreatePresetRequestSchema: z.ZodType<CreatePresetRequestType> = z
  .object({
    Category: StringSchema.exactOptional().openapi({
      xml: { name: 'category' },
      description: 'Optional. A category for the preset you are creating.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'Optional. A description of the preset you are creating.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the preset you are creating.',
    }),
    Settings: PresetSettingsSchema.openapi({
      xml: { name: 'settings' },
      description: 'Settings for preset',
    }),
    Tags: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description:
        'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
    }),
  })
  .openapi({ required: ['Settings', 'Name'], title: 'CreatePresetRequest' })
  .openapi('CreatePresetRequest')

const ReservationPlanSettingsSchema = z
  .object({
    Commitment: CommitmentSchema.openapi({
      xml: { name: 'commitment' },
      description: 'The length of the term of your reserved queue pricing plan commitment.',
    }),
    RenewalType: RenewalTypeSchema.openapi({
      xml: { name: 'renewalType' },
      description:
        'Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.',
    }),
    ReservedSlots: IntegerSchema.openapi({
      xml: { name: 'reservedSlots' },
      description:
        "Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.",
    }),
  })
  .openapi({
    required: ['Commitment', 'ReservedSlots', 'RenewalType'],
    description:
      'Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.',
  })
  .openapi('ReservationPlanSettings')

const CreateQueueRequestSchema = z
  .object({
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'Optional. A description of the queue that you are creating.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description: 'The name of the queue that you are creating.',
    }),
    PricingPlan: PricingPlanSchema.exactOptional().openapi({
      xml: { name: 'pricingPlan' },
      description:
        'Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.',
    }),
    ReservationPlanSettings: ReservationPlanSettingsSchema.exactOptional().openapi({
      xml: { name: 'reservationPlanSettings' },
      description:
        'Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.',
    }),
    Status: QueueStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        "Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.",
    }),
    Tags: MapOfStringSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description:
        'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
    }),
  })
  .openapi({ required: ['Name'], title: 'CreateQueueRequest' })
  .openapi('CreateQueueRequest')

const DeleteJobTemplateRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteJobTemplateRequest' })
  .openapi('DeleteJobTemplateRequest')

const DeletePolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeletePolicyRequest' })
  .openapi('DeletePolicyRequest')

const DeletePresetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeletePresetRequest' })
  .openapi('DeletePresetRequest')

const DeleteQueueRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteQueueRequest' })
  .openapi('DeleteQueueRequest')

const DescribeEndpointsModeSchema = z
  .enum(['DEFAULT', 'GET_ONLY'])
  .openapi({
    description:
      "Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.",
  })
  .openapi('DescribeEndpointsMode')

const DescribeEndpointsRequestSchema = z
  .object({
    MaxResults: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxResults' },
      description:
        'Optional. Max number of endpoints, up to twenty, that will be returned at one time.',
    }),
    Mode: DescribeEndpointsModeSchema.exactOptional().openapi({
      xml: { name: 'mode' },
      description:
        "Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.",
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description:
        'Use this string, provided with the response to a previous request, to request the next batch of endpoints.',
    }),
  })
  .openapi({
    title: 'DescribeEndpointsRequest',
    description: 'DescribeEndpointsRequest',
    required: [],
  })
  .openapi('DescribeEndpointsRequest')

const DisassociateCertificateRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DisassociateCertificateRequest' })
  .openapi('DisassociateCertificateRequest')

const GetJobRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetJobRequest' })
  .openapi('GetJobRequest')

const GetJobTemplateRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetJobTemplateRequest' })
  .openapi('GetJobTemplateRequest')

const GetPolicyRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetPolicyRequest' })
  .openapi('GetPolicyRequest')

const GetPresetRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetPresetRequest' })
  .openapi('GetPresetRequest')

const GetQueueRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetQueueRequest' })
  .openapi('GetQueueRequest')

const JobTemplateListBySchema = z
  .enum(['NAME', 'CREATION_DATE', 'SYSTEM'])
  .openapi({
    description:
      "Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
  })
  .openapi('JobTemplateListBy')

const IntegerMin1Max20Schema = z.int().min(1).max(20).openapi('IntegerMin1Max20')

const OrderSchema = z
  .enum(['ASCENDING', 'DESCENDING'])
  .openapi({
    description:
      'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
  })
  .openapi('Order')

const ListJobTemplatesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListJobTemplatesRequest' })
  .openapi('ListJobTemplatesRequest')

const ListJobsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListJobsRequest' })
  .openapi('ListJobsRequest')

const PresetListBySchema = z
  .enum(['NAME', 'CREATION_DATE', 'SYSTEM'])
  .openapi({
    description:
      "Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
  })
  .openapi('PresetListBy')

const ListPresetsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListPresetsRequest' })
  .openapi('ListPresetsRequest')

const QueueListBySchema = z
  .enum(['NAME', 'CREATION_DATE'])
  .openapi({
    description:
      "Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.",
  })
  .openapi('QueueListBy')

const ListQueuesRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListQueuesRequest' })
  .openapi('ListQueuesRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutPolicyRequestSchema = z
  .object({
    Policy: PolicySchema.openapi({
      xml: { name: 'policy' },
      description:
        'A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
    }),
  })
  .openapi({ required: ['Policy'], title: 'PutPolicyRequest' })
  .openapi('PutPolicyRequest')

const TagResourceRequestSchema = z
  .object({
    Arn: StringSchema.openapi({
      xml: { name: 'arn' },
      description:
        'The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.',
    }),
    Tags: MapOfStringSchema.openapi({
      xml: { name: 'tags' },
      description:
        'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
    }),
  })
  .openapi({ required: ['Arn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({
    TagKeys: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'tagKeys' },
      description: 'The keys of the tags that you want to remove from the resource.',
    }),
  })
  .openapi({ title: 'UntagResourceRequest', required: [] })
  .openapi('UntagResourceRequest')

const UpdateJobTemplateRequestSchema: z.ZodType<UpdateJobTemplateRequestType> = z
  .object({
    AccelerationSettings: AccelerationSettingsSchema.exactOptional().openapi({
      xml: { name: 'accelerationSettings' },
      description:
        'Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.',
    }),
    Category: StringSchema.exactOptional().openapi({
      xml: { name: 'category' },
      description: 'The new category for the job template, if you are changing it.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'The new description for the job template, if you are changing it.',
    }),
    HopDestinations: ListOfHopDestinationSchema.exactOptional().openapi({
      xml: { name: 'hopDestinations' },
      description: 'Optional list of hop destinations.',
    }),
    Priority: IntegerMinNegative50Max50Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description:
        "Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.",
    }),
    Queue: StringSchema.exactOptional().openapi({
      xml: { name: 'queue' },
      description: 'The new queue for the job template, if you are changing it.',
    }),
    Settings: JobTemplateSettingsSchema.exactOptional().openapi({
      xml: { name: 'settings' },
      description:
        'JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.',
    }),
    StatusUpdateInterval: StatusUpdateIntervalSchema.exactOptional().openapi({
      xml: { name: 'statusUpdateInterval' },
      description:
        'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
    }),
  })
  .openapi({ title: 'UpdateJobTemplateRequest', required: [] })
  .openapi('UpdateJobTemplateRequest')

const UpdatePresetRequestSchema: z.ZodType<UpdatePresetRequestType> = z
  .object({
    Category: StringSchema.exactOptional().openapi({
      xml: { name: 'category' },
      description: 'The new category for the preset, if you are changing it.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'The new description for the preset, if you are changing it.',
    }),
    Settings: PresetSettingsSchema.exactOptional().openapi({
      xml: { name: 'settings' },
      description: 'Settings for preset',
    }),
  })
  .openapi({ title: 'UpdatePresetRequest', required: [] })
  .openapi('UpdatePresetRequest')

const UpdateQueueRequestSchema = z
  .object({
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description: 'The new description for the queue, if you are changing it.',
    }),
    ReservationPlanSettings: ReservationPlanSettingsSchema.exactOptional().openapi({
      xml: { name: 'reservationPlanSettings' },
      description:
        "The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.",
    }),
    Status: QueueStatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        "Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.",
    }),
  })
  .openapi({ title: 'UpdateQueueRequest', required: [] })
  .openapi('UpdateQueueRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const post20170829CertificatesRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/certificates',
  description:
    'Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.',
  operationId: 'AssociateCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              arn: z
                .string()
                .openapi({
                  description:
                    'The ARN of the ACM certificate that you want to associate with your MediaConvert resource.',
                }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateCertificateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829JobsIdRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/jobs/{id}',
  description: 'Retrieve the JSON for a specific completed transcoding job.',
  operationId: 'GetJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'the job ID of the job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20170829JobsIdRoute = createRoute({
  method: 'delete',
  path: '/2017-08-29/jobs/{id}',
  description: "Permanently cancel a job. Once you have canceled a job, you can't start it again.",
  operationId: 'CancelJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'The Job ID of the job to be cancelled.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829JobsRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/jobs',
  description:
    'Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.',
  operationId: 'ListJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Optional. Number of jobs, up to twenty, that will be returned at one time.',
            schema: { type: 'integer', minimum: 1, maximum: 20 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Optional. Use this string, provided with the response to a previous request, to request the next batch of jobs.',
            schema: { type: 'string' },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            description:
              'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            schema: {
              type: 'string',
              enum: ['ASCENDING', 'DESCENDING'],
              description:
                'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            },
          },
          description:
            'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
        }),
      queue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            description: 'Optional. Provide a queue name to get back only jobs from that queue.',
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['SUBMITTED', 'PROGRESSING', 'COMPLETE', 'CANCELED', 'ERROR'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description:
              "Optional. A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.",
            schema: {
              type: 'string',
              enum: ['SUBMITTED', 'PROGRESSING', 'COMPLETE', 'CANCELED', 'ERROR'],
              description:
                "A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.",
            },
          },
          description:
            "A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.",
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20170829JobsRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/jobs',
  description:
    'Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
  operationId: 'CreateJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accelerationSettings: z
                .object({
                  Mode: AccelerationModeSchema.exactOptional().openapi({
                    xml: { name: 'mode' },
                    description:
                      'Specify the conditions when the service will run your job with accelerated transcoding.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Accelerated transcoding can significantly speed up jobs with long, visually complex content.',
                  required: [],
                }),
              billingTagsSource: z
                .enum(['QUEUE', 'PRESET', 'JOB_TEMPLATE', 'JOB'])
                .exactOptional()
                .openapi({
                  description:
                    'The tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up.',
                }),
              clientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Prevent duplicate jobs from being created and ensure idempotency for your requests. A client request token can be any string that includes up to 64 ASCII characters. If you reuse a client request token within one minute of a successful request, the API returns the job details of the original request instead. For more information see https://docs.aws.amazon.com/mediaconvert/latest/apireference/idempotency.html.',
                }),
              hopDestinations: z
                .array(HopDestinationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.',
                }),
              jobTemplate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. When you create a job, you can either specify a job template or specify the transcoding settings individually.',
                }),
              priority: z
                .int()
                .min(-50)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    "Optional. Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.",
                }),
              queue: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.",
                }),
              role: z
                .string()
                .openapi({
                  description:
                    'Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.',
                }),
              settings: z
                .object({
                  AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
                    xml: { name: 'adAvailOffset' },
                    description:
                      'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.',
                  }),
                  AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
                    xml: { name: 'availBlanking' },
                    description:
                      'Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.',
                  }),
                  Esam: EsamSettingsSchema.exactOptional().openapi({
                    xml: { name: 'esam' },
                    description:
                      "Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.",
                  }),
                  ExtendedDataServices: ExtendedDataServicesSchema.exactOptional().openapi({
                    xml: { name: 'extendedDataServices' },
                    description:
                      'If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.',
                  }),
                  Inputs: ListOfInputSchema.exactOptional().openapi({
                    xml: { name: 'inputs' },
                    description:
                      'Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.',
                  }),
                  KantarWatermark: KantarWatermarkSettingsSchema.exactOptional().openapi({
                    xml: { name: 'kantarWatermark' },
                    description:
                      'Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.',
                  }),
                  MotionImageInserter: MotionImageInserterSchema.exactOptional().openapi({
                    xml: { name: 'motionImageInserter' },
                    description:
                      'Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.',
                  }),
                  NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'nielsenConfiguration' },
                    description:
                      "Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.",
                  }),
                  NielsenNonLinearWatermark:
                    NielsenNonLinearWatermarkSettingsSchema.exactOptional().openapi({
                      xml: { name: 'nielsenNonLinearWatermark' },
                      description:
                        'Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]',
                    }),
                  OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
                    xml: { name: 'outputGroups' },
                    description:
                      '(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings',
                  }),
                  TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
                    xml: { name: 'timecodeConfig' },
                    description:
                      "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.",
                  }),
                  TimedMetadataInsertion: TimedMetadataInsertionSchema.exactOptional().openapi({
                    xml: { name: 'timedMetadataInsertion' },
                    description:
                      'Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
                  }),
                })
                .openapi({
                  description: 'JobSettings contains all the transcode settings for a job.',
                  required: [],
                }),
              simulateReservedQueue: z
                .enum(['DISABLED', 'ENABLED'])
                .exactOptional()
                .openapi({
                  description:
                    'Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.',
                }),
              statusUpdateInterval: z
                .enum([
                  'SECONDS_10',
                  'SECONDS_12',
                  'SECONDS_15',
                  'SECONDS_20',
                  'SECONDS_30',
                  'SECONDS_60',
                  'SECONDS_120',
                  'SECONDS_180',
                  'SECONDS_240',
                  'SECONDS_300',
                  'SECONDS_360',
                  'SECONDS_420',
                  'SECONDS_480',
                  'SECONDS_540',
                  'SECONDS_600',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.  Use standard AWS tags on your job for automatic integration with AWS services and for custom integrations and workflows.',
                }),
              userMetadata: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Optional. User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.  Use only for existing integrations or workflows that rely on job metadata tags. Otherwise, we recommend that you use standard AWS tags.',
                }),
            })
            .openapi({ required: ['role', 'settings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829JobTemplatesRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/jobTemplates',
  description:
    'Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array',
  operationId: 'ListJobTemplates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'category',
            in: 'query',
            required: false,
            description:
              'Optionally, specify a job template category to limit responses to only job templates from that category.',
            schema: { type: 'string' },
          },
        }),
      listBy: z
        .enum(['NAME', 'CREATION_DATE', 'SYSTEM'])
        .exactOptional()
        .openapi({
          param: {
            name: 'listBy',
            in: 'query',
            required: false,
            description:
              "Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
            schema: {
              type: 'string',
              enum: ['NAME', 'CREATION_DATE', 'SYSTEM'],
              description:
                "Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
            },
          },
          description:
            "Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Optional. Number of job templates, up to twenty, that will be returned at one time.',
            schema: { type: 'integer', minimum: 1, maximum: 20 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Use this string, provided with the response to a previous request, to request the next batch of job templates.',
            schema: { type: 'string' },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            description:
              'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            schema: {
              type: 'string',
              enum: ['ASCENDING', 'DESCENDING'],
              description:
                'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            },
          },
          description:
            'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobTemplatesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20170829JobTemplatesRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/jobTemplates',
  description:
    'Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
  operationId: 'CreateJobTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accelerationSettings: z
                .object({
                  Mode: AccelerationModeSchema.exactOptional().openapi({
                    xml: { name: 'mode' },
                    description:
                      'Specify the conditions when the service will run your job with accelerated transcoding.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Accelerated transcoding can significantly speed up jobs with long, visually complex content.',
                  required: [],
                }),
              category: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional. A category for the job template you are creating',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional. A description of the job template you are creating.',
                }),
              hopDestinations: z
                .array(HopDestinationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Optional. Use queue hopping to avoid overly long waits in the backlog of the queue that you submit your job to. Specify an alternate queue and the maximum time that your job will wait in the initial queue before hopping. For more information about this feature, see the AWS Elemental MediaConvert User Guide.',
                }),
              name: z
                .string()
                .openapi({ description: 'The name of the job template you are creating.' }),
              priority: z
                .int()
                .min(-50)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.",
                }),
              queue: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.",
                }),
              settings: z
                .object({
                  AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
                    xml: { name: 'adAvailOffset' },
                    description:
                      'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.',
                  }),
                  AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
                    xml: { name: 'availBlanking' },
                    description:
                      'Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.',
                  }),
                  Esam: EsamSettingsSchema.exactOptional().openapi({
                    xml: { name: 'esam' },
                    description:
                      "Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.",
                  }),
                  ExtendedDataServices: ExtendedDataServicesSchema.exactOptional().openapi({
                    xml: { name: 'extendedDataServices' },
                    description:
                      'If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.',
                  }),
                  Inputs: ListOfInputTemplateSchema.exactOptional().openapi({
                    xml: { name: 'inputs' },
                    description:
                      'Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template. Using the API, you can include multiple inputs when referencing a job template.',
                  }),
                  KantarWatermark: KantarWatermarkSettingsSchema.exactOptional().openapi({
                    xml: { name: 'kantarWatermark' },
                    description:
                      'Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.',
                  }),
                  MotionImageInserter: MotionImageInserterSchema.exactOptional().openapi({
                    xml: { name: 'motionImageInserter' },
                    description:
                      'Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.',
                  }),
                  NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'nielsenConfiguration' },
                    description:
                      "Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.",
                  }),
                  NielsenNonLinearWatermark:
                    NielsenNonLinearWatermarkSettingsSchema.exactOptional().openapi({
                      xml: { name: 'nielsenNonLinearWatermark' },
                      description:
                        'Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]',
                    }),
                  OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
                    xml: { name: 'outputGroups' },
                    description:
                      '(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings',
                  }),
                  TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
                    xml: { name: 'timecodeConfig' },
                    description:
                      "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.",
                  }),
                  TimedMetadataInsertion: TimedMetadataInsertionSchema.exactOptional().openapi({
                    xml: { name: 'timedMetadataInsertion' },
                    description:
                      'Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
                  }),
                })
                .openapi({
                  description:
                    'JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.',
                  required: [],
                }),
              statusUpdateInterval: z
                .enum([
                  'SECONDS_10',
                  'SECONDS_12',
                  'SECONDS_15',
                  'SECONDS_20',
                  'SECONDS_30',
                  'SECONDS_60',
                  'SECONDS_120',
                  'SECONDS_180',
                  'SECONDS_240',
                  'SECONDS_300',
                  'SECONDS_360',
                  'SECONDS_420',
                  'SECONDS_480',
                  'SECONDS_540',
                  'SECONDS_600',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
                }),
            })
            .openapi({ required: ['name', 'settings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829PresetsRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/presets',
  description:
    'Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.',
  operationId: 'ListPresets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'category',
            in: 'query',
            required: false,
            description:
              'Optionally, specify a preset category to limit responses to only presets from that category.',
            schema: { type: 'string' },
          },
        }),
      listBy: z
        .enum(['NAME', 'CREATION_DATE', 'SYSTEM'])
        .exactOptional()
        .openapi({
          param: {
            name: 'listBy',
            in: 'query',
            required: false,
            description:
              "Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
            schema: {
              type: 'string',
              enum: ['NAME', 'CREATION_DATE', 'SYSTEM'],
              description:
                "Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
            },
          },
          description:
            "Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.",
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Optional. Number of presets, up to twenty, that will be returned at one time',
            schema: { type: 'integer', minimum: 1, maximum: 20 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Use this string, provided with the response to a previous request, to request the next batch of presets.',
            schema: { type: 'string' },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            description:
              'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            schema: {
              type: 'string',
              enum: ['ASCENDING', 'DESCENDING'],
              description:
                'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            },
          },
          description:
            'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPresetsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20170829PresetsRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/presets',
  description:
    'Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
  operationId: 'CreatePreset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              category: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional. A category for the preset you are creating.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional. A description of the preset you are creating.',
                }),
              name: z.string().openapi({ description: 'The name of the preset you are creating.' }),
              settings: z
                .object({
                  AudioDescriptions: ListOfAudioDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'audioDescriptions' },
                    description:
                      '(AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.',
                  }),
                  CaptionDescriptions: ListOfCaptionDescriptionPresetSchema.exactOptional().openapi(
                    {
                      xml: { name: 'captionDescriptions' },
                      description:
                        'This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.',
                    },
                  ),
                  ContainerSettings: ContainerSettingsSchema.exactOptional().openapi({
                    xml: { name: 'containerSettings' },
                    description: 'Container specific settings.',
                  }),
                  VideoDescription: VideoDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'videoDescription' },
                    description:
                      'VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.',
                  }),
                })
                .openapi({ description: 'Settings for preset', required: [] }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
                }),
            })
            .openapi({ required: ['name', 'settings'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePresetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829QueuesRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/queues',
  description:
    'Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.',
  operationId: 'ListQueues',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      listBy: z
        .enum(['NAME', 'CREATION_DATE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'listBy',
            in: 'query',
            required: false,
            description:
              "Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.",
            schema: {
              type: 'string',
              enum: ['NAME', 'CREATION_DATE'],
              description:
                "Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.",
            },
          },
          description:
            "Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.",
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Optional. Number of queues, up to twenty, that will be returned at one time.',
            schema: { type: 'integer', minimum: 1, maximum: 20 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Use this string, provided with the response to a previous request, to request the next batch of queues.',
            schema: { type: 'string' },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            description:
              'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            schema: {
              type: 'string',
              enum: ['ASCENDING', 'DESCENDING'],
              description:
                'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
            },
          },
          description:
            'Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.',
        }),
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListQueuesResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20170829QueuesRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/queues',
  description:
    'Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html',
  operationId: 'CreateQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Optional. A description of the queue that you are creating.',
                }),
              name: z
                .string()
                .openapi({ description: 'The name of the queue that you are creating.' }),
              pricingPlan: z
                .enum(['ON_DEMAND', 'RESERVED'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.',
                }),
              reservationPlanSettings: z
                .object({
                  Commitment: CommitmentSchema.exactOptional().openapi({
                    xml: { name: 'commitment' },
                    description:
                      'The length of the term of your reserved queue pricing plan commitment.',
                  }),
                  RenewalType: RenewalTypeSchema.exactOptional().openapi({
                    xml: { name: 'renewalType' },
                    description:
                      'Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.',
                  }),
                  ReservedSlots: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'reservedSlots' },
                    description:
                      "Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.",
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.',
                  required: [],
                }),
              status: z
                .enum(['ACTIVE', 'PAUSED'])
                .exactOptional()
                .openapi({
                  description:
                    "Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.",
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateQueueResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829JobTemplatesNameRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/jobTemplates/{name}',
  description: 'Retrieve the JSON for a specific job template.',
  operationId: 'GetJobTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job template.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const put20170829JobTemplatesNameRoute = createRoute({
  method: 'put',
  path: '/2017-08-29/jobTemplates/{name}',
  description: 'Modify one of your existing job templates.',
  operationId: 'UpdateJobTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job template you are modifying',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accelerationSettings: z
                .object({
                  Mode: AccelerationModeSchema.exactOptional().openapi({
                    xml: { name: 'mode' },
                    description:
                      'Specify the conditions when the service will run your job with accelerated transcoding.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Accelerated transcoding can significantly speed up jobs with long, visually complex content.',
                  required: [],
                }),
              category: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new category for the job template, if you are changing it.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new description for the job template, if you are changing it.',
                }),
              hopDestinations: z
                .array(HopDestinationSchema)
                .exactOptional()
                .openapi({ description: 'Optional list of hop destinations.' }),
              priority: z
                .int()
                .min(-50)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    "Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.",
                }),
              queue: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new queue for the job template, if you are changing it.',
                }),
              settings: z
                .object({
                  AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
                    xml: { name: 'adAvailOffset' },
                    description:
                      'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.',
                  }),
                  AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
                    xml: { name: 'availBlanking' },
                    description:
                      'Settings for ad avail blanking. Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.',
                  }),
                  Esam: EsamSettingsSchema.exactOptional().openapi({
                    xml: { name: 'esam' },
                    description:
                      "Settings for Event Signaling And Messaging (ESAM). If you don't do ad insertion, you can ignore these settings.",
                  }),
                  ExtendedDataServices: ExtendedDataServicesSchema.exactOptional().openapi({
                    xml: { name: 'extendedDataServices' },
                    description:
                      'If your source content has EIA-608 Line 21 Data Services, enable this feature to specify what MediaConvert does with the Extended Data Services (XDS) packets. You can choose to pass through XDS packets, or remove them from the output. For more information about XDS, see EIA-608 Line Data Services, section 9.5.1.5 05h Content Advisory.',
                  }),
                  Inputs: ListOfInputTemplateSchema.exactOptional().openapi({
                    xml: { name: 'inputs' },
                    description:
                      'Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template. Using the API, you can include multiple inputs when referencing a job template.',
                  }),
                  KantarWatermark: KantarWatermarkSettingsSchema.exactOptional().openapi({
                    xml: { name: 'kantarWatermark' },
                    description:
                      'Use these settings only when you use Kantar watermarking. Specify the values that MediaConvert uses to generate and place Kantar watermarks in your output audio. These settings apply to every output in your job. In addition to specifying these values, you also need to store your Kantar credentials in AWS Secrets Manager. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/kantar-watermarking.html.',
                  }),
                  MotionImageInserter: MotionImageInserterSchema.exactOptional().openapi({
                    xml: { name: 'motionImageInserter' },
                    description:
                      'Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/motion-graphic-overlay.html.',
                  }),
                  NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'nielsenConfiguration' },
                    description:
                      "Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.",
                  }),
                  NielsenNonLinearWatermark:
                    NielsenNonLinearWatermarkSettingsSchema.exactOptional().openapi({
                      xml: { name: 'nielsenNonLinearWatermark' },
                      description:
                        'Ignore these settings unless you are using Nielsen non-linear watermarking. Specify the values that MediaConvert uses to generate and place Nielsen watermarks in your output audio. In addition to specifying these values, you also need to set up your cloud TIC server. These settings apply to every output in your job. The MediaConvert implementation is currently with the following Nielsen versions: Nielsen Watermark SDK Version 5.2.1 Nielsen NLM Watermark Engine Version 1.2.7 Nielsen Watermark Authenticator [SID_TIC] Version [5.0.0]',
                    }),
                  OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
                    xml: { name: 'outputGroups' },
                    description:
                      '(OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings',
                  }),
                  TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
                    xml: { name: 'timecodeConfig' },
                    description:
                      "These settings control how the service handles timecodes throughout the job. These settings don't affect input clipping.",
                  }),
                  TimedMetadataInsertion: TimedMetadataInsertionSchema.exactOptional().openapi({
                    xml: { name: 'timedMetadataInsertion' },
                    description:
                      'Insert user-defined custom ID3 metadata (id3) at timecodes (timecode) that you specify. In each output that you want to include this metadata, you must set ID3 metadata (timedMetadata) to Passthrough (PASSTHROUGH).',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.',
                  required: [],
                }),
              statusUpdateInterval: z
                .enum([
                  'SECONDS_10',
                  'SECONDS_12',
                  'SECONDS_15',
                  'SECONDS_20',
                  'SECONDS_30',
                  'SECONDS_60',
                  'SECONDS_120',
                  'SECONDS_180',
                  'SECONDS_240',
                  'SECONDS_300',
                  'SECONDS_360',
                  'SECONDS_420',
                  'SECONDS_480',
                  'SECONDS_540',
                  'SECONDS_600',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateJobTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20170829JobTemplatesNameRoute = createRoute({
  method: 'delete',
  path: '/2017-08-29/jobTemplates/{name}',
  description: 'Permanently delete a job template you have created.',
  operationId: 'DeleteJobTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the job template to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteJobTemplateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829PolicyRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/policy',
  description: 'Retrieve the JSON for your policy.',
  operationId: 'GetPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPolicyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const put20170829PolicyRoute = createRoute({
  method: 'put',
  path: '/2017-08-29/policy',
  description:
    'Create or change your policy. For more information about policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
  operationId: 'PutPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              policy: z
                .object({
                  HttpInputs: InputPolicySchema.exactOptional().openapi({
                    xml: { name: 'httpInputs' },
                    description: 'Allow or disallow jobs that specify HTTP inputs.',
                  }),
                  HttpsInputs: InputPolicySchema.exactOptional().openapi({
                    xml: { name: 'httpsInputs' },
                    description: 'Allow or disallow jobs that specify HTTPS inputs.',
                  }),
                  S3Inputs: InputPolicySchema.exactOptional().openapi({
                    xml: { name: 's3Inputs' },
                    description: 'Allow or disallow jobs that specify Amazon S3 inputs.',
                  }),
                })
                .openapi({
                  description:
                    'A policy configures behavior that you allow or disallow for your account. For information about MediaConvert policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html',
                  required: [],
                }),
            })
            .openapi({ required: ['policy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutPolicyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20170829PolicyRoute = createRoute({
  method: 'delete',
  path: '/2017-08-29/policy',
  description: 'Permanently delete a policy that you created.',
  operationId: 'DeletePolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePolicyResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829PresetsNameRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/presets/{name}',
  description: 'Retrieve the JSON for a specific preset.',
  operationId: 'GetPreset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the preset.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPresetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const put20170829PresetsNameRoute = createRoute({
  method: 'put',
  path: '/2017-08-29/presets/{name}',
  description: 'Modify one of your existing presets.',
  operationId: 'UpdatePreset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the preset you are modifying.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              category: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new category for the preset, if you are changing it.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new description for the preset, if you are changing it.',
                }),
              settings: z
                .object({
                  AudioDescriptions: ListOfAudioDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'audioDescriptions' },
                    description:
                      '(AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.',
                  }),
                  CaptionDescriptions: ListOfCaptionDescriptionPresetSchema.exactOptional().openapi(
                    {
                      xml: { name: 'captionDescriptions' },
                      description:
                        'This object holds groups of settings related to captions for one output. For each output that has captions, include one instance of CaptionDescriptions.',
                    },
                  ),
                  ContainerSettings: ContainerSettingsSchema.exactOptional().openapi({
                    xml: { name: 'containerSettings' },
                    description: 'Container specific settings.',
                  }),
                  VideoDescription: VideoDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'videoDescription' },
                    description:
                      'VideoDescription contains a group of video encoding settings. The specific video settings depend on the video codec that you choose for the property codec. Include one instance of VideoDescription per output.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Settings for preset', required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePresetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20170829PresetsNameRoute = createRoute({
  method: 'delete',
  path: '/2017-08-29/presets/{name}',
  description: 'Permanently delete a preset you have created.',
  operationId: 'DeletePreset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the preset to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePresetResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829QueuesNameRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/queues/{name}',
  description: 'Retrieve the JSON for a specific queue.',
  operationId: 'GetQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the queue that you want information about.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQueueResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const put20170829QueuesNameRoute = createRoute({
  method: 'put',
  path: '/2017-08-29/queues/{name}',
  description: 'Modify one of your existing queues.',
  operationId: 'UpdateQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the queue that you are modifying.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The new description for the queue, if you are changing it.',
                }),
              reservationPlanSettings: z
                .object({
                  Commitment: CommitmentSchema.exactOptional().openapi({
                    xml: { name: 'commitment' },
                    description:
                      'The length of the term of your reserved queue pricing plan commitment.',
                  }),
                  RenewalType: RenewalTypeSchema.exactOptional().openapi({
                    xml: { name: 'renewalType' },
                    description:
                      'Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.',
                  }),
                  ReservedSlots: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'reservedSlots' },
                    description:
                      "Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.",
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.',
                  required: [],
                }),
              status: z
                .enum(['ACTIVE', 'PAUSED'])
                .exactOptional()
                .openapi({
                  description:
                    "Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateQueueResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20170829QueuesNameRoute = createRoute({
  method: 'delete',
  path: '/2017-08-29/queues/{name}',
  description: 'Permanently delete a queue you have created.',
  operationId: 'DeleteQueue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            required: true,
            description: 'The name of the queue that you want to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteQueueResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20170829EndpointsRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/endpoints',
  description:
    'Send an request with an empty body to the regional API endpoint to get your account API endpoint.',
  operationId: 'DescribeEndpoints',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. Max number of endpoints, up to twenty, that will be returned at one time.',
                }),
              mode: z
                .enum(['DEFAULT', 'GET_ONLY'])
                .exactOptional()
                .openapi({
                  description:
                    "Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.",
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Use this string, provided with the response to a previous request, to request the next batch of endpoints.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEndpointsResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const delete20170829CertificatesArnRoute = createRoute({
  method: 'delete',
  path: '/2017-08-29/certificates/{arn}',
  description:
    'Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.',
  operationId: 'DisassociateCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateCertificateResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const get20170829TagsArnRoute = createRoute({
  method: 'get',
  path: '/2017-08-29/tags/{arn}',
  description: 'Retrieve the tags for a MediaConvert resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const put20170829TagsArnRoute = createRoute({
  method: 'put',
  path: '/2017-08-29/tags/{arn}',
  description:
    'Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      arn: z
        .string()
        .openapi({
          param: {
            name: 'arn',
            in: 'path',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tagKeys: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description: 'The keys of the tags that you want to remove from the resource.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const post20170829TagsRoute = createRoute({
  method: 'post',
  path: '/2017-08-29/tags',
  description:
    'Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              arn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .openapi({
                  description:
                    'The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.',
                }),
            })
            .openapi({ required: ['arn', 'tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
