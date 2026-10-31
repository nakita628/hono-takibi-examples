<h1 id="amazon-kinesis-firehose">Amazon Kinesis Firehose v2015-08-04</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Kinesis Data Firehose API Reference</fullname> <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon OpenSearch Service, Amazon Redshift, Splunk, and various other supportd destinations.</p>

Base URLs:

* <a href="http://firehose.us-east-1.amazonaws.com">http://firehose.us-east-1.amazonaws.com</a> - The Firehose multi-region endpoint

* <a href="https://firehose.us-east-1.amazonaws.com">https://firehose.us-east-1.amazonaws.com</a> - The Firehose multi-region endpoint

* <a href="http://firehose.cn-north-1.amazonaws.com.cn">http://firehose.cn-north-1.amazonaws.com.cn</a> - The Firehose endpoint for China (Beijing) and China (Ningxia)

* <a href="https://firehose.cn-north-1.amazonaws.com.cn">https://firehose.cn-north-1.amazonaws.com.cn</a> - The Firehose endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/firehose/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-kinesis-firehose-default">Default</h1>

## CreateDeliveryStream

<a id="opIdCreateDeliveryStream"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.CreateDeliveryStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.CreateDeliveryStream' \
  -d '{
    "DeliveryStreamName": {},
    "DeliveryStreamType": {},
    "KinesisStreamSourceConfiguration": {
      "KinesisStreamARN": {},
      "RoleARN": {}
    },
    "DeliveryStreamEncryptionConfigurationInput": {
      "KeyARN": {},
      "KeyType": {}
    },
    "S3DestinationConfiguration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ExtendedS3DestinationConfiguration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "S3BackupMode": {},
      "S3BackupConfiguration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "DataFormatConversionConfiguration": {
        "SchemaConfiguration": {
          "RoleARN": {},
          "CatalogId": {},
          "DatabaseName": {},
          "TableName": {},
          "Region": {},
          "VersionId": {}
        },
        "InputFormatConfiguration": {
          "Deserializer": {
            "OpenXJsonSerDe": {
              "ConvertDotsInJsonKeysToUnderscores": {},
              "CaseInsensitive": {},
              "ColumnToJsonKeyMappings": {
                "property1": "string",
                "property2": "string"
              }
            },
            "HiveJsonSerDe": {
              "TimestampFormats": {}
            }
          }
        },
        "OutputFormatConfiguration": {
          "Serializer": {
            "ParquetSerDe": {
              "BlockSizeBytes": {},
              "PageSizeBytes": {},
              "Compression": {},
              "EnableDictionaryCompression": {},
              "MaxPaddingBytes": {},
              "WriterVersion": {}
            },
            "OrcSerDe": {
              "StripeSizeBytes": {},
              "BlockSizeBytes": {},
              "RowIndexStride": {},
              "EnablePadding": {},
              "PaddingTolerance": {},
              "Compression": {},
              "BloomFilterColumns": {},
              "BloomFilterFalsePositiveProbability": {},
              "DictionaryKeyThreshold": {},
              "FormatVersion": {}
            }
          }
        },
        "Enabled": {}
      },
      "DynamicPartitioningConfiguration": {
        "RetryOptions": {
          "DurationInSeconds": {}
        },
        "Enabled": {}
      }
    },
    "RedshiftDestinationConfiguration": {
      "RoleARN": {},
      "ClusterJDBCURL": {},
      "CopyCommand": {
        "DataTableName": {},
        "DataTableColumns": {},
        "CopyOptions": {}
      },
      "Username": {},
      "Password": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3Configuration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "S3BackupMode": {},
      "S3BackupConfiguration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ElasticsearchDestinationConfiguration": {
      "RoleARN": {},
      "DomainARN": {},
      "ClusterEndpoint": {},
      "IndexName": {},
      "TypeName": {},
      "IndexRotationPeriod": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Configuration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "RoleARN": {},
        "SecurityGroupIds": {}
      }
    },
    "AmazonopensearchserviceDestinationConfiguration": {
      "RoleARN": {},
      "DomainARN": {},
      "ClusterEndpoint": {},
      "IndexName": {},
      "TypeName": {},
      "IndexRotationPeriod": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Configuration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "RoleARN": {},
        "SecurityGroupIds": {}
      }
    },
    "SplunkDestinationConfiguration": {
      "HECEndpoint": {},
      "HECEndpointType": {},
      "HECToken": {},
      "HECAcknowledgmentTimeoutInSeconds": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Configuration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "HttpEndpointDestinationConfiguration": {
      "EndpointConfiguration": {
        "Url": {},
        "Name": {},
        "AccessKey": {}
      },
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "RequestConfiguration": {
        "ContentEncoding": {},
        "CommonAttributes": {}
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "RoleARN": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Configuration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      }
    },
    "Tags": {},
    "AmazonOpenSearchServerlessDestinationConfiguration": {
      "RoleARN": {},
      "CollectionEndpoint": {},
      "IndexName": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Configuration": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "VpcConfiguration": {
        "SubnetIds": {},
        "RoleARN": {},
        "SecurityGroupIds": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.CreateDeliveryStream`

<p>Creates a Kinesis Data Firehose delivery stream.</p> <p>By default, you can create up to 50 delivery streams per Amazon Web Services Region.</p> <p>This is an asynchronous operation that immediately returns. The initial status of the delivery stream is <code>CREATING</code>. After the delivery stream is created, its status is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p> <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the <code>DeliveryStreamType</code> parameter to <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code> parameter.</p> <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on SSE for an existing delivery stream that doesn't have SSE enabled.</p> <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES, Amazon Redshift, or Splunk. You must specify only one of the following destination configuration parameters: <code>ExtendedS3DestinationConfiguration</code>, <code>S3DestinationConfiguration</code>, <code>ElasticsearchDestinationConfiguration</code>, <code>RedshiftDestinationConfiguration</code>, or <code>SplunkDestinationConfiguration</code>.</p> <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3.</p> <p>A few notes about Amazon Redshift as a destination:</p> <ul> <li> <p>An Amazon Redshift destination requires an S3 bucket as intermediate location. Kinesis Data Firehose first delivers data to Amazon S3 and then uses <code>COPY</code> syntax to load data into an Amazon Redshift table. This is specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code> parameter.</p> </li> <li> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p> </li> <li> <p>We strongly recommend that you use the user name and password you provide exclusively with Kinesis Data Firehose, and that the permissions for the account are restricted for Amazon Redshift <code>INSERT</code> permissions.</p> </li> </ul> <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Kinesis Data Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "DeliveryStreamType": {},
  "KinesisStreamSourceConfiguration": {
    "KinesisStreamARN": {},
    "RoleARN": {}
  },
  "DeliveryStreamEncryptionConfigurationInput": {
    "KeyARN": {},
    "KeyType": {}
  },
  "S3DestinationConfiguration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ExtendedS3DestinationConfiguration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupConfiguration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "DataFormatConversionConfiguration": {
      "SchemaConfiguration": {
        "RoleARN": {},
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Region": {},
        "VersionId": {}
      },
      "InputFormatConfiguration": {
        "Deserializer": {
          "OpenXJsonSerDe": {
            "ConvertDotsInJsonKeysToUnderscores": {},
            "CaseInsensitive": {},
            "ColumnToJsonKeyMappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "HiveJsonSerDe": {
            "TimestampFormats": {}
          }
        }
      },
      "OutputFormatConfiguration": {
        "Serializer": {
          "ParquetSerDe": {
            "BlockSizeBytes": {},
            "PageSizeBytes": {},
            "Compression": {},
            "EnableDictionaryCompression": {},
            "MaxPaddingBytes": {},
            "WriterVersion": {}
          },
          "OrcSerDe": {
            "StripeSizeBytes": {},
            "BlockSizeBytes": {},
            "RowIndexStride": {},
            "EnablePadding": {},
            "PaddingTolerance": {},
            "Compression": {},
            "BloomFilterColumns": {},
            "BloomFilterFalsePositiveProbability": {},
            "DictionaryKeyThreshold": {},
            "FormatVersion": {}
          }
        }
      },
      "Enabled": {}
    },
    "DynamicPartitioningConfiguration": {
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "Enabled": {}
    }
  },
  "RedshiftDestinationConfiguration": {
    "RoleARN": {},
    "ClusterJDBCURL": {},
    "CopyCommand": {
      "DataTableName": {},
      "DataTableColumns": {},
      "CopyOptions": {}
    },
    "Username": {},
    "Password": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupConfiguration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ElasticsearchDestinationConfiguration": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {}
    }
  },
  "AmazonopensearchserviceDestinationConfiguration": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {}
    }
  },
  "SplunkDestinationConfiguration": {
    "HECEndpoint": {},
    "HECEndpointType": {},
    "HECToken": {},
    "HECAcknowledgmentTimeoutInSeconds": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "HttpEndpointDestinationConfiguration": {
    "EndpointConfiguration": {
      "Url": {},
      "Name": {},
      "AccessKey": {}
    },
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "RequestConfiguration": {
      "ContentEncoding": {},
      "CommonAttributes": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "RoleARN": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    }
  },
  "Tags": {},
  "AmazonOpenSearchServerlessDestinationConfiguration": {
    "RoleARN": {},
    "CollectionEndpoint": {},
    "IndexName": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {}
    }
  }
}
```

<h3 id="createdeliverystream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateDeliveryStreamInput](#schemacreatedeliverystreaminput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» DeliveryStreamType|body|object|false|none|
|» KinesisStreamSourceConfiguration|body|object|false|none|
|» » KinesisStreamARN|body|object|true|none|
|» » RoleARN|body|object|true|none|
|» DeliveryStreamEncryptionConfigurationInput|body|object|false|none|
|» » KeyARN|body|object|false|none|
|» » KeyType|body|object|true|none|
|» S3DestinationConfiguration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » BucketARN|body|object|true|none|
|» » Prefix|body|object|false|none|
|» » ErrorOutputPrefix|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » CompressionFormat|body|object|false|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » NoEncryptionConfig|body|object|false|none|
|» » » KMSEncryptionConfig|body|object|false|none|
|» » » » AWSKMSKeyARN|body|object|true|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» ExtendedS3DestinationConfiguration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » BucketARN|body|object|true|none|
|» » Prefix|body|object|false|none|
|» » ErrorOutputPrefix|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » CompressionFormat|body|object|false|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » NoEncryptionConfig|body|object|false|none|
|» » » KMSEncryptionConfig|body|object|false|none|
|» » » » AWSKMSKeyARN|body|object|true|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3BackupConfiguration|body|object|false|none|
|» » » RoleARN|body|object|true|none|
|» » » BucketARN|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » DataFormatConversionConfiguration|body|object|false|none|
|» » » SchemaConfiguration|body|object|false|none|
|» » » » RoleARN|body|object|false|none|
|» » » » CatalogId|body|object|false|none|
|» » » » DatabaseName|body|object|false|none|
|» » » » TableName|body|object|false|none|
|» » » » Region|body|object|false|none|
|» » » » VersionId|body|object|false|none|
|» » » InputFormatConfiguration|body|object|false|none|
|» » » » Deserializer|body|object|false|none|
|» » » » » OpenXJsonSerDe|body|object|false|none|
|» » » » » » ConvertDotsInJsonKeysToUnderscores|body|object|false|none|
|» » » » » » CaseInsensitive|body|object|false|none|
|» » » » » » ColumnToJsonKeyMappings|body|object|false|none|
|» » » » » » » **additionalProperties**|body|[NonEmptyString](#schemanonemptystring)|false|none|
|» » » » » HiveJsonSerDe|body|object|false|none|
|» » » » » » TimestampFormats|body|object|false|none|
|» » » OutputFormatConfiguration|body|object|false|none|
|» » » » Serializer|body|object|false|none|
|» » » » » ParquetSerDe|body|object|false|none|
|» » » » » » BlockSizeBytes|body|object|false|none|
|» » » » » » PageSizeBytes|body|object|false|none|
|» » » » » » Compression|body|object|false|none|
|» » » » » » EnableDictionaryCompression|body|object|false|none|
|» » » » » » MaxPaddingBytes|body|object|false|none|
|» » » » » » WriterVersion|body|object|false|none|
|» » » » » OrcSerDe|body|object|false|none|
|» » » » » » StripeSizeBytes|body|object|false|none|
|» » » » » » BlockSizeBytes|body|object|false|none|
|» » » » » » RowIndexStride|body|object|false|none|
|» » » » » » EnablePadding|body|object|false|none|
|» » » » » » PaddingTolerance|body|object|false|none|
|» » » » » » Compression|body|object|false|none|
|» » » » » » BloomFilterColumns|body|object|false|none|
|» » » » » » BloomFilterFalsePositiveProbability|body|object|false|none|
|» » » » » » DictionaryKeyThreshold|body|object|false|none|
|» » » » » » FormatVersion|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » DynamicPartitioningConfiguration|body|object|false|none|
|» » » RetryOptions|body|object|false|none|
|» » » » DurationInSeconds|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» RedshiftDestinationConfiguration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » ClusterJDBCURL|body|object|true|none|
|» » CopyCommand|body|object|true|none|
|» » » DataTableName|body|object|true|none|
|» » » DataTableColumns|body|object|false|none|
|» » » CopyOptions|body|object|false|none|
|» » Username|body|object|true|none|
|» » Password|body|object|true|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3Configuration|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » » BucketARN|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3BackupConfiguration|body|object|false|none|
|» » » RoleARN|body|object|true|none|
|» » » BucketARN|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» ElasticsearchDestinationConfiguration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » DomainARN|body|object|false|none|
|» » ClusterEndpoint|body|object|false|none|
|» » IndexName|body|object|true|none|
|» » TypeName|body|object|false|none|
|» » IndexRotationPeriod|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Configuration|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » » BucketARN|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» » VpcConfiguration|body|object|false|none|
|» » » SubnetIds|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » » SecurityGroupIds|body|object|true|none|
|» AmazonopensearchserviceDestinationConfiguration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » DomainARN|body|object|false|none|
|» » ClusterEndpoint|body|object|false|none|
|» » IndexName|body|object|true|none|
|» » TypeName|body|object|false|none|
|» » IndexRotationPeriod|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Configuration|body|[S3DestinationConfiguration](#schemas3destinationconfiguration)|true|Describes the configuration of a destination in Amazon S3.|
|» » ProcessingConfiguration|body|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|Describes a data processing configuration.|
|» » CloudWatchLoggingOptions|body|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|Describes the Amazon CloudWatch logging options for your delivery stream.|
|» » VpcConfiguration|body|[VpcConfiguration](#schemavpcconfiguration)|false|The details of the VPC of the Amazon ES destination.|
|» SplunkDestinationConfiguration|body|object|false|none|
|» » HECEndpoint|body|object|true|none|
|» » HECEndpointType|body|object|true|none|
|» » HECToken|body|object|true|none|
|» » HECAcknowledgmentTimeoutInSeconds|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Configuration|body|object|true|none|
|» » » RoleARN|body|object|true|none|
|» » » BucketARN|body|object|true|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» HttpEndpointDestinationConfiguration|body|object|false|none|
|» » EndpointConfiguration|body|object|true|none|
|» » » Url|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » AccessKey|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » CloudWatchLoggingOptions|body|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|Describes the Amazon CloudWatch logging options for your delivery stream.|
|» » RequestConfiguration|body|object|false|none|
|» » » ContentEncoding|body|object|false|none|
|» » » CommonAttributes|body|object|false|none|
|» » ProcessingConfiguration|body|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|Describes a data processing configuration.|
|» » RoleARN|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Configuration|body|[S3DestinationConfiguration](#schemas3destinationconfiguration)|true|Describes the configuration of a destination in Amazon S3.|
|» Tags|body|object|false|none|
|» AmazonOpenSearchServerlessDestinationConfiguration|body|object|false|none|
|» » RoleARN|body|object|true|none|
|» » CollectionEndpoint|body|object|false|none|
|» » IndexName|body|object|true|none|
|» » BufferingHints|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Configuration|body|[S3DestinationConfiguration](#schemas3destinationconfiguration)|true|Describes the configuration of a destination in Amazon S3.|
|» » ProcessingConfiguration|body|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|Describes a data processing configuration.|
|» » CloudWatchLoggingOptions|body|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|Describes the Amazon CloudWatch logging options for your delivery stream.|
|» » VpcConfiguration|body|[VpcConfiguration](#schemavpcconfiguration)|false|The details of the VPC of the Amazon ES destination.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.CreateDeliveryStream|

> Example responses

> 200 Response

```json
{
  "DeliveryStreamARN": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createdeliverystream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDeliveryStreamOutput](#schemacreatedeliverystreamoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|InvalidKMSResourceException|[InvalidKMSResourceException](#schemainvalidkmsresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDeliveryStream

<a id="opIdDeleteDeliveryStream"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.DeleteDeliveryStream' \
  -d '{
    "DeliveryStreamName": {},
    "AllowForceDelete": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.DeleteDeliveryStream`

<p>Deletes a delivery stream and its data.</p> <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states: <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the <code>CREATING</code> state. While the deletion request is in process, the delivery stream is in the <code>DELETING</code> state.</p> <p>While the delivery stream is in the <code>DELETING</code> state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a delivery stream.</p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "AllowForceDelete": {}
}
```

<h3 id="deletedeliverystream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteDeliveryStreamInput](#schemadeletedeliverystreaminput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» AllowForceDelete|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.DeleteDeliveryStream|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="deletedeliverystream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDeliveryStreamOutput](#schemadeletedeliverystreamoutput)|
|480|480|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDeliveryStream

<a id="opIdDescribeDeliveryStream"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.DescribeDeliveryStream' \
  -d '{
    "DeliveryStreamName": {},
    "Limit": {},
    "ExclusiveStartDestinationId": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.DescribeDeliveryStream`

<p>Describes the specified delivery stream and its status. For example, after your delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p> <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it. If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "Limit": {},
  "ExclusiveStartDestinationId": {}
}
```

<h3 id="describedeliverystream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeDeliveryStreamInput](#schemadescribedeliverystreaminput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» Limit|body|object|false|none|
|» ExclusiveStartDestinationId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.DescribeDeliveryStream|

> Example responses

> 200 Response

```json
{
  "DeliveryStreamDescription": {
    "DeliveryStreamName": {},
    "DeliveryStreamARN": {},
    "DeliveryStreamStatus": {},
    "FailureDescription": {
      "Type": {},
      "Details": {}
    },
    "DeliveryStreamEncryptionConfiguration": {
      "KeyARN": {},
      "KeyType": {},
      "Status": {},
      "FailureDescription": {
        "Type": {},
        "Details": {}
      }
    },
    "DeliveryStreamType": {},
    "VersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "Source": {
      "KinesisStreamSourceDescription": {
        "KinesisStreamARN": {},
        "RoleARN": {},
        "DeliveryStartTimestamp": {}
      }
    },
    "Destinations": {},
    "HasMoreDestinations": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="describedeliverystream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeliveryStreamOutput](#schemadescribedeliverystreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDeliveryStreams

<a id="opIdListDeliveryStreams"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.ListDeliveryStreams' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.ListDeliveryStreams' \
  -d '{
    "Limit": {},
    "DeliveryStreamType": {},
    "ExclusiveStartDeliveryStreamName": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.ListDeliveryStreams`

<p>Lists your delivery streams in alphabetical order of their names.</p> <p>The number of delivery streams might be too large to return using a single call to <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned, using the <code>Limit</code> parameter. To determine whether there are more delivery streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If there are more delivery streams to list, you can request them by calling this operation again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name of the last delivery stream returned in the last call.</p>

> Body parameter

```json
{
  "Limit": {},
  "DeliveryStreamType": {},
  "ExclusiveStartDeliveryStreamName": {}
}
```

<h3 id="listdeliverystreams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDeliveryStreamsInput](#schemalistdeliverystreamsinput)|true|none|
|» Limit|body|object|false|none|
|» DeliveryStreamType|body|object|false|none|
|» ExclusiveStartDeliveryStreamName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.ListDeliveryStreams|

> Example responses

> 200 Response

```json
{
  "DeliveryStreamNames": {},
  "HasMoreDeliveryStreams": {}
}
```

<h3 id="listdeliverystreams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDeliveryStreamsOutput](#schemalistdeliverystreamsoutput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForDeliveryStream

<a id="opIdListTagsForDeliveryStream"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.ListTagsForDeliveryStream' \
  -d '{
    "DeliveryStreamName": {},
    "ExclusiveStartTagKey": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.ListTagsForDeliveryStream`

Lists the tags for the specified delivery stream. This operation has a limit of five transactions per second per account. 

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "ExclusiveStartTagKey": {},
  "Limit": {}
}
```

<h3 id="listtagsfordeliverystream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForDeliveryStreamInput](#schemalisttagsfordeliverystreaminput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» ExclusiveStartTagKey|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.ListTagsForDeliveryStream|

> Example responses

> 200 Response

```json
{
  "Tags": {},
  "HasMoreTags": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listtagsfordeliverystream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForDeliveryStreamOutput](#schemalisttagsfordeliverystreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecord

<a id="opIdPutRecord"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.PutRecord' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.PutRecord' \
  -d '{
    "DeliveryStreamName": {},
    "Record": {
      "Data": {}
    }
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.PutRecord`

<p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To write multiple data records into a delivery stream, use <a>PutRecordBatch</a>. Applications using these operations are referred to as producers.</p> <p>By default, each delivery stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and <a>PutRecordBatch</a>, the limits are an aggregate across these two operations for each delivery stream. For more information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Limits</a>. </p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation.</p> <p>If the <code>PutRecord</code> operation throws a <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream. </p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "Record": {
    "Data": {}
  }
}
```

<h3 id="putrecord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRecordInput](#schemaputrecordinput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» Record|body|object|true|none|
|» » Data|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.PutRecord|

> Example responses

> 200 Response

```json
{
  "RecordId": {},
  "Encrypted": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="putrecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRecordOutput](#schemaputrecordoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|InvalidKMSResourceException|[InvalidKMSResourceException](#schemainvalidkmsresourceexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRecordBatch

<a id="opIdPutRecordBatch"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.PutRecordBatch' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.PutRecordBatch' \
  -d '{
    "DeliveryStreamName": {},
    "Records": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.PutRecordBatch`

<p>Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a delivery stream, use <a>PutRecord</a>. Applications using these operations are referred to as producers.</p> <p>For information about service quota, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose Quota</a>.</p> <p>Each <a>PutRecordBatch</a> request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed.</p> <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on.</p> <p>Kinesis Data Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (<code>\n</code>) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination.</p> <p>The <a>PutRecordBatch</a> response includes a count of failed records, <code>FailedPutCount</code>, and an array of responses, <code>RequestResponses</code>. Even if the <a>PutRecordBatch</a> call succeeds, the value of <code>FailedPutCount</code> may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the <code>RequestResponses</code> array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. <code>RequestResponses</code> includes both successfully and unsuccessfully processed records. Kinesis Data Firehose tries to process all records in each <a>PutRecordBatch</a> request. A single record failure does not stop the processing of subsequent records. </p> <p>A successfully processed record includes a <code>RecordId</code> value, which is unique for the record. An unsuccessfully processed record includes <code>ErrorCode</code> and <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error, and is one of the following values: <code>ServiceUnavailableException</code> or <code>InternalFailure</code>. <code>ErrorMessage</code> provides more detailed information about the error.</p> <p>If there is an internal server error or a timeout, the write might have completed or it might have failed. If <code>FailedPutCount</code> is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination.</p> <p>If <a>PutRecordBatch</a> throws <code>ServiceUnavailableException</code>, back off and retry. If the exception persists, it is possible that the throughput limits have been exceeded for the delivery stream.</p> <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they are added to a delivery stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available.</p> <important> <p>Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</p> </important>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "Records": {}
}
```

<h3 id="putrecordbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutRecordBatchInput](#schemaputrecordbatchinput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» Records|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.PutRecordBatch|

> Example responses

> 200 Response

```json
{
  "FailedPutCount": {},
  "Encrypted": {},
  "RequestResponses": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="putrecordbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRecordBatchOutput](#schemaputrecordbatchoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|482|482|InvalidKMSResourceException|[InvalidKMSResourceException](#schemainvalidkmsresourceexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDeliveryStreamEncryption

<a id="opIdStartDeliveryStreamEncryption"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.StartDeliveryStreamEncryption' \
  -d '{
    "DeliveryStreamName": {},
    "DeliveryStreamEncryptionConfigurationInput": {
      "KeyARN": {},
      "KeyType": {}
    }
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.StartDeliveryStreamEncryption`

<p>Enables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>ENABLING</code>, and then to <code>ENABLED</code>. The encryption status of a delivery stream is the <code>Status</code> property in <a>DeliveryStreamEncryptionConfiguration</a>. If the operation fails, the encryption status changes to <code>ENABLING_FAILED</code>. You can continue to read and write data to your delivery stream while the encryption status is <code>ENABLING</code>, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to <code>ENABLED</code> before all records written to the delivery stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption status of a delivery stream, use <a>DescribeDeliveryStream</a>.</p> <p>Even if encryption is currently enabled for a delivery stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type <code>CUSTOMER_MANAGED_CMK</code>, Kinesis Data Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.</p> <p>If a delivery stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get <code>ENABLING_FAILED</code>, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.</p> <p>If the encryption status of your delivery stream is <code>ENABLING_FAILED</code>, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Kinesis Data Firehose to invoke KMS encrypt and decrypt operations.</p> <p>You can enable SSE for a delivery stream only if it's a delivery stream that uses <code>DirectPut</code> as its source. </p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "DeliveryStreamEncryptionConfigurationInput": {
    "KeyARN": {},
    "KeyType": {}
  }
}
```

<h3 id="startdeliverystreamencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StartDeliveryStreamEncryptionInput](#schemastartdeliverystreamencryptioninput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» DeliveryStreamEncryptionConfigurationInput|body|object|false|none|
|» » KeyARN|body|object|false|none|
|» » KeyType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.StartDeliveryStreamEncryption|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="startdeliverystreamencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDeliveryStreamEncryptionOutput](#schemastartdeliverystreamencryptionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InvalidKMSResourceException|[InvalidKMSResourceException](#schemainvalidkmsresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopDeliveryStreamEncryption

<a id="opIdStopDeliveryStreamEncryption"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.StopDeliveryStreamEncryption' \
  -d '{
    "DeliveryStreamName": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.StopDeliveryStreamEncryption`

<p>Disables server-side encryption (SSE) for the delivery stream. </p> <p>This operation is asynchronous. It returns immediately. When you invoke it, Kinesis Data Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then to <code>DISABLED</code>. You can continue to read and write data to your stream while its status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status changes to <code>DISABLED</code> before all records written to the delivery stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p> <p>To check the encryption state of a delivery stream, use <a>DescribeDeliveryStream</a>. </p> <p>If SSE is enabled using a customer managed CMK and then you invoke <code>StopDeliveryStreamEncryption</code>, Kinesis Data Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.</p> <p>The <code>StartDeliveryStreamEncryption</code> and <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls per delivery stream per 24 hours. For example, you reach the limit if you call <code>StartDeliveryStreamEncryption</code> 13 times and <code>StopDeliveryStreamEncryption</code> 12 times for the same delivery stream in a 24-hour period.</p>

> Body parameter

```json
{
  "DeliveryStreamName": {}
}
```

<h3 id="stopdeliverystreamencryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[StopDeliveryStreamEncryptionInput](#schemastopdeliverystreamencryptioninput)|true|none|
|» DeliveryStreamName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.StopDeliveryStreamEncryption|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="stopdeliverystreamencryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopDeliveryStreamEncryptionOutput](#schemastopdeliverystreamencryptionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagDeliveryStream

<a id="opIdTagDeliveryStream"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.TagDeliveryStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.TagDeliveryStream' \
  -d '{
    "DeliveryStreamName": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.TagDeliveryStream`

<p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>. </p> <p>Each delivery stream can have up to 50 tags. </p> <p>This operation has a limit of five transactions per second per account. </p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "Tags": {}
}
```

<h3 id="tagdeliverystream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagDeliveryStreamInput](#schematagdeliverystreaminput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.TagDeliveryStream|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="tagdeliverystream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagDeliveryStreamOutput](#schematagdeliverystreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagDeliveryStream

<a id="opIdUntagDeliveryStream"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.UntagDeliveryStream' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.UntagDeliveryStream' \
  -d '{
    "DeliveryStreamName": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.UntagDeliveryStream`

<p>Removes tags from the specified delivery stream. Removed tags are deleted, and you can't recover them after this operation successfully completes.</p> <p>If you specify a tag that doesn't exist, the operation ignores it.</p> <p>This operation has a limit of five transactions per second per account. </p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "TagKeys": {}
}
```

<h3 id="untagdeliverystream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagDeliveryStreamInput](#schemauntagdeliverystreaminput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.UntagDeliveryStream|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="untagdeliverystream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagDeliveryStreamOutput](#schemauntagdeliverystreamoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDestination

<a id="opIdUpdateDestination"></a>

> Code samples

```bash
curl 'https://firehose.us-east-1.amazonaws.com/#X-Amz-Target=Firehose_20150804.UpdateDestination' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Firehose_20150804.UpdateDestination' \
  -d '{
    "DeliveryStreamName": {},
    "CurrentDeliveryStreamVersionId": {},
    "DestinationId": {},
    "S3DestinationUpdate": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ExtendedS3DestinationUpdate": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "S3BackupMode": {},
      "S3BackupUpdate": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "DataFormatConversionConfiguration": {
        "SchemaConfiguration": {
          "RoleARN": {},
          "CatalogId": {},
          "DatabaseName": {},
          "TableName": {},
          "Region": {},
          "VersionId": {}
        },
        "InputFormatConfiguration": {
          "Deserializer": {
            "OpenXJsonSerDe": {
              "ConvertDotsInJsonKeysToUnderscores": {},
              "CaseInsensitive": {},
              "ColumnToJsonKeyMappings": {
                "property1": "string",
                "property2": "string"
              }
            },
            "HiveJsonSerDe": {
              "TimestampFormats": {}
            }
          }
        },
        "OutputFormatConfiguration": {
          "Serializer": {
            "ParquetSerDe": {
              "BlockSizeBytes": {},
              "PageSizeBytes": {},
              "Compression": {},
              "EnableDictionaryCompression": {},
              "MaxPaddingBytes": {},
              "WriterVersion": {}
            },
            "OrcSerDe": {
              "StripeSizeBytes": {},
              "BlockSizeBytes": {},
              "RowIndexStride": {},
              "EnablePadding": {},
              "PaddingTolerance": {},
              "Compression": {},
              "BloomFilterColumns": {},
              "BloomFilterFalsePositiveProbability": {},
              "DictionaryKeyThreshold": {},
              "FormatVersion": {}
            }
          }
        },
        "Enabled": {}
      },
      "DynamicPartitioningConfiguration": {
        "RetryOptions": {
          "DurationInSeconds": {}
        },
        "Enabled": {}
      }
    },
    "RedshiftDestinationUpdate": {
      "RoleARN": {},
      "ClusterJDBCURL": {},
      "CopyCommand": {
        "DataTableName": {},
        "DataTableColumns": {},
        "CopyOptions": {}
      },
      "Username": {},
      "Password": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3Update": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "S3BackupMode": {},
      "S3BackupUpdate": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ElasticsearchDestinationUpdate": {
      "RoleARN": {},
      "DomainARN": {},
      "ClusterEndpoint": {},
      "IndexName": {},
      "TypeName": {},
      "IndexRotationPeriod": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3Update": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "AmazonopensearchserviceDestinationUpdate": {
      "RoleARN": {},
      "DomainARN": {},
      "ClusterEndpoint": {},
      "IndexName": {},
      "TypeName": {},
      "IndexRotationPeriod": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3Update": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "SplunkDestinationUpdate": {
      "HECEndpoint": {},
      "HECEndpointType": {},
      "HECToken": {},
      "HECAcknowledgmentTimeoutInSeconds": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Update": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "HttpEndpointDestinationUpdate": {
      "EndpointConfiguration": {
        "Url": {},
        "Name": {},
        "AccessKey": {}
      },
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "RequestConfiguration": {
        "ContentEncoding": {},
        "CommonAttributes": {}
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "RoleARN": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3Update": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      }
    },
    "AmazonOpenSearchServerlessDestinationUpdate": {
      "RoleARN": {},
      "CollectionEndpoint": {},
      "IndexName": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3Update": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    }
  }'
```

`POST /#X-Amz-Target=Firehose_20150804.UpdateDestination`

<p>Updates the specified destination of the specified delivery stream.</p> <p>Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target delivery stream remains active while the configurations are updated, so data writes to the delivery stream can continue during this process. The updated configurations are usually effective within a few minutes.</p> <p>Switching between Amazon ES and other services is not supported. For an Amazon ES destination, you can only update to another Amazon ES destination.</p> <p>If the destination type is the same, Kinesis Data Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing <code>EncryptionConfiguration</code> is maintained on the destination.</p> <p>If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this case, all parameters must be specified.</p> <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>

> Body parameter

```json
{
  "DeliveryStreamName": {},
  "CurrentDeliveryStreamVersionId": {},
  "DestinationId": {},
  "S3DestinationUpdate": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ExtendedS3DestinationUpdate": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupUpdate": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "DataFormatConversionConfiguration": {
      "SchemaConfiguration": {
        "RoleARN": {},
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Region": {},
        "VersionId": {}
      },
      "InputFormatConfiguration": {
        "Deserializer": {
          "OpenXJsonSerDe": {
            "ConvertDotsInJsonKeysToUnderscores": {},
            "CaseInsensitive": {},
            "ColumnToJsonKeyMappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "HiveJsonSerDe": {
            "TimestampFormats": {}
          }
        }
      },
      "OutputFormatConfiguration": {
        "Serializer": {
          "ParquetSerDe": {
            "BlockSizeBytes": {},
            "PageSizeBytes": {},
            "Compression": {},
            "EnableDictionaryCompression": {},
            "MaxPaddingBytes": {},
            "WriterVersion": {}
          },
          "OrcSerDe": {
            "StripeSizeBytes": {},
            "BlockSizeBytes": {},
            "RowIndexStride": {},
            "EnablePadding": {},
            "PaddingTolerance": {},
            "Compression": {},
            "BloomFilterColumns": {},
            "BloomFilterFalsePositiveProbability": {},
            "DictionaryKeyThreshold": {},
            "FormatVersion": {}
          }
        }
      },
      "Enabled": {}
    },
    "DynamicPartitioningConfiguration": {
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "Enabled": {}
    }
  },
  "RedshiftDestinationUpdate": {
    "RoleARN": {},
    "ClusterJDBCURL": {},
    "CopyCommand": {
      "DataTableName": {},
      "DataTableColumns": {},
      "CopyOptions": {}
    },
    "Username": {},
    "Password": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupUpdate": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ElasticsearchDestinationUpdate": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "AmazonopensearchserviceDestinationUpdate": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "SplunkDestinationUpdate": {
    "HECEndpoint": {},
    "HECEndpointType": {},
    "HECToken": {},
    "HECAcknowledgmentTimeoutInSeconds": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "HttpEndpointDestinationUpdate": {
    "EndpointConfiguration": {
      "Url": {},
      "Name": {},
      "AccessKey": {}
    },
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "RequestConfiguration": {
      "ContentEncoding": {},
      "CommonAttributes": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "RoleARN": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    }
  },
  "AmazonOpenSearchServerlessDestinationUpdate": {
    "RoleARN": {},
    "CollectionEndpoint": {},
    "IndexName": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  }
}
```

<h3 id="updatedestination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateDestinationInput](#schemaupdatedestinationinput)|true|none|
|» DeliveryStreamName|body|object|true|none|
|» CurrentDeliveryStreamVersionId|body|object|true|none|
|» DestinationId|body|object|true|none|
|» S3DestinationUpdate|body|object|false|none|
|» » RoleARN|body|object|false|none|
|» » BucketARN|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » ErrorOutputPrefix|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » CompressionFormat|body|object|false|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » NoEncryptionConfig|body|object|false|none|
|» » » KMSEncryptionConfig|body|object|false|none|
|» » » » AWSKMSKeyARN|body|object|true|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» ExtendedS3DestinationUpdate|body|object|false|none|
|» » RoleARN|body|object|false|none|
|» » BucketARN|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » ErrorOutputPrefix|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » CompressionFormat|body|object|false|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » NoEncryptionConfig|body|object|false|none|
|» » » KMSEncryptionConfig|body|object|false|none|
|» » » » AWSKMSKeyARN|body|object|true|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3BackupUpdate|body|object|false|none|
|» » » RoleARN|body|object|false|none|
|» » » BucketARN|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » DataFormatConversionConfiguration|body|object|false|none|
|» » » SchemaConfiguration|body|object|false|none|
|» » » » RoleARN|body|object|false|none|
|» » » » CatalogId|body|object|false|none|
|» » » » DatabaseName|body|object|false|none|
|» » » » TableName|body|object|false|none|
|» » » » Region|body|object|false|none|
|» » » » VersionId|body|object|false|none|
|» » » InputFormatConfiguration|body|object|false|none|
|» » » » Deserializer|body|object|false|none|
|» » » » » OpenXJsonSerDe|body|object|false|none|
|» » » » » » ConvertDotsInJsonKeysToUnderscores|body|object|false|none|
|» » » » » » CaseInsensitive|body|object|false|none|
|» » » » » » ColumnToJsonKeyMappings|body|object|false|none|
|» » » » » » » **additionalProperties**|body|[NonEmptyString](#schemanonemptystring)|false|none|
|» » » » » HiveJsonSerDe|body|object|false|none|
|» » » » » » TimestampFormats|body|object|false|none|
|» » » OutputFormatConfiguration|body|object|false|none|
|» » » » Serializer|body|object|false|none|
|» » » » » ParquetSerDe|body|object|false|none|
|» » » » » » BlockSizeBytes|body|object|false|none|
|» » » » » » PageSizeBytes|body|object|false|none|
|» » » » » » Compression|body|object|false|none|
|» » » » » » EnableDictionaryCompression|body|object|false|none|
|» » » » » » MaxPaddingBytes|body|object|false|none|
|» » » » » » WriterVersion|body|object|false|none|
|» » » » » OrcSerDe|body|object|false|none|
|» » » » » » StripeSizeBytes|body|object|false|none|
|» » » » » » BlockSizeBytes|body|object|false|none|
|» » » » » » RowIndexStride|body|object|false|none|
|» » » » » » EnablePadding|body|object|false|none|
|» » » » » » PaddingTolerance|body|object|false|none|
|» » » » » » Compression|body|object|false|none|
|» » » » » » BloomFilterColumns|body|object|false|none|
|» » » » » » BloomFilterFalsePositiveProbability|body|object|false|none|
|» » » » » » DictionaryKeyThreshold|body|object|false|none|
|» » » » » » FormatVersion|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » DynamicPartitioningConfiguration|body|object|false|none|
|» » » RetryOptions|body|object|false|none|
|» » » » DurationInSeconds|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» RedshiftDestinationUpdate|body|object|false|none|
|» » RoleARN|body|object|false|none|
|» » ClusterJDBCURL|body|object|false|none|
|» » CopyCommand|body|object|false|none|
|» » » DataTableName|body|object|true|none|
|» » » DataTableColumns|body|object|false|none|
|» » » CopyOptions|body|object|false|none|
|» » Username|body|object|false|none|
|» » Password|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3Update|body|object|false|none|
|» » » RoleARN|body|object|false|none|
|» » » BucketARN|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3BackupUpdate|body|object|false|none|
|» » » RoleARN|body|object|false|none|
|» » » BucketARN|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» ElasticsearchDestinationUpdate|body|object|false|none|
|» » RoleARN|body|object|false|none|
|» » DomainARN|body|object|false|none|
|» » ClusterEndpoint|body|object|false|none|
|» » IndexName|body|object|false|none|
|» » TypeName|body|object|false|none|
|» » IndexRotationPeriod|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3Update|body|object|false|none|
|» » » RoleARN|body|object|false|none|
|» » » BucketARN|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» AmazonopensearchserviceDestinationUpdate|body|object|false|none|
|» » RoleARN|body|object|false|none|
|» » DomainARN|body|object|false|none|
|» » ClusterEndpoint|body|object|false|none|
|» » IndexName|body|object|false|none|
|» » TypeName|body|object|false|none|
|» » IndexRotationPeriod|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3Update|body|[S3DestinationUpdate](#schemas3destinationupdate)|false|Describes an update for a destination in Amazon S3.|
|» » ProcessingConfiguration|body|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|Describes a data processing configuration.|
|» » CloudWatchLoggingOptions|body|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|Describes the Amazon CloudWatch logging options for your delivery stream.|
|» SplunkDestinationUpdate|body|object|false|none|
|» » HECEndpoint|body|object|false|none|
|» » HECEndpointType|body|object|false|none|
|» » HECToken|body|object|false|none|
|» » HECAcknowledgmentTimeoutInSeconds|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Update|body|object|false|none|
|» » » RoleARN|body|object|false|none|
|» » » BucketARN|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » ErrorOutputPrefix|body|object|false|none|
|» » » BufferingHints|body|object|false|none|
|» » » » SizeInMBs|body|object|false|none|
|» » » » IntervalInSeconds|body|object|false|none|
|» » » CompressionFormat|body|object|false|none|
|» » » EncryptionConfiguration|body|object|false|none|
|» » » » NoEncryptionConfig|body|object|false|none|
|» » » » KMSEncryptionConfig|body|object|false|none|
|» » » » » AWSKMSKeyARN|body|object|true|none|
|» » » CloudWatchLoggingOptions|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » » LogGroupName|body|object|false|none|
|» » » » LogStreamName|body|object|false|none|
|» » ProcessingConfiguration|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Processors|body|object|false|none|
|» » CloudWatchLoggingOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » LogGroupName|body|object|false|none|
|» » » LogStreamName|body|object|false|none|
|» HttpEndpointDestinationUpdate|body|object|false|none|
|» » EndpointConfiguration|body|object|false|none|
|» » » Url|body|object|true|none|
|» » » Name|body|object|false|none|
|» » » AccessKey|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » CloudWatchLoggingOptions|body|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|Describes the Amazon CloudWatch logging options for your delivery stream.|
|» » RequestConfiguration|body|object|false|none|
|» » » ContentEncoding|body|object|false|none|
|» » » CommonAttributes|body|object|false|none|
|» » ProcessingConfiguration|body|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|Describes a data processing configuration.|
|» » RoleARN|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3BackupMode|body|object|false|none|
|» » S3Update|body|[S3DestinationUpdate](#schemas3destinationupdate)|false|Describes an update for a destination in Amazon S3.|
|» AmazonOpenSearchServerlessDestinationUpdate|body|object|false|none|
|» » RoleARN|body|object|false|none|
|» » CollectionEndpoint|body|object|false|none|
|» » IndexName|body|object|false|none|
|» » BufferingHints|body|object|false|none|
|» » » IntervalInSeconds|body|object|false|none|
|» » » SizeInMBs|body|object|false|none|
|» » RetryOptions|body|object|false|none|
|» » » DurationInSeconds|body|object|false|none|
|» » S3Update|body|[S3DestinationUpdate](#schemas3destinationupdate)|false|Describes an update for a destination in Amazon S3.|
|» » ProcessingConfiguration|body|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|Describes a data processing configuration.|
|» » CloudWatchLoggingOptions|body|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|Describes the Amazon CloudWatch logging options for your delivery stream.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Firehose_20150804.UpdateDestination|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="updatedestination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDestinationOutput](#schemaupdatedestinationoutput)|
|480|480|InvalidArgumentException|[InvalidArgumentException](#schemainvalidargumentexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConcurrentModificationException|[ConcurrentModificationException](#schemaconcurrentmodificationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateDeliveryStreamOutput">CreateDeliveryStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeliverystreamoutput"></a>
<a id="schema_CreateDeliveryStreamOutput"></a>
<a id="tocScreatedeliverystreamoutput"></a>
<a id="tocscreatedeliverystreamoutput"></a>

```json
{
  "DeliveryStreamARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamARN|object|false|none|none|

<h2 id="tocS_CreateDeliveryStreamInput">CreateDeliveryStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedeliverystreaminput"></a>
<a id="schema_CreateDeliveryStreamInput"></a>
<a id="tocScreatedeliverystreaminput"></a>
<a id="tocscreatedeliverystreaminput"></a>

```json
{
  "DeliveryStreamName": {},
  "DeliveryStreamType": {},
  "KinesisStreamSourceConfiguration": {
    "KinesisStreamARN": {},
    "RoleARN": {}
  },
  "DeliveryStreamEncryptionConfigurationInput": {
    "KeyARN": {},
    "KeyType": {}
  },
  "S3DestinationConfiguration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ExtendedS3DestinationConfiguration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupConfiguration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "DataFormatConversionConfiguration": {
      "SchemaConfiguration": {
        "RoleARN": {},
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Region": {},
        "VersionId": {}
      },
      "InputFormatConfiguration": {
        "Deserializer": {
          "OpenXJsonSerDe": {
            "ConvertDotsInJsonKeysToUnderscores": {},
            "CaseInsensitive": {},
            "ColumnToJsonKeyMappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "HiveJsonSerDe": {
            "TimestampFormats": {}
          }
        }
      },
      "OutputFormatConfiguration": {
        "Serializer": {
          "ParquetSerDe": {
            "BlockSizeBytes": {},
            "PageSizeBytes": {},
            "Compression": {},
            "EnableDictionaryCompression": {},
            "MaxPaddingBytes": {},
            "WriterVersion": {}
          },
          "OrcSerDe": {
            "StripeSizeBytes": {},
            "BlockSizeBytes": {},
            "RowIndexStride": {},
            "EnablePadding": {},
            "PaddingTolerance": {},
            "Compression": {},
            "BloomFilterColumns": {},
            "BloomFilterFalsePositiveProbability": {},
            "DictionaryKeyThreshold": {},
            "FormatVersion": {}
          }
        }
      },
      "Enabled": {}
    },
    "DynamicPartitioningConfiguration": {
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "Enabled": {}
    }
  },
  "RedshiftDestinationConfiguration": {
    "RoleARN": {},
    "ClusterJDBCURL": {},
    "CopyCommand": {
      "DataTableName": {},
      "DataTableColumns": {},
      "CopyOptions": {}
    },
    "Username": {},
    "Password": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupConfiguration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ElasticsearchDestinationConfiguration": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {}
    }
  },
  "AmazonopensearchserviceDestinationConfiguration": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {}
    }
  },
  "SplunkDestinationConfiguration": {
    "HECEndpoint": {},
    "HECEndpointType": {},
    "HECToken": {},
    "HECAcknowledgmentTimeoutInSeconds": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "HttpEndpointDestinationConfiguration": {
    "EndpointConfiguration": {
      "Url": {},
      "Name": {},
      "AccessKey": {}
    },
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "RequestConfiguration": {
      "ContentEncoding": {},
      "CommonAttributes": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "RoleARN": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    }
  },
  "Tags": {},
  "AmazonOpenSearchServerlessDestinationConfiguration": {
    "RoleARN": {},
    "CollectionEndpoint": {},
    "IndexName": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Configuration": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfiguration": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|DeliveryStreamType|object|false|none|none|
|KinesisStreamSourceConfiguration|object|false|none|none|
|DeliveryStreamEncryptionConfigurationInput|object|false|none|none|
|S3DestinationConfiguration|object|false|none|none|
|ExtendedS3DestinationConfiguration|object|false|none|none|
|RedshiftDestinationConfiguration|object|false|none|none|
|ElasticsearchDestinationConfiguration|object|false|none|none|
|AmazonopensearchserviceDestinationConfiguration|object|false|none|none|
|SplunkDestinationConfiguration|object|false|none|none|
|HttpEndpointDestinationConfiguration|object|false|none|none|
|Tags|object|false|none|none|
|AmazonOpenSearchServerlessDestinationConfiguration|object|false|none|none|

<h2 id="tocS_InvalidArgumentException">InvalidArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargumentexception"></a>
<a id="schema_InvalidArgumentException"></a>
<a id="tocSinvalidargumentexception"></a>
<a id="tocsinvalidargumentexception"></a>

```json
null
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_InvalidKMSResourceException">InvalidKMSResourceException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkmsresourceexception"></a>
<a id="schema_InvalidKMSResourceException"></a>
<a id="tocSinvalidkmsresourceexception"></a>
<a id="tocsinvalidkmsresourceexception"></a>

```json
null
```

<h2 id="tocS_DeleteDeliveryStreamOutput">DeleteDeliveryStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeliverystreamoutput"></a>
<a id="schema_DeleteDeliveryStreamOutput"></a>
<a id="tocSdeletedeliverystreamoutput"></a>
<a id="tocsdeletedeliverystreamoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteDeliveryStreamInput">DeleteDeliveryStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletedeliverystreaminput"></a>
<a id="schema_DeleteDeliveryStreamInput"></a>
<a id="tocSdeletedeliverystreaminput"></a>
<a id="tocsdeletedeliverystreaminput"></a>

```json
{
  "DeliveryStreamName": {},
  "AllowForceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|AllowForceDelete|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeDeliveryStreamOutput">DescribeDeliveryStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverystreamoutput"></a>
<a id="schema_DescribeDeliveryStreamOutput"></a>
<a id="tocSdescribedeliverystreamoutput"></a>
<a id="tocsdescribedeliverystreamoutput"></a>

```json
{
  "DeliveryStreamDescription": {
    "DeliveryStreamName": {},
    "DeliveryStreamARN": {},
    "DeliveryStreamStatus": {},
    "FailureDescription": {
      "Type": {},
      "Details": {}
    },
    "DeliveryStreamEncryptionConfiguration": {
      "KeyARN": {},
      "KeyType": {},
      "Status": {},
      "FailureDescription": {
        "Type": {},
        "Details": {}
      }
    },
    "DeliveryStreamType": {},
    "VersionId": {},
    "CreateTimestamp": {},
    "LastUpdateTimestamp": {},
    "Source": {
      "KinesisStreamSourceDescription": {
        "KinesisStreamARN": {},
        "RoleARN": {},
        "DeliveryStartTimestamp": {}
      }
    },
    "Destinations": {},
    "HasMoreDestinations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamDescription|object|true|none|none|

<h2 id="tocS_DescribeDeliveryStreamInput">DescribeDeliveryStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverystreaminput"></a>
<a id="schema_DescribeDeliveryStreamInput"></a>
<a id="tocSdescribedeliverystreaminput"></a>
<a id="tocsdescribedeliverystreaminput"></a>

```json
{
  "DeliveryStreamName": {},
  "Limit": {},
  "ExclusiveStartDestinationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|Limit|object|false|none|none|
|ExclusiveStartDestinationId|object|false|none|none|

<h2 id="tocS_ListDeliveryStreamsOutput">ListDeliveryStreamsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeliverystreamsoutput"></a>
<a id="schema_ListDeliveryStreamsOutput"></a>
<a id="tocSlistdeliverystreamsoutput"></a>
<a id="tocslistdeliverystreamsoutput"></a>

```json
{
  "DeliveryStreamNames": {},
  "HasMoreDeliveryStreams": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamNames|object|true|none|none|
|HasMoreDeliveryStreams|object|true|none|none|

<h2 id="tocS_ListDeliveryStreamsInput">ListDeliveryStreamsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistdeliverystreamsinput"></a>
<a id="schema_ListDeliveryStreamsInput"></a>
<a id="tocSlistdeliverystreamsinput"></a>
<a id="tocslistdeliverystreamsinput"></a>

```json
{
  "Limit": {},
  "DeliveryStreamType": {},
  "ExclusiveStartDeliveryStreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|false|none|none|
|DeliveryStreamType|object|false|none|none|
|ExclusiveStartDeliveryStreamName|object|false|none|none|

<h2 id="tocS_ListTagsForDeliveryStreamOutput">ListTagsForDeliveryStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsfordeliverystreamoutput"></a>
<a id="schema_ListTagsForDeliveryStreamOutput"></a>
<a id="tocSlisttagsfordeliverystreamoutput"></a>
<a id="tocslisttagsfordeliverystreamoutput"></a>

```json
{
  "Tags": {},
  "HasMoreTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|
|HasMoreTags|object|true|none|none|

<h2 id="tocS_ListTagsForDeliveryStreamInput">ListTagsForDeliveryStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsfordeliverystreaminput"></a>
<a id="schema_ListTagsForDeliveryStreamInput"></a>
<a id="tocSlisttagsfordeliverystreaminput"></a>
<a id="tocslisttagsfordeliverystreaminput"></a>

```json
{
  "DeliveryStreamName": {},
  "ExclusiveStartTagKey": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|ExclusiveStartTagKey|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_PutRecordOutput">PutRecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordoutput"></a>
<a id="schema_PutRecordOutput"></a>
<a id="tocSputrecordoutput"></a>
<a id="tocsputrecordoutput"></a>

```json
{
  "RecordId": {},
  "Encrypted": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordId|object|true|none|none|
|Encrypted|object|false|none|none|

<h2 id="tocS_PutRecordInput">PutRecordInput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordinput"></a>
<a id="schema_PutRecordInput"></a>
<a id="tocSputrecordinput"></a>
<a id="tocsputrecordinput"></a>

```json
{
  "DeliveryStreamName": {},
  "Record": {
    "Data": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|Record|object|true|none|none|

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

```json
null
```

<h2 id="tocS_PutRecordBatchOutput">PutRecordBatchOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordbatchoutput"></a>
<a id="schema_PutRecordBatchOutput"></a>
<a id="tocSputrecordbatchoutput"></a>
<a id="tocsputrecordbatchoutput"></a>

```json
{
  "FailedPutCount": {},
  "Encrypted": {},
  "RequestResponses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedPutCount|object|true|none|none|
|Encrypted|object|false|none|none|
|RequestResponses|object|true|none|none|

<h2 id="tocS_PutRecordBatchInput">PutRecordBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordbatchinput"></a>
<a id="schema_PutRecordBatchInput"></a>
<a id="tocSputrecordbatchinput"></a>
<a id="tocsputrecordbatchinput"></a>

```json
{
  "DeliveryStreamName": {},
  "Records": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|Records|object|true|none|none|

<h2 id="tocS_StartDeliveryStreamEncryptionOutput">StartDeliveryStreamEncryptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartdeliverystreamencryptionoutput"></a>
<a id="schema_StartDeliveryStreamEncryptionOutput"></a>
<a id="tocSstartdeliverystreamencryptionoutput"></a>
<a id="tocsstartdeliverystreamencryptionoutput"></a>

```json
{}
```

<h2 id="tocS_StartDeliveryStreamEncryptionInput">StartDeliveryStreamEncryptionInput</h2>
<!-- backwards compatibility -->
<a id="schemastartdeliverystreamencryptioninput"></a>
<a id="schema_StartDeliveryStreamEncryptionInput"></a>
<a id="tocSstartdeliverystreamencryptioninput"></a>
<a id="tocsstartdeliverystreamencryptioninput"></a>

```json
{
  "DeliveryStreamName": {},
  "DeliveryStreamEncryptionConfigurationInput": {
    "KeyARN": {},
    "KeyType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|DeliveryStreamEncryptionConfigurationInput|object|false|none|none|

<h2 id="tocS_StopDeliveryStreamEncryptionOutput">StopDeliveryStreamEncryptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopdeliverystreamencryptionoutput"></a>
<a id="schema_StopDeliveryStreamEncryptionOutput"></a>
<a id="tocSstopdeliverystreamencryptionoutput"></a>
<a id="tocsstopdeliverystreamencryptionoutput"></a>

```json
{}
```

<h2 id="tocS_StopDeliveryStreamEncryptionInput">StopDeliveryStreamEncryptionInput</h2>
<!-- backwards compatibility -->
<a id="schemastopdeliverystreamencryptioninput"></a>
<a id="schema_StopDeliveryStreamEncryptionInput"></a>
<a id="tocSstopdeliverystreamencryptioninput"></a>
<a id="tocsstopdeliverystreamencryptioninput"></a>

```json
{
  "DeliveryStreamName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|

<h2 id="tocS_TagDeliveryStreamOutput">TagDeliveryStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schematagdeliverystreamoutput"></a>
<a id="schema_TagDeliveryStreamOutput"></a>
<a id="tocStagdeliverystreamoutput"></a>
<a id="tocstagdeliverystreamoutput"></a>

```json
{}
```

<h2 id="tocS_TagDeliveryStreamInput">TagDeliveryStreamInput</h2>
<!-- backwards compatibility -->
<a id="schematagdeliverystreaminput"></a>
<a id="schema_TagDeliveryStreamInput"></a>
<a id="tocStagdeliverystreaminput"></a>
<a id="tocstagdeliverystreaminput"></a>

```json
{
  "DeliveryStreamName": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagDeliveryStreamOutput">UntagDeliveryStreamOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagdeliverystreamoutput"></a>
<a id="schema_UntagDeliveryStreamOutput"></a>
<a id="tocSuntagdeliverystreamoutput"></a>
<a id="tocsuntagdeliverystreamoutput"></a>

```json
{}
```

<h2 id="tocS_UntagDeliveryStreamInput">UntagDeliveryStreamInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagdeliverystreaminput"></a>
<a id="schema_UntagDeliveryStreamInput"></a>
<a id="tocSuntagdeliverystreaminput"></a>
<a id="tocsuntagdeliverystreaminput"></a>

```json
{
  "DeliveryStreamName": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateDestinationOutput">UpdateDestinationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedestinationoutput"></a>
<a id="schema_UpdateDestinationOutput"></a>
<a id="tocSupdatedestinationoutput"></a>
<a id="tocsupdatedestinationoutput"></a>

```json
{}
```

<h2 id="tocS_UpdateDestinationInput">UpdateDestinationInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedestinationinput"></a>
<a id="schema_UpdateDestinationInput"></a>
<a id="tocSupdatedestinationinput"></a>
<a id="tocsupdatedestinationinput"></a>

```json
{
  "DeliveryStreamName": {},
  "CurrentDeliveryStreamVersionId": {},
  "DestinationId": {},
  "S3DestinationUpdate": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ExtendedS3DestinationUpdate": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupUpdate": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "DataFormatConversionConfiguration": {
      "SchemaConfiguration": {
        "RoleARN": {},
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Region": {},
        "VersionId": {}
      },
      "InputFormatConfiguration": {
        "Deserializer": {
          "OpenXJsonSerDe": {
            "ConvertDotsInJsonKeysToUnderscores": {},
            "CaseInsensitive": {},
            "ColumnToJsonKeyMappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "HiveJsonSerDe": {
            "TimestampFormats": {}
          }
        }
      },
      "OutputFormatConfiguration": {
        "Serializer": {
          "ParquetSerDe": {
            "BlockSizeBytes": {},
            "PageSizeBytes": {},
            "Compression": {},
            "EnableDictionaryCompression": {},
            "MaxPaddingBytes": {},
            "WriterVersion": {}
          },
          "OrcSerDe": {
            "StripeSizeBytes": {},
            "BlockSizeBytes": {},
            "RowIndexStride": {},
            "EnablePadding": {},
            "PaddingTolerance": {},
            "Compression": {},
            "BloomFilterColumns": {},
            "BloomFilterFalsePositiveProbability": {},
            "DictionaryKeyThreshold": {},
            "FormatVersion": {}
          }
        }
      },
      "Enabled": {}
    },
    "DynamicPartitioningConfiguration": {
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "Enabled": {}
    }
  },
  "RedshiftDestinationUpdate": {
    "RoleARN": {},
    "ClusterJDBCURL": {},
    "CopyCommand": {
      "DataTableName": {},
      "DataTableColumns": {},
      "CopyOptions": {}
    },
    "Username": {},
    "Password": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupUpdate": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ElasticsearchDestinationUpdate": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "AmazonopensearchserviceDestinationUpdate": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "SplunkDestinationUpdate": {
    "HECEndpoint": {},
    "HECEndpointType": {},
    "HECToken": {},
    "HECAcknowledgmentTimeoutInSeconds": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "HttpEndpointDestinationUpdate": {
    "EndpointConfiguration": {
      "Url": {},
      "Name": {},
      "AccessKey": {}
    },
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "RequestConfiguration": {
      "ContentEncoding": {},
      "CommonAttributes": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "RoleARN": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    }
  },
  "AmazonOpenSearchServerlessDestinationUpdate": {
    "RoleARN": {},
    "CollectionEndpoint": {},
    "IndexName": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3Update": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|CurrentDeliveryStreamVersionId|object|true|none|none|
|DestinationId|object|true|none|none|
|S3DestinationUpdate|object|false|none|none|
|ExtendedS3DestinationUpdate|object|false|none|none|
|RedshiftDestinationUpdate|object|false|none|none|
|ElasticsearchDestinationUpdate|object|false|none|none|
|AmazonopensearchserviceDestinationUpdate|object|false|none|none|
|SplunkDestinationUpdate|object|false|none|none|
|HttpEndpointDestinationUpdate|object|false|none|none|
|AmazonOpenSearchServerlessDestinationUpdate|object|false|none|none|

<h2 id="tocS_ConcurrentModificationException">ConcurrentModificationException</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodificationexception"></a>
<a id="schema_ConcurrentModificationException"></a>
<a id="tocSconcurrentmodificationexception"></a>
<a id="tocsconcurrentmodificationexception"></a>

```json
null
```

<h2 id="tocS_AWSKMSKeyARN">AWSKMSKeyARN</h2>
<!-- backwards compatibility -->
<a id="schemaawskmskeyarn"></a>
<a id="schema_AWSKMSKeyARN"></a>
<a id="tocSawskmskeyarn"></a>
<a id="tocsawskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_AmazonOpenSearchServerlessBufferingIntervalInSeconds">AmazonOpenSearchServerlessBufferingIntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessbufferingintervalinseconds"></a>
<a id="schema_AmazonOpenSearchServerlessBufferingIntervalInSeconds"></a>
<a id="tocSamazonopensearchserverlessbufferingintervalinseconds"></a>
<a id="tocsamazonopensearchserverlessbufferingintervalinseconds"></a>

```json
60
```

<h2 id="tocS_AmazonOpenSearchServerlessBufferingSizeInMBs">AmazonOpenSearchServerlessBufferingSizeInMBs</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessbufferingsizeinmbs"></a>
<a id="schema_AmazonOpenSearchServerlessBufferingSizeInMBs"></a>
<a id="tocSamazonopensearchserverlessbufferingsizeinmbs"></a>
<a id="tocsamazonopensearchserverlessbufferingsizeinmbs"></a>

```json
1
```

<h2 id="tocS_AmazonOpenSearchServerlessBufferingHints">AmazonOpenSearchServerlessBufferingHints</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessbufferinghints"></a>
<a id="schema_AmazonOpenSearchServerlessBufferingHints"></a>
<a id="tocSamazonopensearchserverlessbufferinghints"></a>
<a id="tocsamazonopensearchserverlessbufferinghints"></a>

```json
{
  "IntervalInSeconds": {},
  "SizeInMBs": {}
}
```

Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntervalInSeconds|object|false|none|none|
|SizeInMBs|object|false|none|none|

<h2 id="tocS_AmazonOpenSearchServerlessCollectionEndpoint">AmazonOpenSearchServerlessCollectionEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlesscollectionendpoint"></a>
<a id="schema_AmazonOpenSearchServerlessCollectionEndpoint"></a>
<a id="tocSamazonopensearchserverlesscollectionendpoint"></a>
<a id="tocsamazonopensearchserverlesscollectionendpoint"></a>

```json
"string"
```

<h2 id="tocS_RoleARN">RoleARN</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleARN"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_AmazonOpenSearchServerlessIndexName">AmazonOpenSearchServerlessIndexName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessindexname"></a>
<a id="schema_AmazonOpenSearchServerlessIndexName"></a>
<a id="tocSamazonopensearchserverlessindexname"></a>
<a id="tocsamazonopensearchserverlessindexname"></a>

```json
"string"
```

<h2 id="tocS_AmazonOpenSearchServerlessRetryOptions">AmazonOpenSearchServerlessRetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessretryoptions"></a>
<a id="schema_AmazonOpenSearchServerlessRetryOptions"></a>
<a id="tocSamazonopensearchserverlessretryoptions"></a>
<a id="tocsamazonopensearchserverlessretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_AmazonOpenSearchServerlessS3BackupMode">AmazonOpenSearchServerlessS3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlesss3backupmode"></a>
<a id="schema_AmazonOpenSearchServerlessS3BackupMode"></a>
<a id="tocSamazonopensearchserverlesss3backupmode"></a>
<a id="tocsamazonopensearchserverlesss3backupmode"></a>

```json
"FailedDocumentsOnly"
```

<h2 id="tocS_S3DestinationConfiguration">S3DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationconfiguration"></a>
<a id="schema_S3DestinationConfiguration"></a>
<a id="tocSs3destinationconfiguration"></a>
<a id="tocss3destinationconfiguration"></a>

```json
{
  "RoleARN": {},
  "BucketARN": {},
  "Prefix": {},
  "ErrorOutputPrefix": {},
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CompressionFormat": {},
  "EncryptionConfiguration": {
    "NoEncryptionConfig": {},
    "KMSEncryptionConfig": {
      "AWSKMSKeyARN": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes the configuration of a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|BucketARN|object|true|none|none|
|Prefix|object|false|none|none|
|ErrorOutputPrefix|object|false|none|none|
|BufferingHints|object|false|none|none|
|CompressionFormat|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_ProcessingConfiguration">ProcessingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingconfiguration"></a>
<a id="schema_ProcessingConfiguration"></a>
<a id="tocSprocessingconfiguration"></a>
<a id="tocsprocessingconfiguration"></a>

```json
{
  "Enabled": {},
  "Processors": {}
}
```

Describes a data processing configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|Processors|object|false|none|none|

<h2 id="tocS_CloudWatchLoggingOptions">CloudWatchLoggingOptions</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchloggingoptions"></a>
<a id="schema_CloudWatchLoggingOptions"></a>
<a id="tocScloudwatchloggingoptions"></a>
<a id="tocscloudwatchloggingoptions"></a>

```json
{
  "Enabled": {},
  "LogGroupName": {},
  "LogStreamName": {}
}
```

Describes the Amazon CloudWatch logging options for your delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|LogGroupName|object|false|none|none|
|LogStreamName|object|false|none|none|

<h2 id="tocS_VpcConfiguration">VpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiguration"></a>
<a id="schema_VpcConfiguration"></a>
<a id="tocSvpcconfiguration"></a>
<a id="tocsvpcconfiguration"></a>

```json
{
  "SubnetIds": {},
  "RoleARN": {},
  "SecurityGroupIds": {}
}
```

The details of the VPC of the Amazon ES destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|true|none|none|
|RoleARN|object|true|none|none|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_AmazonOpenSearchServerlessDestinationConfiguration">AmazonOpenSearchServerlessDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessdestinationconfiguration"></a>
<a id="schema_AmazonOpenSearchServerlessDestinationConfiguration"></a>
<a id="tocSamazonopensearchserverlessdestinationconfiguration"></a>
<a id="tocsamazonopensearchserverlessdestinationconfiguration"></a>

```json
{
  "RoleARN": {},
  "CollectionEndpoint": {},
  "IndexName": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "RoleARN": {},
    "SecurityGroupIds": {}
  }
}
```

Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|CollectionEndpoint|object|false|none|none|
|IndexName|object|true|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Configuration|[S3DestinationConfiguration](#schemas3destinationconfiguration)|true|none|Describes the configuration of a destination in Amazon S3.|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|VpcConfiguration|[VpcConfiguration](#schemavpcconfiguration)|false|none|The details of the VPC of the Amazon ES destination.|

<h2 id="tocS_S3DestinationDescription">S3DestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationdescription"></a>
<a id="schema_S3DestinationDescription"></a>
<a id="tocSs3destinationdescription"></a>
<a id="tocss3destinationdescription"></a>

```json
{
  "RoleARN": {},
  "BucketARN": {},
  "Prefix": {},
  "ErrorOutputPrefix": {},
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CompressionFormat": {},
  "EncryptionConfiguration": {
    "NoEncryptionConfig": {},
    "KMSEncryptionConfig": {
      "AWSKMSKeyARN": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|BucketARN|object|true|none|none|
|Prefix|object|false|none|none|
|ErrorOutputPrefix|object|false|none|none|
|BufferingHints|object|true|none|none|
|CompressionFormat|object|true|none|none|
|EncryptionConfiguration|object|true|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_VpcConfigurationDescription">VpcConfigurationDescription</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfigurationdescription"></a>
<a id="schema_VpcConfigurationDescription"></a>
<a id="tocSvpcconfigurationdescription"></a>
<a id="tocsvpcconfigurationdescription"></a>

```json
{
  "SubnetIds": {},
  "RoleARN": {},
  "SecurityGroupIds": {},
  "VpcId": {}
}
```

The details of the VPC of the Amazon ES destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|true|none|none|
|RoleARN|object|true|none|none|
|SecurityGroupIds|object|true|none|none|
|VpcId|object|true|none|none|

<h2 id="tocS_AmazonOpenSearchServerlessDestinationDescription">AmazonOpenSearchServerlessDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessdestinationdescription"></a>
<a id="schema_AmazonOpenSearchServerlessDestinationDescription"></a>
<a id="tocSamazonopensearchserverlessdestinationdescription"></a>
<a id="tocsamazonopensearchserverlessdestinationdescription"></a>

```json
{
  "RoleARN": {},
  "CollectionEndpoint": {},
  "IndexName": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "VpcConfigurationDescription": {
    "SubnetIds": {},
    "RoleARN": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  }
}
```

The destination description in the Serverless offering for Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|CollectionEndpoint|object|false|none|none|
|IndexName|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3DestinationDescription|[S3DestinationDescription](#schemas3destinationdescription)|false|none|Describes a destination in Amazon S3.|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|VpcConfigurationDescription|[VpcConfigurationDescription](#schemavpcconfigurationdescription)|false|none|The details of the VPC of the Amazon ES destination.|

<h2 id="tocS_S3DestinationUpdate">S3DestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationupdate"></a>
<a id="schema_S3DestinationUpdate"></a>
<a id="tocSs3destinationupdate"></a>
<a id="tocss3destinationupdate"></a>

```json
{
  "RoleARN": {},
  "BucketARN": {},
  "Prefix": {},
  "ErrorOutputPrefix": {},
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CompressionFormat": {},
  "EncryptionConfiguration": {
    "NoEncryptionConfig": {},
    "KMSEncryptionConfig": {
      "AWSKMSKeyARN": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes an update for a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|BucketARN|object|false|none|none|
|Prefix|object|false|none|none|
|ErrorOutputPrefix|object|false|none|none|
|BufferingHints|object|false|none|none|
|CompressionFormat|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_AmazonOpenSearchServerlessDestinationUpdate">AmazonOpenSearchServerlessDestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessdestinationupdate"></a>
<a id="schema_AmazonOpenSearchServerlessDestinationUpdate"></a>
<a id="tocSamazonopensearchserverlessdestinationupdate"></a>
<a id="tocsamazonopensearchserverlessdestinationupdate"></a>

```json
{
  "RoleARN": {},
  "CollectionEndpoint": {},
  "IndexName": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3Update": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|CollectionEndpoint|object|false|none|none|
|IndexName|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3Update|[S3DestinationUpdate](#schemas3destinationupdate)|false|none|Describes an update for a destination in Amazon S3.|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|

<h2 id="tocS_AmazonOpenSearchServerlessRetryDurationInSeconds">AmazonOpenSearchServerlessRetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserverlessretrydurationinseconds"></a>
<a id="schema_AmazonOpenSearchServerlessRetryDurationInSeconds"></a>
<a id="tocSamazonopensearchserverlessretrydurationinseconds"></a>
<a id="tocsamazonopensearchserverlessretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_AmazonopensearchserviceBufferingIntervalInSeconds">AmazonopensearchserviceBufferingIntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicebufferingintervalinseconds"></a>
<a id="schema_AmazonopensearchserviceBufferingIntervalInSeconds"></a>
<a id="tocSamazonopensearchservicebufferingintervalinseconds"></a>
<a id="tocsamazonopensearchservicebufferingintervalinseconds"></a>

```json
60
```

<h2 id="tocS_AmazonopensearchserviceBufferingSizeInMBs">AmazonopensearchserviceBufferingSizeInMBs</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicebufferingsizeinmbs"></a>
<a id="schema_AmazonopensearchserviceBufferingSizeInMBs"></a>
<a id="tocSamazonopensearchservicebufferingsizeinmbs"></a>
<a id="tocsamazonopensearchservicebufferingsizeinmbs"></a>

```json
1
```

<h2 id="tocS_AmazonopensearchserviceBufferingHints">AmazonopensearchserviceBufferingHints</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicebufferinghints"></a>
<a id="schema_AmazonopensearchserviceBufferingHints"></a>
<a id="tocSamazonopensearchservicebufferinghints"></a>
<a id="tocsamazonopensearchservicebufferinghints"></a>

```json
{
  "IntervalInSeconds": {},
  "SizeInMBs": {}
}
```

Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntervalInSeconds|object|false|none|none|
|SizeInMBs|object|false|none|none|

<h2 id="tocS_AmazonopensearchserviceClusterEndpoint">AmazonopensearchserviceClusterEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserviceclusterendpoint"></a>
<a id="schema_AmazonopensearchserviceClusterEndpoint"></a>
<a id="tocSamazonopensearchserviceclusterendpoint"></a>
<a id="tocsamazonopensearchserviceclusterendpoint"></a>

```json
"string"
```

<h2 id="tocS_AmazonopensearchserviceDomainARN">AmazonopensearchserviceDomainARN</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicedomainarn"></a>
<a id="schema_AmazonopensearchserviceDomainARN"></a>
<a id="tocSamazonopensearchservicedomainarn"></a>
<a id="tocsamazonopensearchservicedomainarn"></a>

```json
"string"
```

<h2 id="tocS_AmazonopensearchserviceIndexName">AmazonopensearchserviceIndexName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserviceindexname"></a>
<a id="schema_AmazonopensearchserviceIndexName"></a>
<a id="tocSamazonopensearchserviceindexname"></a>
<a id="tocsamazonopensearchserviceindexname"></a>

```json
"string"
```

<h2 id="tocS_AmazonopensearchserviceTypeName">AmazonopensearchserviceTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicetypename"></a>
<a id="schema_AmazonopensearchserviceTypeName"></a>
<a id="tocSamazonopensearchservicetypename"></a>
<a id="tocsamazonopensearchservicetypename"></a>

```json
"string"
```

<h2 id="tocS_AmazonopensearchserviceIndexRotationPeriod">AmazonopensearchserviceIndexRotationPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserviceindexrotationperiod"></a>
<a id="schema_AmazonopensearchserviceIndexRotationPeriod"></a>
<a id="tocSamazonopensearchserviceindexrotationperiod"></a>
<a id="tocsamazonopensearchserviceindexrotationperiod"></a>

```json
"NoRotation"
```

<h2 id="tocS_AmazonopensearchserviceRetryOptions">AmazonopensearchserviceRetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserviceretryoptions"></a>
<a id="schema_AmazonopensearchserviceRetryOptions"></a>
<a id="tocSamazonopensearchserviceretryoptions"></a>
<a id="tocsamazonopensearchserviceretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_AmazonopensearchserviceS3BackupMode">AmazonopensearchserviceS3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservices3backupmode"></a>
<a id="schema_AmazonopensearchserviceS3BackupMode"></a>
<a id="tocSamazonopensearchservices3backupmode"></a>
<a id="tocsamazonopensearchservices3backupmode"></a>

```json
"FailedDocumentsOnly"
```

<h2 id="tocS_AmazonopensearchserviceDestinationConfiguration">AmazonopensearchserviceDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicedestinationconfiguration"></a>
<a id="schema_AmazonopensearchserviceDestinationConfiguration"></a>
<a id="tocSamazonopensearchservicedestinationconfiguration"></a>
<a id="tocsamazonopensearchservicedestinationconfiguration"></a>

```json
{
  "RoleARN": {},
  "DomainARN": {},
  "ClusterEndpoint": {},
  "IndexName": {},
  "TypeName": {},
  "IndexRotationPeriod": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "RoleARN": {},
    "SecurityGroupIds": {}
  }
}
```

Describes the configuration of a destination in Amazon OpenSearch Service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|DomainARN|object|false|none|none|
|ClusterEndpoint|object|false|none|none|
|IndexName|object|true|none|none|
|TypeName|object|false|none|none|
|IndexRotationPeriod|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Configuration|[S3DestinationConfiguration](#schemas3destinationconfiguration)|true|none|Describes the configuration of a destination in Amazon S3.|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|VpcConfiguration|[VpcConfiguration](#schemavpcconfiguration)|false|none|The details of the VPC of the Amazon ES destination.|

<h2 id="tocS_AmazonopensearchserviceDestinationDescription">AmazonopensearchserviceDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicedestinationdescription"></a>
<a id="schema_AmazonopensearchserviceDestinationDescription"></a>
<a id="tocSamazonopensearchservicedestinationdescription"></a>
<a id="tocsamazonopensearchservicedestinationdescription"></a>

```json
{
  "RoleARN": {},
  "DomainARN": {},
  "ClusterEndpoint": {},
  "IndexName": {},
  "TypeName": {},
  "IndexRotationPeriod": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "VpcConfigurationDescription": {
    "SubnetIds": {},
    "RoleARN": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  }
}
```

The destination description in Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|DomainARN|object|false|none|none|
|ClusterEndpoint|object|false|none|none|
|IndexName|object|false|none|none|
|TypeName|object|false|none|none|
|IndexRotationPeriod|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3DestinationDescription|[S3DestinationDescription](#schemas3destinationdescription)|false|none|Describes a destination in Amazon S3.|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|VpcConfigurationDescription|[VpcConfigurationDescription](#schemavpcconfigurationdescription)|false|none|The details of the VPC of the Amazon ES destination.|

<h2 id="tocS_AmazonopensearchserviceDestinationUpdate">AmazonopensearchserviceDestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchservicedestinationupdate"></a>
<a id="schema_AmazonopensearchserviceDestinationUpdate"></a>
<a id="tocSamazonopensearchservicedestinationupdate"></a>
<a id="tocsamazonopensearchservicedestinationupdate"></a>

```json
{
  "RoleARN": {},
  "DomainARN": {},
  "ClusterEndpoint": {},
  "IndexName": {},
  "TypeName": {},
  "IndexRotationPeriod": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3Update": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes an update for a destination in Amazon OpenSearch Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|DomainARN|object|false|none|none|
|ClusterEndpoint|object|false|none|none|
|IndexName|object|false|none|none|
|TypeName|object|false|none|none|
|IndexRotationPeriod|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3Update|[S3DestinationUpdate](#schemas3destinationupdate)|false|none|Describes an update for a destination in Amazon S3.|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|

<h2 id="tocS_AmazonopensearchserviceRetryDurationInSeconds">AmazonopensearchserviceRetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaamazonopensearchserviceretrydurationinseconds"></a>
<a id="schema_AmazonopensearchserviceRetryDurationInSeconds"></a>
<a id="tocSamazonopensearchserviceretrydurationinseconds"></a>
<a id="tocsamazonopensearchserviceretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_BlockSizeBytes">BlockSizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemablocksizebytes"></a>
<a id="schema_BlockSizeBytes"></a>
<a id="tocSblocksizebytes"></a>
<a id="tocsblocksizebytes"></a>

```json
67108864
```

<h2 id="tocS_BooleanObject">BooleanObject</h2>
<!-- backwards compatibility -->
<a id="schemabooleanobject"></a>
<a id="schema_BooleanObject"></a>
<a id="tocSbooleanobject"></a>
<a id="tocsbooleanobject"></a>

```json
true
```

<h2 id="tocS_BucketARN">BucketARN</h2>
<!-- backwards compatibility -->
<a id="schemabucketarn"></a>
<a id="schema_BucketARN"></a>
<a id="tocSbucketarn"></a>
<a id="tocsbucketarn"></a>

```json
"string"
```

<h2 id="tocS_SizeInMBs">SizeInMBs</h2>
<!-- backwards compatibility -->
<a id="schemasizeinmbs"></a>
<a id="schema_SizeInMBs"></a>
<a id="tocSsizeinmbs"></a>
<a id="tocssizeinmbs"></a>

```json
1
```

<h2 id="tocS_IntervalInSeconds">IntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaintervalinseconds"></a>
<a id="schema_IntervalInSeconds"></a>
<a id="tocSintervalinseconds"></a>
<a id="tocsintervalinseconds"></a>

```json
60
```

<h2 id="tocS_BufferingHints">BufferingHints</h2>
<!-- backwards compatibility -->
<a id="schemabufferinghints"></a>
<a id="schema_BufferingHints"></a>
<a id="tocSbufferinghints"></a>
<a id="tocsbufferinghints"></a>

```json
{
  "SizeInMBs": {},
  "IntervalInSeconds": {}
}
```

Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeInMBs|object|false|none|none|
|IntervalInSeconds|object|false|none|none|

<h2 id="tocS_LogGroupName">LogGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaloggroupname"></a>
<a id="schema_LogGroupName"></a>
<a id="tocSloggroupname"></a>
<a id="tocsloggroupname"></a>

```json
"string"
```

<h2 id="tocS_LogStreamName">LogStreamName</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamname"></a>
<a id="schema_LogStreamName"></a>
<a id="tocSlogstreamname"></a>
<a id="tocslogstreamname"></a>

```json
"string"
```

<h2 id="tocS_ClusterJDBCURL">ClusterJDBCURL</h2>
<!-- backwards compatibility -->
<a id="schemaclusterjdbcurl"></a>
<a id="schema_ClusterJDBCURL"></a>
<a id="tocSclusterjdbcurl"></a>
<a id="tocsclusterjdbcurl"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_ColumnToJsonKeyMappings">ColumnToJsonKeyMappings</h2>
<!-- backwards compatibility -->
<a id="schemacolumntojsonkeymappings"></a>
<a id="schema_ColumnToJsonKeyMappings"></a>
<a id="tocScolumntojsonkeymappings"></a>
<a id="tocscolumntojsonkeymappings"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonEmptyString](#schemanonemptystring)|false|none|none|

<h2 id="tocS_CompressionFormat">CompressionFormat</h2>
<!-- backwards compatibility -->
<a id="schemacompressionformat"></a>
<a id="schema_CompressionFormat"></a>
<a id="tocScompressionformat"></a>
<a id="tocscompressionformat"></a>

```json
"UNCOMPRESSED"
```

<h2 id="tocS_ContentEncoding">ContentEncoding</h2>
<!-- backwards compatibility -->
<a id="schemacontentencoding"></a>
<a id="schema_ContentEncoding"></a>
<a id="tocScontentencoding"></a>
<a id="tocscontentencoding"></a>

```json
"NONE"
```

<h2 id="tocS_DataTableName">DataTableName</h2>
<!-- backwards compatibility -->
<a id="schemadatatablename"></a>
<a id="schema_DataTableName"></a>
<a id="tocSdatatablename"></a>
<a id="tocsdatatablename"></a>

```json
"string"
```

<h2 id="tocS_DataTableColumns">DataTableColumns</h2>
<!-- backwards compatibility -->
<a id="schemadatatablecolumns"></a>
<a id="schema_DataTableColumns"></a>
<a id="tocSdatatablecolumns"></a>
<a id="tocsdatatablecolumns"></a>

```json
"string"
```

<h2 id="tocS_CopyOptions">CopyOptions</h2>
<!-- backwards compatibility -->
<a id="schemacopyoptions"></a>
<a id="schema_CopyOptions"></a>
<a id="tocScopyoptions"></a>
<a id="tocscopyoptions"></a>

```json
"string"
```

<h2 id="tocS_CopyCommand">CopyCommand</h2>
<!-- backwards compatibility -->
<a id="schemacopycommand"></a>
<a id="schema_CopyCommand"></a>
<a id="tocScopycommand"></a>
<a id="tocscopycommand"></a>

```json
{
  "DataTableName": {},
  "DataTableColumns": {},
  "CopyOptions": {}
}
```

Describes a <code>COPY</code> command for Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataTableName|object|true|none|none|
|DataTableColumns|object|false|none|none|
|CopyOptions|object|false|none|none|

<h2 id="tocS_DeliveryStreamName">DeliveryStreamName</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamname"></a>
<a id="schema_DeliveryStreamName"></a>
<a id="tocSdeliverystreamname"></a>
<a id="tocsdeliverystreamname"></a>

```json
"string"
```

<h2 id="tocS_DeliveryStreamType">DeliveryStreamType</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamtype"></a>
<a id="schema_DeliveryStreamType"></a>
<a id="tocSdeliverystreamtype"></a>
<a id="tocsdeliverystreamtype"></a>

```json
"DirectPut"
```

<h2 id="tocS_KinesisStreamSourceConfiguration">KinesisStreamSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsourceconfiguration"></a>
<a id="schema_KinesisStreamSourceConfiguration"></a>
<a id="tocSkinesisstreamsourceconfiguration"></a>
<a id="tocskinesisstreamsourceconfiguration"></a>

```json
{
  "KinesisStreamARN": {},
  "RoleARN": {}
}
```

The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KinesisStreamARN|object|true|none|none|
|RoleARN|object|true|none|none|

<h2 id="tocS_DeliveryStreamEncryptionConfigurationInput">DeliveryStreamEncryptionConfigurationInput</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamencryptionconfigurationinput"></a>
<a id="schema_DeliveryStreamEncryptionConfigurationInput"></a>
<a id="tocSdeliverystreamencryptionconfigurationinput"></a>
<a id="tocsdeliverystreamencryptionconfigurationinput"></a>

```json
{
  "KeyARN": {},
  "KeyType": {}
}
```

Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyARN|object|false|none|none|
|KeyType|object|true|none|none|

<h2 id="tocS_ExtendedS3DestinationConfiguration">ExtendedS3DestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaextendeds3destinationconfiguration"></a>
<a id="schema_ExtendedS3DestinationConfiguration"></a>
<a id="tocSextendeds3destinationconfiguration"></a>
<a id="tocsextendeds3destinationconfiguration"></a>

```json
{
  "RoleARN": {},
  "BucketARN": {},
  "Prefix": {},
  "ErrorOutputPrefix": {},
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CompressionFormat": {},
  "EncryptionConfiguration": {
    "NoEncryptionConfig": {},
    "KMSEncryptionConfig": {
      "AWSKMSKeyARN": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "S3BackupMode": {},
  "S3BackupConfiguration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "DataFormatConversionConfiguration": {
    "SchemaConfiguration": {
      "RoleARN": {},
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Region": {},
      "VersionId": {}
    },
    "InputFormatConfiguration": {
      "Deserializer": {
        "OpenXJsonSerDe": {
          "ConvertDotsInJsonKeysToUnderscores": {},
          "CaseInsensitive": {},
          "ColumnToJsonKeyMappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "HiveJsonSerDe": {
          "TimestampFormats": {}
        }
      }
    },
    "OutputFormatConfiguration": {
      "Serializer": {
        "ParquetSerDe": {
          "BlockSizeBytes": {},
          "PageSizeBytes": {},
          "Compression": {},
          "EnableDictionaryCompression": {},
          "MaxPaddingBytes": {},
          "WriterVersion": {}
        },
        "OrcSerDe": {
          "StripeSizeBytes": {},
          "BlockSizeBytes": {},
          "RowIndexStride": {},
          "EnablePadding": {},
          "PaddingTolerance": {},
          "Compression": {},
          "BloomFilterColumns": {},
          "BloomFilterFalsePositiveProbability": {},
          "DictionaryKeyThreshold": {},
          "FormatVersion": {}
        }
      }
    },
    "Enabled": {}
  },
  "DynamicPartitioningConfiguration": {
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "Enabled": {}
  }
}
```

Describes the configuration of a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|BucketARN|object|true|none|none|
|Prefix|object|false|none|none|
|ErrorOutputPrefix|object|false|none|none|
|BufferingHints|object|false|none|none|
|CompressionFormat|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3BackupConfiguration|object|false|none|none|
|DataFormatConversionConfiguration|object|false|none|none|
|DynamicPartitioningConfiguration|object|false|none|none|

<h2 id="tocS_RedshiftDestinationConfiguration">RedshiftDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdestinationconfiguration"></a>
<a id="schema_RedshiftDestinationConfiguration"></a>
<a id="tocSredshiftdestinationconfiguration"></a>
<a id="tocsredshiftdestinationconfiguration"></a>

```json
{
  "RoleARN": {},
  "ClusterJDBCURL": {},
  "CopyCommand": {
    "DataTableName": {},
    "DataTableColumns": {},
    "CopyOptions": {}
  },
  "Username": {},
  "Password": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "S3BackupMode": {},
  "S3BackupConfiguration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes the configuration of a destination in Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|ClusterJDBCURL|object|true|none|none|
|CopyCommand|object|true|none|none|
|Username|object|true|none|none|
|Password|object|true|none|none|
|RetryOptions|object|false|none|none|
|S3Configuration|object|true|none|none|
|ProcessingConfiguration|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3BackupConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_ElasticsearchDestinationConfiguration">ElasticsearchDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdestinationconfiguration"></a>
<a id="schema_ElasticsearchDestinationConfiguration"></a>
<a id="tocSelasticsearchdestinationconfiguration"></a>
<a id="tocselasticsearchdestinationconfiguration"></a>

```json
{
  "RoleARN": {},
  "DomainARN": {},
  "ClusterEndpoint": {},
  "IndexName": {},
  "TypeName": {},
  "IndexRotationPeriod": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "VpcConfiguration": {
    "SubnetIds": {},
    "RoleARN": {},
    "SecurityGroupIds": {}
  }
}
```

Describes the configuration of a destination in Amazon ES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|DomainARN|object|false|none|none|
|ClusterEndpoint|object|false|none|none|
|IndexName|object|true|none|none|
|TypeName|object|false|none|none|
|IndexRotationPeriod|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Configuration|object|true|none|none|
|ProcessingConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|VpcConfiguration|object|false|none|none|

<h2 id="tocS_SplunkDestinationConfiguration">SplunkDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasplunkdestinationconfiguration"></a>
<a id="schema_SplunkDestinationConfiguration"></a>
<a id="tocSsplunkdestinationconfiguration"></a>
<a id="tocssplunkdestinationconfiguration"></a>

```json
{
  "HECEndpoint": {},
  "HECEndpointType": {},
  "HECToken": {},
  "HECAcknowledgmentTimeoutInSeconds": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes the configuration of a destination in Splunk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HECEndpoint|object|true|none|none|
|HECEndpointType|object|true|none|none|
|HECToken|object|true|none|none|
|HECAcknowledgmentTimeoutInSeconds|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Configuration|object|true|none|none|
|ProcessingConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_HttpEndpointDestinationConfiguration">HttpEndpointDestinationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointdestinationconfiguration"></a>
<a id="schema_HttpEndpointDestinationConfiguration"></a>
<a id="tocShttpendpointdestinationconfiguration"></a>
<a id="tocshttpendpointdestinationconfiguration"></a>

```json
{
  "EndpointConfiguration": {
    "Url": {},
    "Name": {},
    "AccessKey": {}
  },
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "RequestConfiguration": {
    "ContentEncoding": {},
    "CommonAttributes": {}
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "RoleARN": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Configuration": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  }
}
```

Describes the configuration of the HTTP endpoint destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointConfiguration|object|true|none|none|
|BufferingHints|object|false|none|none|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|RequestConfiguration|object|false|none|none|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|RoleARN|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Configuration|[S3DestinationConfiguration](#schemas3destinationconfiguration)|true|none|Describes the configuration of a destination in Amazon S3.|

<h2 id="tocS_TagDeliveryStreamInputTagList">TagDeliveryStreamInputTagList</h2>
<!-- backwards compatibility -->
<a id="schematagdeliverystreaminputtaglist"></a>
<a id="schema_TagDeliveryStreamInputTagList"></a>
<a id="tocStagdeliverystreaminputtaglist"></a>
<a id="tocstagdeliverystreaminputtaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_DeliveryStreamARN">DeliveryStreamARN</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamarn"></a>
<a id="schema_DeliveryStreamARN"></a>
<a id="tocSdeliverystreamarn"></a>
<a id="tocsdeliverystreamarn"></a>

```json
"string"
```

<h2 id="tocS_Data">Data</h2>
<!-- backwards compatibility -->
<a id="schemadata"></a>
<a id="schema_Data"></a>
<a id="tocSdata"></a>
<a id="tocsdata"></a>

```json
"string"
```

<h2 id="tocS_SchemaConfiguration">SchemaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaschemaconfiguration"></a>
<a id="schema_SchemaConfiguration"></a>
<a id="tocSschemaconfiguration"></a>
<a id="tocsschemaconfiguration"></a>

```json
{
  "RoleARN": {},
  "CatalogId": {},
  "DatabaseName": {},
  "TableName": {},
  "Region": {},
  "VersionId": {}
}
```

Specifies the schema to which you want Kinesis Data Firehose to configure your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|CatalogId|object|false|none|none|
|DatabaseName|object|false|none|none|
|TableName|object|false|none|none|
|Region|object|false|none|none|
|VersionId|object|false|none|none|

<h2 id="tocS_InputFormatConfiguration">InputFormatConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainputformatconfiguration"></a>
<a id="schema_InputFormatConfiguration"></a>
<a id="tocSinputformatconfiguration"></a>
<a id="tocsinputformatconfiguration"></a>

```json
{
  "Deserializer": {
    "OpenXJsonSerDe": {
      "ConvertDotsInJsonKeysToUnderscores": {},
      "CaseInsensitive": {},
      "ColumnToJsonKeyMappings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "HiveJsonSerDe": {
      "TimestampFormats": {}
    }
  }
}
```

Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if <code>Enabled</code> is set to true.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Deserializer|object|false|none|none|

<h2 id="tocS_OutputFormatConfiguration">OutputFormatConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaoutputformatconfiguration"></a>
<a id="schema_OutputFormatConfiguration"></a>
<a id="tocSoutputformatconfiguration"></a>
<a id="tocsoutputformatconfiguration"></a>

```json
{
  "Serializer": {
    "ParquetSerDe": {
      "BlockSizeBytes": {},
      "PageSizeBytes": {},
      "Compression": {},
      "EnableDictionaryCompression": {},
      "MaxPaddingBytes": {},
      "WriterVersion": {}
    },
    "OrcSerDe": {
      "StripeSizeBytes": {},
      "BlockSizeBytes": {},
      "RowIndexStride": {},
      "EnablePadding": {},
      "PaddingTolerance": {},
      "Compression": {},
      "BloomFilterColumns": {},
      "BloomFilterFalsePositiveProbability": {},
      "DictionaryKeyThreshold": {},
      "FormatVersion": {}
    }
  }
}
```

Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set to true.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Serializer|object|false|none|none|

<h2 id="tocS_DataFormatConversionConfiguration">DataFormatConversionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadataformatconversionconfiguration"></a>
<a id="schema_DataFormatConversionConfiguration"></a>
<a id="tocSdataformatconversionconfiguration"></a>
<a id="tocsdataformatconversionconfiguration"></a>

```json
{
  "SchemaConfiguration": {
    "RoleARN": {},
    "CatalogId": {},
    "DatabaseName": {},
    "TableName": {},
    "Region": {},
    "VersionId": {}
  },
  "InputFormatConfiguration": {
    "Deserializer": {
      "OpenXJsonSerDe": {
        "ConvertDotsInJsonKeysToUnderscores": {},
        "CaseInsensitive": {},
        "ColumnToJsonKeyMappings": {
          "property1": "string",
          "property2": "string"
        }
      },
      "HiveJsonSerDe": {
        "TimestampFormats": {}
      }
    }
  },
  "OutputFormatConfiguration": {
    "Serializer": {
      "ParquetSerDe": {
        "BlockSizeBytes": {},
        "PageSizeBytes": {},
        "Compression": {},
        "EnableDictionaryCompression": {},
        "MaxPaddingBytes": {},
        "WriterVersion": {}
      },
      "OrcSerDe": {
        "StripeSizeBytes": {},
        "BlockSizeBytes": {},
        "RowIndexStride": {},
        "EnablePadding": {},
        "PaddingTolerance": {},
        "Compression": {},
        "BloomFilterColumns": {},
        "BloomFilterFalsePositiveProbability": {},
        "DictionaryKeyThreshold": {},
        "FormatVersion": {}
      }
    }
  },
  "Enabled": {}
}
```

Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the Amazon Web Services Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemaConfiguration|object|false|none|none|
|InputFormatConfiguration|object|false|none|none|
|OutputFormatConfiguration|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_DeliveryStartTimestamp">DeliveryStartTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystarttimestamp"></a>
<a id="schema_DeliveryStartTimestamp"></a>
<a id="tocSdeliverystarttimestamp"></a>
<a id="tocsdeliverystarttimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeliveryStreamStatus">DeliveryStreamStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamstatus"></a>
<a id="schema_DeliveryStreamStatus"></a>
<a id="tocSdeliverystreamstatus"></a>
<a id="tocsdeliverystreamstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_FailureDescription">FailureDescription</h2>
<!-- backwards compatibility -->
<a id="schemafailuredescription"></a>
<a id="schema_FailureDescription"></a>
<a id="tocSfailuredescription"></a>
<a id="tocsfailuredescription"></a>

```json
{
  "Type": {},
  "Details": {}
}
```

Provides details in case one of the following operations fails due to an error related to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>, <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Details|object|true|none|none|

<h2 id="tocS_DeliveryStreamEncryptionConfiguration">DeliveryStreamEncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamencryptionconfiguration"></a>
<a id="schema_DeliveryStreamEncryptionConfiguration"></a>
<a id="tocSdeliverystreamencryptionconfiguration"></a>
<a id="tocsdeliverystreamencryptionconfiguration"></a>

```json
{
  "KeyARN": {},
  "KeyType": {},
  "Status": {},
  "FailureDescription": {
    "Type": {},
    "Details": {}
  }
}
```

Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyARN|object|false|none|none|
|KeyType|object|false|none|none|
|Status|object|false|none|none|
|FailureDescription|object|false|none|none|

<h2 id="tocS_DeliveryStreamVersionId">DeliveryStreamVersionId</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamversionid"></a>
<a id="schema_DeliveryStreamVersionId"></a>
<a id="tocSdeliverystreamversionid"></a>
<a id="tocsdeliverystreamversionid"></a>

```json
"string"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SourceDescription">SourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemasourcedescription"></a>
<a id="schema_SourceDescription"></a>
<a id="tocSsourcedescription"></a>
<a id="tocssourcedescription"></a>

```json
{
  "KinesisStreamSourceDescription": {
    "KinesisStreamARN": {},
    "RoleARN": {},
    "DeliveryStartTimestamp": {}
  }
}
```

Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KinesisStreamSourceDescription|object|false|none|none|

<h2 id="tocS_DestinationDescriptionList">DestinationDescriptionList</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdescriptionlist"></a>
<a id="schema_DestinationDescriptionList"></a>
<a id="tocSdestinationdescriptionlist"></a>
<a id="tocsdestinationdescriptionlist"></a>

```json
[
  {
    "DestinationId": {},
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ExtendedS3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "S3BackupMode": {},
      "S3BackupDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "DataFormatConversionConfiguration": {
        "SchemaConfiguration": {
          "RoleARN": {},
          "CatalogId": {},
          "DatabaseName": {},
          "TableName": {},
          "Region": {},
          "VersionId": {}
        },
        "InputFormatConfiguration": {
          "Deserializer": {
            "OpenXJsonSerDe": {
              "ConvertDotsInJsonKeysToUnderscores": {},
              "CaseInsensitive": {},
              "ColumnToJsonKeyMappings": {
                "property1": "string",
                "property2": "string"
              }
            },
            "HiveJsonSerDe": {
              "TimestampFormats": {}
            }
          }
        },
        "OutputFormatConfiguration": {
          "Serializer": {
            "ParquetSerDe": {
              "BlockSizeBytes": {},
              "PageSizeBytes": {},
              "Compression": {},
              "EnableDictionaryCompression": {},
              "MaxPaddingBytes": {},
              "WriterVersion": {}
            },
            "OrcSerDe": {
              "StripeSizeBytes": {},
              "BlockSizeBytes": {},
              "RowIndexStride": {},
              "EnablePadding": {},
              "PaddingTolerance": {},
              "Compression": {},
              "BloomFilterColumns": {},
              "BloomFilterFalsePositiveProbability": {},
              "DictionaryKeyThreshold": {},
              "FormatVersion": {}
            }
          }
        },
        "Enabled": {}
      },
      "DynamicPartitioningConfiguration": {
        "RetryOptions": {
          "DurationInSeconds": {}
        },
        "Enabled": {}
      }
    },
    "RedshiftDestinationDescription": {
      "RoleARN": {},
      "ClusterJDBCURL": {},
      "CopyCommand": {
        "DataTableName": {},
        "DataTableColumns": {},
        "CopyOptions": {}
      },
      "Username": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3DestinationDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "S3BackupMode": {},
      "S3BackupDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ElasticsearchDestinationDescription": {
      "RoleARN": {},
      "DomainARN": {},
      "ClusterEndpoint": {},
      "IndexName": {},
      "TypeName": {},
      "IndexRotationPeriod": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3DestinationDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "VpcConfigurationDescription": {
        "SubnetIds": {},
        "RoleARN": {},
        "SecurityGroupIds": {},
        "VpcId": {}
      }
    },
    "AmazonopensearchserviceDestinationDescription": {
      "RoleARN": {},
      "DomainARN": {},
      "ClusterEndpoint": {},
      "IndexName": {},
      "TypeName": {},
      "IndexRotationPeriod": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3DestinationDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "VpcConfigurationDescription": {
        "SubnetIds": {},
        "RoleARN": {},
        "SecurityGroupIds": {},
        "VpcId": {}
      }
    },
    "SplunkDestinationDescription": {
      "HECEndpoint": {},
      "HECEndpointType": {},
      "HECToken": {},
      "HECAcknowledgmentTimeoutInSeconds": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3DestinationDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "HttpEndpointDestinationDescription": {
      "EndpointConfiguration": {
        "Url": {},
        "Name": {}
      },
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "RequestConfiguration": {
        "ContentEncoding": {},
        "CommonAttributes": {}
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "RoleARN": {},
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3DestinationDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      }
    },
    "AmazonOpenSearchServerlessDestinationDescription": {
      "RoleARN": {},
      "CollectionEndpoint": {},
      "IndexName": {},
      "BufferingHints": {
        "IntervalInSeconds": {},
        "SizeInMBs": {}
      },
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "S3BackupMode": {},
      "S3DestinationDescription": {
        "RoleARN": {},
        "BucketARN": {},
        "Prefix": {},
        "ErrorOutputPrefix": {},
        "BufferingHints": {
          "SizeInMBs": {},
          "IntervalInSeconds": {}
        },
        "CompressionFormat": {},
        "EncryptionConfiguration": {
          "NoEncryptionConfig": {},
          "KMSEncryptionConfig": {
            "AWSKMSKeyARN": {}
          }
        },
        "CloudWatchLoggingOptions": {
          "Enabled": {},
          "LogGroupName": {},
          "LogStreamName": {}
        }
      },
      "ProcessingConfiguration": {
        "Enabled": {},
        "Processors": {}
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      },
      "VpcConfigurationDescription": {
        "SubnetIds": {},
        "RoleARN": {},
        "SecurityGroupIds": {},
        "VpcId": {}
      }
    }
  }
]
```

<h2 id="tocS_DeliveryStreamDescription">DeliveryStreamDescription</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamdescription"></a>
<a id="schema_DeliveryStreamDescription"></a>
<a id="tocSdeliverystreamdescription"></a>
<a id="tocsdeliverystreamdescription"></a>

```json
{
  "DeliveryStreamName": {},
  "DeliveryStreamARN": {},
  "DeliveryStreamStatus": {},
  "FailureDescription": {
    "Type": {},
    "Details": {}
  },
  "DeliveryStreamEncryptionConfiguration": {
    "KeyARN": {},
    "KeyType": {},
    "Status": {},
    "FailureDescription": {
      "Type": {},
      "Details": {}
    }
  },
  "DeliveryStreamType": {},
  "VersionId": {},
  "CreateTimestamp": {},
  "LastUpdateTimestamp": {},
  "Source": {
    "KinesisStreamSourceDescription": {
      "KinesisStreamARN": {},
      "RoleARN": {},
      "DeliveryStartTimestamp": {}
    }
  },
  "Destinations": {},
  "HasMoreDestinations": {}
}
```

Contains information about a delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStreamName|object|true|none|none|
|DeliveryStreamARN|object|true|none|none|
|DeliveryStreamStatus|object|true|none|none|
|FailureDescription|object|false|none|none|
|DeliveryStreamEncryptionConfiguration|object|false|none|none|
|DeliveryStreamType|object|true|none|none|
|VersionId|object|true|none|none|
|CreateTimestamp|object|false|none|none|
|LastUpdateTimestamp|object|false|none|none|
|Source|object|false|none|none|
|Destinations|object|true|none|none|
|HasMoreDestinations|object|true|none|none|

<h2 id="tocS_KeyType">KeyType</h2>
<!-- backwards compatibility -->
<a id="schemakeytype"></a>
<a id="schema_KeyType"></a>
<a id="tocSkeytype"></a>
<a id="tocskeytype"></a>

```json
"AWS_OWNED_CMK"
```

<h2 id="tocS_DeliveryStreamEncryptionStatus">DeliveryStreamEncryptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamencryptionstatus"></a>
<a id="schema_DeliveryStreamEncryptionStatus"></a>
<a id="tocSdeliverystreamencryptionstatus"></a>
<a id="tocsdeliverystreamencryptionstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_DeliveryStreamFailureType">DeliveryStreamFailureType</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamfailuretype"></a>
<a id="schema_DeliveryStreamFailureType"></a>
<a id="tocSdeliverystreamfailuretype"></a>
<a id="tocsdeliverystreamfailuretype"></a>

```json
"RETIRE_KMS_GRANT_FAILED"
```

<h2 id="tocS_DeliveryStreamNameList">DeliveryStreamNameList</h2>
<!-- backwards compatibility -->
<a id="schemadeliverystreamnamelist"></a>
<a id="schema_DeliveryStreamNameList"></a>
<a id="tocSdeliverystreamnamelist"></a>
<a id="tocsdeliverystreamnamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeDeliveryStreamInputLimit">DescribeDeliveryStreamInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeliverystreaminputlimit"></a>
<a id="schema_DescribeDeliveryStreamInputLimit"></a>
<a id="tocSdescribedeliverystreaminputlimit"></a>
<a id="tocsdescribedeliverystreaminputlimit"></a>

```json
1
```

<h2 id="tocS_DestinationId">DestinationId</h2>
<!-- backwards compatibility -->
<a id="schemadestinationid"></a>
<a id="schema_DestinationId"></a>
<a id="tocSdestinationid"></a>
<a id="tocsdestinationid"></a>

```json
"string"
```

<h2 id="tocS_OpenXJsonSerDe">OpenXJsonSerDe</h2>
<!-- backwards compatibility -->
<a id="schemaopenxjsonserde"></a>
<a id="schema_OpenXJsonSerDe"></a>
<a id="tocSopenxjsonserde"></a>
<a id="tocsopenxjsonserde"></a>

```json
{
  "ConvertDotsInJsonKeysToUnderscores": {},
  "CaseInsensitive": {},
  "ColumnToJsonKeyMappings": {
    "property1": "string",
    "property2": "string"
  }
}
```

The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConvertDotsInJsonKeysToUnderscores|object|false|none|none|
|CaseInsensitive|object|false|none|none|
|ColumnToJsonKeyMappings|object|false|none|none|

<h2 id="tocS_HiveJsonSerDe">HiveJsonSerDe</h2>
<!-- backwards compatibility -->
<a id="schemahivejsonserde"></a>
<a id="schema_HiveJsonSerDe"></a>
<a id="tocShivejsonserde"></a>
<a id="tocshivejsonserde"></a>

```json
{
  "TimestampFormats": {}
}
```

The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimestampFormats|object|false|none|none|

<h2 id="tocS_Deserializer">Deserializer</h2>
<!-- backwards compatibility -->
<a id="schemadeserializer"></a>
<a id="schema_Deserializer"></a>
<a id="tocSdeserializer"></a>
<a id="tocsdeserializer"></a>

```json
{
  "OpenXJsonSerDe": {
    "ConvertDotsInJsonKeysToUnderscores": {},
    "CaseInsensitive": {},
    "ColumnToJsonKeyMappings": {
      "property1": "string",
      "property2": "string"
    }
  },
  "HiveJsonSerDe": {
    "TimestampFormats": {}
  }
}
```

The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OpenXJsonSerDe|object|false|none|none|
|HiveJsonSerDe|object|false|none|none|

<h2 id="tocS_ExtendedS3DestinationDescription">ExtendedS3DestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaextendeds3destinationdescription"></a>
<a id="schema_ExtendedS3DestinationDescription"></a>
<a id="tocSextendeds3destinationdescription"></a>
<a id="tocsextendeds3destinationdescription"></a>

```json
{
  "RoleARN": {},
  "BucketARN": {},
  "Prefix": {},
  "ErrorOutputPrefix": {},
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CompressionFormat": {},
  "EncryptionConfiguration": {
    "NoEncryptionConfig": {},
    "KMSEncryptionConfig": {
      "AWSKMSKeyARN": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "S3BackupMode": {},
  "S3BackupDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "DataFormatConversionConfiguration": {
    "SchemaConfiguration": {
      "RoleARN": {},
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Region": {},
      "VersionId": {}
    },
    "InputFormatConfiguration": {
      "Deserializer": {
        "OpenXJsonSerDe": {
          "ConvertDotsInJsonKeysToUnderscores": {},
          "CaseInsensitive": {},
          "ColumnToJsonKeyMappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "HiveJsonSerDe": {
          "TimestampFormats": {}
        }
      }
    },
    "OutputFormatConfiguration": {
      "Serializer": {
        "ParquetSerDe": {
          "BlockSizeBytes": {},
          "PageSizeBytes": {},
          "Compression": {},
          "EnableDictionaryCompression": {},
          "MaxPaddingBytes": {},
          "WriterVersion": {}
        },
        "OrcSerDe": {
          "StripeSizeBytes": {},
          "BlockSizeBytes": {},
          "RowIndexStride": {},
          "EnablePadding": {},
          "PaddingTolerance": {},
          "Compression": {},
          "BloomFilterColumns": {},
          "BloomFilterFalsePositiveProbability": {},
          "DictionaryKeyThreshold": {},
          "FormatVersion": {}
        }
      }
    },
    "Enabled": {}
  },
  "DynamicPartitioningConfiguration": {
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "Enabled": {}
  }
}
```

Describes a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|BucketARN|object|true|none|none|
|Prefix|object|false|none|none|
|ErrorOutputPrefix|object|false|none|none|
|BufferingHints|object|true|none|none|
|CompressionFormat|object|true|none|none|
|EncryptionConfiguration|object|true|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3BackupDescription|object|false|none|none|
|DataFormatConversionConfiguration|object|false|none|none|
|DynamicPartitioningConfiguration|object|false|none|none|

<h2 id="tocS_RedshiftDestinationDescription">RedshiftDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdestinationdescription"></a>
<a id="schema_RedshiftDestinationDescription"></a>
<a id="tocSredshiftdestinationdescription"></a>
<a id="tocsredshiftdestinationdescription"></a>

```json
{
  "RoleARN": {},
  "ClusterJDBCURL": {},
  "CopyCommand": {
    "DataTableName": {},
    "DataTableColumns": {},
    "CopyOptions": {}
  },
  "Username": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "S3BackupMode": {},
  "S3BackupDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes a destination in Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|ClusterJDBCURL|object|true|none|none|
|CopyCommand|object|true|none|none|
|Username|object|true|none|none|
|RetryOptions|object|false|none|none|
|S3DestinationDescription|object|true|none|none|
|ProcessingConfiguration|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3BackupDescription|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_ElasticsearchDestinationDescription">ElasticsearchDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdestinationdescription"></a>
<a id="schema_ElasticsearchDestinationDescription"></a>
<a id="tocSelasticsearchdestinationdescription"></a>
<a id="tocselasticsearchdestinationdescription"></a>

```json
{
  "RoleARN": {},
  "DomainARN": {},
  "ClusterEndpoint": {},
  "IndexName": {},
  "TypeName": {},
  "IndexRotationPeriod": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "VpcConfigurationDescription": {
    "SubnetIds": {},
    "RoleARN": {},
    "SecurityGroupIds": {},
    "VpcId": {}
  }
}
```

The destination description in Amazon ES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|DomainARN|object|false|none|none|
|ClusterEndpoint|object|false|none|none|
|IndexName|object|false|none|none|
|TypeName|object|false|none|none|
|IndexRotationPeriod|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3DestinationDescription|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|VpcConfigurationDescription|object|false|none|none|

<h2 id="tocS_SplunkDestinationDescription">SplunkDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemasplunkdestinationdescription"></a>
<a id="schema_SplunkDestinationDescription"></a>
<a id="tocSsplunkdestinationdescription"></a>
<a id="tocssplunkdestinationdescription"></a>

```json
{
  "HECEndpoint": {},
  "HECEndpointType": {},
  "HECToken": {},
  "HECAcknowledgmentTimeoutInSeconds": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes a destination in Splunk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HECEndpoint|object|false|none|none|
|HECEndpointType|object|false|none|none|
|HECToken|object|false|none|none|
|HECAcknowledgmentTimeoutInSeconds|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3DestinationDescription|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_HttpEndpointDestinationDescription">HttpEndpointDestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointdestinationdescription"></a>
<a id="schema_HttpEndpointDestinationDescription"></a>
<a id="tocShttpendpointdestinationdescription"></a>
<a id="tocshttpendpointdestinationdescription"></a>

```json
{
  "EndpointConfiguration": {
    "Url": {},
    "Name": {}
  },
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "RequestConfiguration": {
    "ContentEncoding": {},
    "CommonAttributes": {}
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "RoleARN": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  }
}
```

Describes the HTTP endpoint destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointConfiguration|object|false|none|none|
|BufferingHints|object|false|none|none|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|RequestConfiguration|object|false|none|none|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|RoleARN|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3DestinationDescription|[S3DestinationDescription](#schemas3destinationdescription)|false|none|Describes a destination in Amazon S3.|

<h2 id="tocS_DestinationDescription">DestinationDescription</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdescription"></a>
<a id="schema_DestinationDescription"></a>
<a id="tocSdestinationdescription"></a>
<a id="tocsdestinationdescription"></a>

```json
{
  "DestinationId": {},
  "S3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ExtendedS3DestinationDescription": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "DataFormatConversionConfiguration": {
      "SchemaConfiguration": {
        "RoleARN": {},
        "CatalogId": {},
        "DatabaseName": {},
        "TableName": {},
        "Region": {},
        "VersionId": {}
      },
      "InputFormatConfiguration": {
        "Deserializer": {
          "OpenXJsonSerDe": {
            "ConvertDotsInJsonKeysToUnderscores": {},
            "CaseInsensitive": {},
            "ColumnToJsonKeyMappings": {
              "property1": "string",
              "property2": "string"
            }
          },
          "HiveJsonSerDe": {
            "TimestampFormats": {}
          }
        }
      },
      "OutputFormatConfiguration": {
        "Serializer": {
          "ParquetSerDe": {
            "BlockSizeBytes": {},
            "PageSizeBytes": {},
            "Compression": {},
            "EnableDictionaryCompression": {},
            "MaxPaddingBytes": {},
            "WriterVersion": {}
          },
          "OrcSerDe": {
            "StripeSizeBytes": {},
            "BlockSizeBytes": {},
            "RowIndexStride": {},
            "EnablePadding": {},
            "PaddingTolerance": {},
            "Compression": {},
            "BloomFilterColumns": {},
            "BloomFilterFalsePositiveProbability": {},
            "DictionaryKeyThreshold": {},
            "FormatVersion": {}
          }
        }
      },
      "Enabled": {}
    },
    "DynamicPartitioningConfiguration": {
      "RetryOptions": {
        "DurationInSeconds": {}
      },
      "Enabled": {}
    }
  },
  "RedshiftDestinationDescription": {
    "RoleARN": {},
    "ClusterJDBCURL": {},
    "CopyCommand": {
      "DataTableName": {},
      "DataTableColumns": {},
      "CopyOptions": {}
    },
    "Username": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "S3BackupMode": {},
    "S3BackupDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ElasticsearchDestinationDescription": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfigurationDescription": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {},
      "VpcId": {}
    }
  },
  "AmazonopensearchserviceDestinationDescription": {
    "RoleARN": {},
    "DomainARN": {},
    "ClusterEndpoint": {},
    "IndexName": {},
    "TypeName": {},
    "IndexRotationPeriod": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfigurationDescription": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {},
      "VpcId": {}
    }
  },
  "SplunkDestinationDescription": {
    "HECEndpoint": {},
    "HECEndpointType": {},
    "HECToken": {},
    "HECAcknowledgmentTimeoutInSeconds": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "HttpEndpointDestinationDescription": {
    "EndpointConfiguration": {
      "Url": {},
      "Name": {}
    },
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "RequestConfiguration": {
      "ContentEncoding": {},
      "CommonAttributes": {}
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "RoleARN": {},
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    }
  },
  "AmazonOpenSearchServerlessDestinationDescription": {
    "RoleARN": {},
    "CollectionEndpoint": {},
    "IndexName": {},
    "BufferingHints": {
      "IntervalInSeconds": {},
      "SizeInMBs": {}
    },
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "S3BackupMode": {},
    "S3DestinationDescription": {
      "RoleARN": {},
      "BucketARN": {},
      "Prefix": {},
      "ErrorOutputPrefix": {},
      "BufferingHints": {
        "SizeInMBs": {},
        "IntervalInSeconds": {}
      },
      "CompressionFormat": {},
      "EncryptionConfiguration": {
        "NoEncryptionConfig": {},
        "KMSEncryptionConfig": {
          "AWSKMSKeyARN": {}
        }
      },
      "CloudWatchLoggingOptions": {
        "Enabled": {},
        "LogGroupName": {},
        "LogStreamName": {}
      }
    },
    "ProcessingConfiguration": {
      "Enabled": {},
      "Processors": {}
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    },
    "VpcConfigurationDescription": {
      "SubnetIds": {},
      "RoleARN": {},
      "SecurityGroupIds": {},
      "VpcId": {}
    }
  }
}
```

Describes the destination for a delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DestinationId|object|true|none|none|
|S3DestinationDescription|object|false|none|none|
|ExtendedS3DestinationDescription|object|false|none|none|
|RedshiftDestinationDescription|object|false|none|none|
|ElasticsearchDestinationDescription|object|false|none|none|
|AmazonopensearchserviceDestinationDescription|object|false|none|none|
|SplunkDestinationDescription|object|false|none|none|
|HttpEndpointDestinationDescription|object|false|none|none|
|AmazonOpenSearchServerlessDestinationDescription|object|false|none|none|

<h2 id="tocS_RetryOptions">RetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaretryoptions"></a>
<a id="schema_RetryOptions"></a>
<a id="tocSretryoptions"></a>
<a id="tocsretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

 The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_DynamicPartitioningConfiguration">DynamicPartitioningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadynamicpartitioningconfiguration"></a>
<a id="schema_DynamicPartitioningConfiguration"></a>
<a id="tocSdynamicpartitioningconfiguration"></a>
<a id="tocsdynamicpartitioningconfiguration"></a>

```json
{
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "Enabled": {}
}
```

The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetryOptions|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_ElasticsearchBufferingIntervalInSeconds">ElasticsearchBufferingIntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchbufferingintervalinseconds"></a>
<a id="schema_ElasticsearchBufferingIntervalInSeconds"></a>
<a id="tocSelasticsearchbufferingintervalinseconds"></a>
<a id="tocselasticsearchbufferingintervalinseconds"></a>

```json
60
```

<h2 id="tocS_ElasticsearchBufferingSizeInMBs">ElasticsearchBufferingSizeInMBs</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchbufferingsizeinmbs"></a>
<a id="schema_ElasticsearchBufferingSizeInMBs"></a>
<a id="tocSelasticsearchbufferingsizeinmbs"></a>
<a id="tocselasticsearchbufferingsizeinmbs"></a>

```json
1
```

<h2 id="tocS_ElasticsearchBufferingHints">ElasticsearchBufferingHints</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchbufferinghints"></a>
<a id="schema_ElasticsearchBufferingHints"></a>
<a id="tocSelasticsearchbufferinghints"></a>
<a id="tocselasticsearchbufferinghints"></a>

```json
{
  "IntervalInSeconds": {},
  "SizeInMBs": {}
}
```

Describes the buffering to perform before delivering data to the Amazon ES destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntervalInSeconds|object|false|none|none|
|SizeInMBs|object|false|none|none|

<h2 id="tocS_ElasticsearchClusterEndpoint">ElasticsearchClusterEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchclusterendpoint"></a>
<a id="schema_ElasticsearchClusterEndpoint"></a>
<a id="tocSelasticsearchclusterendpoint"></a>
<a id="tocselasticsearchclusterendpoint"></a>

```json
"string"
```

<h2 id="tocS_ElasticsearchDomainARN">ElasticsearchDomainARN</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdomainarn"></a>
<a id="schema_ElasticsearchDomainARN"></a>
<a id="tocSelasticsearchdomainarn"></a>
<a id="tocselasticsearchdomainarn"></a>

```json
"string"
```

<h2 id="tocS_ElasticsearchIndexName">ElasticsearchIndexName</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchindexname"></a>
<a id="schema_ElasticsearchIndexName"></a>
<a id="tocSelasticsearchindexname"></a>
<a id="tocselasticsearchindexname"></a>

```json
"string"
```

<h2 id="tocS_ElasticsearchTypeName">ElasticsearchTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchtypename"></a>
<a id="schema_ElasticsearchTypeName"></a>
<a id="tocSelasticsearchtypename"></a>
<a id="tocselasticsearchtypename"></a>

```json
"string"
```

<h2 id="tocS_ElasticsearchIndexRotationPeriod">ElasticsearchIndexRotationPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchindexrotationperiod"></a>
<a id="schema_ElasticsearchIndexRotationPeriod"></a>
<a id="tocSelasticsearchindexrotationperiod"></a>
<a id="tocselasticsearchindexrotationperiod"></a>

```json
"NoRotation"
```

<h2 id="tocS_ElasticsearchRetryOptions">ElasticsearchRetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchretryoptions"></a>
<a id="schema_ElasticsearchRetryOptions"></a>
<a id="tocSelasticsearchretryoptions"></a>
<a id="tocselasticsearchretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_ElasticsearchS3BackupMode">ElasticsearchS3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchs3backupmode"></a>
<a id="schema_ElasticsearchS3BackupMode"></a>
<a id="tocSelasticsearchs3backupmode"></a>
<a id="tocselasticsearchs3backupmode"></a>

```json
"FailedDocumentsOnly"
```

<h2 id="tocS_ElasticsearchDestinationUpdate">ElasticsearchDestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdestinationupdate"></a>
<a id="schema_ElasticsearchDestinationUpdate"></a>
<a id="tocSelasticsearchdestinationupdate"></a>
<a id="tocselasticsearchdestinationupdate"></a>

```json
{
  "RoleARN": {},
  "DomainARN": {},
  "ClusterEndpoint": {},
  "IndexName": {},
  "TypeName": {},
  "IndexRotationPeriod": {},
  "BufferingHints": {
    "IntervalInSeconds": {},
    "SizeInMBs": {}
  },
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3Update": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes an update for a destination in Amazon ES.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|DomainARN|object|false|none|none|
|ClusterEndpoint|object|false|none|none|
|IndexName|object|false|none|none|
|TypeName|object|false|none|none|
|IndexRotationPeriod|object|false|none|none|
|BufferingHints|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3Update|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_ElasticsearchRetryDurationInSeconds">ElasticsearchRetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchretrydurationinseconds"></a>
<a id="schema_ElasticsearchRetryDurationInSeconds"></a>
<a id="tocSelasticsearchretrydurationinseconds"></a>
<a id="tocselasticsearchretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_NoEncryptionConfig">NoEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemanoencryptionconfig"></a>
<a id="schema_NoEncryptionConfig"></a>
<a id="tocSnoencryptionconfig"></a>
<a id="tocsnoencryptionconfig"></a>

```json
"NoEncryption"
```

<h2 id="tocS_KMSEncryptionConfig">KMSEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemakmsencryptionconfig"></a>
<a id="schema_KMSEncryptionConfig"></a>
<a id="tocSkmsencryptionconfig"></a>
<a id="tocskmsencryptionconfig"></a>

```json
{
  "AWSKMSKeyARN": {}
}
```

Describes an encryption key for a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AWSKMSKeyARN|object|true|none|none|

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "NoEncryptionConfig": {},
  "KMSEncryptionConfig": {
    "AWSKMSKeyARN": {}
  }
}
```

Describes the encryption for a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoEncryptionConfig|object|false|none|none|
|KMSEncryptionConfig|object|false|none|none|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_ErrorOutputPrefix">ErrorOutputPrefix</h2>
<!-- backwards compatibility -->
<a id="schemaerroroutputprefix"></a>
<a id="schema_ErrorOutputPrefix"></a>
<a id="tocSerroroutputprefix"></a>
<a id="tocserroroutputprefix"></a>

```json
"string"
```

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
"string"
```

<h2 id="tocS_S3BackupMode">S3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemas3backupmode"></a>
<a id="schema_S3BackupMode"></a>
<a id="tocSs3backupmode"></a>
<a id="tocss3backupmode"></a>

```json
"Disabled"
```

<h2 id="tocS_ExtendedS3DestinationUpdate">ExtendedS3DestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaextendeds3destinationupdate"></a>
<a id="schema_ExtendedS3DestinationUpdate"></a>
<a id="tocSextendeds3destinationupdate"></a>
<a id="tocsextendeds3destinationupdate"></a>

```json
{
  "RoleARN": {},
  "BucketARN": {},
  "Prefix": {},
  "ErrorOutputPrefix": {},
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CompressionFormat": {},
  "EncryptionConfiguration": {
    "NoEncryptionConfig": {},
    "KMSEncryptionConfig": {
      "AWSKMSKeyARN": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "S3BackupMode": {},
  "S3BackupUpdate": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "DataFormatConversionConfiguration": {
    "SchemaConfiguration": {
      "RoleARN": {},
      "CatalogId": {},
      "DatabaseName": {},
      "TableName": {},
      "Region": {},
      "VersionId": {}
    },
    "InputFormatConfiguration": {
      "Deserializer": {
        "OpenXJsonSerDe": {
          "ConvertDotsInJsonKeysToUnderscores": {},
          "CaseInsensitive": {},
          "ColumnToJsonKeyMappings": {
            "property1": "string",
            "property2": "string"
          }
        },
        "HiveJsonSerDe": {
          "TimestampFormats": {}
        }
      }
    },
    "OutputFormatConfiguration": {
      "Serializer": {
        "ParquetSerDe": {
          "BlockSizeBytes": {},
          "PageSizeBytes": {},
          "Compression": {},
          "EnableDictionaryCompression": {},
          "MaxPaddingBytes": {},
          "WriterVersion": {}
        },
        "OrcSerDe": {
          "StripeSizeBytes": {},
          "BlockSizeBytes": {},
          "RowIndexStride": {},
          "EnablePadding": {},
          "PaddingTolerance": {},
          "Compression": {},
          "BloomFilterColumns": {},
          "BloomFilterFalsePositiveProbability": {},
          "DictionaryKeyThreshold": {},
          "FormatVersion": {}
        }
      }
    },
    "Enabled": {}
  },
  "DynamicPartitioningConfiguration": {
    "RetryOptions": {
      "DurationInSeconds": {}
    },
    "Enabled": {}
  }
}
```

Describes an update for a destination in Amazon S3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|BucketARN|object|false|none|none|
|Prefix|object|false|none|none|
|ErrorOutputPrefix|object|false|none|none|
|BufferingHints|object|false|none|none|
|CompressionFormat|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3BackupUpdate|object|false|none|none|
|DataFormatConversionConfiguration|object|false|none|none|
|DynamicPartitioningConfiguration|object|false|none|none|

<h2 id="tocS_HECAcknowledgmentTimeoutInSeconds">HECAcknowledgmentTimeoutInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemahecacknowledgmenttimeoutinseconds"></a>
<a id="schema_HECAcknowledgmentTimeoutInSeconds"></a>
<a id="tocShecacknowledgmenttimeoutinseconds"></a>
<a id="tocshecacknowledgmenttimeoutinseconds"></a>

```json
180
```

<h2 id="tocS_HECEndpoint">HECEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemahecendpoint"></a>
<a id="schema_HECEndpoint"></a>
<a id="tocShecendpoint"></a>
<a id="tocshecendpoint"></a>

```json
"string"
```

<h2 id="tocS_HECEndpointType">HECEndpointType</h2>
<!-- backwards compatibility -->
<a id="schemahecendpointtype"></a>
<a id="schema_HECEndpointType"></a>
<a id="tocShecendpointtype"></a>
<a id="tocshecendpointtype"></a>

```json
"Raw"
```

<h2 id="tocS_HECToken">HECToken</h2>
<!-- backwards compatibility -->
<a id="schemahectoken"></a>
<a id="schema_HECToken"></a>
<a id="tocShectoken"></a>
<a id="tocshectoken"></a>

```json
"string"
```

<h2 id="tocS_ListOfNonEmptyStrings">ListOfNonEmptyStrings</h2>
<!-- backwards compatibility -->
<a id="schemalistofnonemptystrings"></a>
<a id="schema_ListOfNonEmptyStrings"></a>
<a id="tocSlistofnonemptystrings"></a>
<a id="tocslistofnonemptystrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HttpEndpointAccessKey">HttpEndpointAccessKey</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointaccesskey"></a>
<a id="schema_HttpEndpointAccessKey"></a>
<a id="tocShttpendpointaccesskey"></a>
<a id="tocshttpendpointaccesskey"></a>

```json
"password"
```

<h2 id="tocS_HttpEndpointAttributeName">HttpEndpointAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointattributename"></a>
<a id="schema_HttpEndpointAttributeName"></a>
<a id="tocShttpendpointattributename"></a>
<a id="tocshttpendpointattributename"></a>

```json
"password"
```

<h2 id="tocS_HttpEndpointAttributeValue">HttpEndpointAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointattributevalue"></a>
<a id="schema_HttpEndpointAttributeValue"></a>
<a id="tocShttpendpointattributevalue"></a>
<a id="tocshttpendpointattributevalue"></a>

```json
"password"
```

<h2 id="tocS_HttpEndpointBufferingSizeInMBs">HttpEndpointBufferingSizeInMBs</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointbufferingsizeinmbs"></a>
<a id="schema_HttpEndpointBufferingSizeInMBs"></a>
<a id="tocShttpendpointbufferingsizeinmbs"></a>
<a id="tocshttpendpointbufferingsizeinmbs"></a>

```json
1
```

<h2 id="tocS_HttpEndpointBufferingIntervalInSeconds">HttpEndpointBufferingIntervalInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointbufferingintervalinseconds"></a>
<a id="schema_HttpEndpointBufferingIntervalInSeconds"></a>
<a id="tocShttpendpointbufferingintervalinseconds"></a>
<a id="tocshttpendpointbufferingintervalinseconds"></a>

```json
60
```

<h2 id="tocS_HttpEndpointBufferingHints">HttpEndpointBufferingHints</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointbufferinghints"></a>
<a id="schema_HttpEndpointBufferingHints"></a>
<a id="tocShttpendpointbufferinghints"></a>
<a id="tocshttpendpointbufferinghints"></a>

```json
{
  "SizeInMBs": {},
  "IntervalInSeconds": {}
}
```

Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeInMBs|object|false|none|none|
|IntervalInSeconds|object|false|none|none|

<h2 id="tocS_HttpEndpointCommonAttribute">HttpEndpointCommonAttribute</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointcommonattribute"></a>
<a id="schema_HttpEndpointCommonAttribute"></a>
<a id="tocShttpendpointcommonattribute"></a>
<a id="tocshttpendpointcommonattribute"></a>

```json
{
  "AttributeName": {},
  "AttributeValue": {}
}
```

Describes the metadata that's delivered to the specified HTTP endpoint destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttributeName|object|true|none|none|
|AttributeValue|object|true|none|none|

<h2 id="tocS_HttpEndpointCommonAttributesList">HttpEndpointCommonAttributesList</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointcommonattributeslist"></a>
<a id="schema_HttpEndpointCommonAttributesList"></a>
<a id="tocShttpendpointcommonattributeslist"></a>
<a id="tocshttpendpointcommonattributeslist"></a>

```json
[
  {
    "AttributeName": {},
    "AttributeValue": {}
  }
]
```

<h2 id="tocS_HttpEndpointUrl">HttpEndpointUrl</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointurl"></a>
<a id="schema_HttpEndpointUrl"></a>
<a id="tocShttpendpointurl"></a>
<a id="tocshttpendpointurl"></a>

```json
"password"
```

<h2 id="tocS_HttpEndpointName">HttpEndpointName</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointname"></a>
<a id="schema_HttpEndpointName"></a>
<a id="tocShttpendpointname"></a>
<a id="tocshttpendpointname"></a>

```json
"string"
```

<h2 id="tocS_HttpEndpointConfiguration">HttpEndpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointconfiguration"></a>
<a id="schema_HttpEndpointConfiguration"></a>
<a id="tocShttpendpointconfiguration"></a>
<a id="tocshttpendpointconfiguration"></a>

```json
{
  "Url": {},
  "Name": {},
  "AccessKey": {}
}
```

Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|true|none|none|
|Name|object|false|none|none|
|AccessKey|object|false|none|none|

<h2 id="tocS_HttpEndpointDescription">HttpEndpointDescription</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointdescription"></a>
<a id="schema_HttpEndpointDescription"></a>
<a id="tocShttpendpointdescription"></a>
<a id="tocshttpendpointdescription"></a>

```json
{
  "Url": {},
  "Name": {}
}
```

Describes the HTTP endpoint selected as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Url|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_HttpEndpointRequestConfiguration">HttpEndpointRequestConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointrequestconfiguration"></a>
<a id="schema_HttpEndpointRequestConfiguration"></a>
<a id="tocShttpendpointrequestconfiguration"></a>
<a id="tocshttpendpointrequestconfiguration"></a>

```json
{
  "ContentEncoding": {},
  "CommonAttributes": {}
}
```

The configuration of the HTTP endpoint request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContentEncoding|object|false|none|none|
|CommonAttributes|object|false|none|none|

<h2 id="tocS_HttpEndpointRetryOptions">HttpEndpointRetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointretryoptions"></a>
<a id="schema_HttpEndpointRetryOptions"></a>
<a id="tocShttpendpointretryoptions"></a>
<a id="tocshttpendpointretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_HttpEndpointS3BackupMode">HttpEndpointS3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpoints3backupmode"></a>
<a id="schema_HttpEndpointS3BackupMode"></a>
<a id="tocShttpendpoints3backupmode"></a>
<a id="tocshttpendpoints3backupmode"></a>

```json
"FailedDataOnly"
```

<h2 id="tocS_HttpEndpointDestinationUpdate">HttpEndpointDestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointdestinationupdate"></a>
<a id="schema_HttpEndpointDestinationUpdate"></a>
<a id="tocShttpendpointdestinationupdate"></a>
<a id="tocshttpendpointdestinationupdate"></a>

```json
{
  "EndpointConfiguration": {
    "Url": {},
    "Name": {},
    "AccessKey": {}
  },
  "BufferingHints": {
    "SizeInMBs": {},
    "IntervalInSeconds": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  },
  "RequestConfiguration": {
    "ContentEncoding": {},
    "CommonAttributes": {}
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "RoleARN": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Update": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  }
}
```

Updates the specified HTTP endpoint destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndpointConfiguration|object|false|none|none|
|BufferingHints|object|false|none|none|
|CloudWatchLoggingOptions|[CloudWatchLoggingOptions](#schemacloudwatchloggingoptions)|false|none|Describes the Amazon CloudWatch logging options for your delivery stream.|
|RequestConfiguration|object|false|none|none|
|ProcessingConfiguration|[ProcessingConfiguration](#schemaprocessingconfiguration)|false|none|Describes a data processing configuration.|
|RoleARN|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Update|[S3DestinationUpdate](#schemas3destinationupdate)|false|none|Describes an update for a destination in Amazon S3.|

<h2 id="tocS_HttpEndpointRetryDurationInSeconds">HttpEndpointRetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemahttpendpointretrydurationinseconds"></a>
<a id="schema_HttpEndpointRetryDurationInSeconds"></a>
<a id="tocShttpendpointretrydurationinseconds"></a>
<a id="tocshttpendpointretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_KinesisStreamARN">KinesisStreamARN</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamarn"></a>
<a id="schema_KinesisStreamARN"></a>
<a id="tocSkinesisstreamarn"></a>
<a id="tocskinesisstreamarn"></a>

```json
"string"
```

<h2 id="tocS_KinesisStreamSourceDescription">KinesisStreamSourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamsourcedescription"></a>
<a id="schema_KinesisStreamSourceDescription"></a>
<a id="tocSkinesisstreamsourcedescription"></a>
<a id="tocskinesisstreamsourcedescription"></a>

```json
{
  "KinesisStreamARN": {},
  "RoleARN": {},
  "DeliveryStartTimestamp": {}
}
```

Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KinesisStreamARN|object|false|none|none|
|RoleARN|object|false|none|none|
|DeliveryStartTimestamp|object|false|none|none|

<h2 id="tocS_ListDeliveryStreamsInputLimit">ListDeliveryStreamsInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalistdeliverystreamsinputlimit"></a>
<a id="schema_ListDeliveryStreamsInputLimit"></a>
<a id="tocSlistdeliverystreamsinputlimit"></a>
<a id="tocslistdeliverystreamsinputlimit"></a>

```json
1
```

<h2 id="tocS_NonEmptyStringWithoutWhitespace">NonEmptyStringWithoutWhitespace</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystringwithoutwhitespace"></a>
<a id="schema_NonEmptyStringWithoutWhitespace"></a>
<a id="tocSnonemptystringwithoutwhitespace"></a>
<a id="tocsnonemptystringwithoutwhitespace"></a>

```json
"string"
```

<h2 id="tocS_ListOfNonEmptyStringsWithoutWhitespace">ListOfNonEmptyStringsWithoutWhitespace</h2>
<!-- backwards compatibility -->
<a id="schemalistofnonemptystringswithoutwhitespace"></a>
<a id="schema_ListOfNonEmptyStringsWithoutWhitespace"></a>
<a id="tocSlistofnonemptystringswithoutwhitespace"></a>
<a id="tocslistofnonemptystringswithoutwhitespace"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForDeliveryStreamInputLimit">ListTagsForDeliveryStreamInputLimit</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsfordeliverystreaminputlimit"></a>
<a id="schema_ListTagsForDeliveryStreamInputLimit"></a>
<a id="tocSlisttagsfordeliverystreaminputlimit"></a>
<a id="tocslisttagsfordeliverystreaminputlimit"></a>

```json
1
```

<h2 id="tocS_ListTagsForDeliveryStreamOutputTagList">ListTagsForDeliveryStreamOutputTagList</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsfordeliverystreamoutputtaglist"></a>
<a id="schema_ListTagsForDeliveryStreamOutputTagList"></a>
<a id="tocSlisttagsfordeliverystreamoutputtaglist"></a>
<a id="tocslisttagsfordeliverystreamoutputtaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Metadata that you can assign to a delivery stream, consisting of a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_NonNegativeIntegerObject">NonNegativeIntegerObject</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativeintegerobject"></a>
<a id="schema_NonNegativeIntegerObject"></a>
<a id="tocSnonnegativeintegerobject"></a>
<a id="tocsnonnegativeintegerobject"></a>

```json
0
```

<h2 id="tocS_OrcCompression">OrcCompression</h2>
<!-- backwards compatibility -->
<a id="schemaorccompression"></a>
<a id="schema_OrcCompression"></a>
<a id="tocSorccompression"></a>
<a id="tocsorccompression"></a>

```json
"NONE"
```

<h2 id="tocS_OrcFormatVersion">OrcFormatVersion</h2>
<!-- backwards compatibility -->
<a id="schemaorcformatversion"></a>
<a id="schema_OrcFormatVersion"></a>
<a id="tocSorcformatversion"></a>
<a id="tocsorcformatversion"></a>

```json
"V0_11"
```

<h2 id="tocS_OrcRowIndexStride">OrcRowIndexStride</h2>
<!-- backwards compatibility -->
<a id="schemaorcrowindexstride"></a>
<a id="schema_OrcRowIndexStride"></a>
<a id="tocSorcrowindexstride"></a>
<a id="tocsorcrowindexstride"></a>

```json
1000
```

<h2 id="tocS_OrcStripeSizeBytes">OrcStripeSizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemaorcstripesizebytes"></a>
<a id="schema_OrcStripeSizeBytes"></a>
<a id="tocSorcstripesizebytes"></a>
<a id="tocsorcstripesizebytes"></a>

```json
8388608
```

<h2 id="tocS_Proportion">Proportion</h2>
<!-- backwards compatibility -->
<a id="schemaproportion"></a>
<a id="schema_Proportion"></a>
<a id="tocSproportion"></a>
<a id="tocsproportion"></a>

```json
0
```

<h2 id="tocS_OrcSerDe">OrcSerDe</h2>
<!-- backwards compatibility -->
<a id="schemaorcserde"></a>
<a id="schema_OrcSerDe"></a>
<a id="tocSorcserde"></a>
<a id="tocsorcserde"></a>

```json
{
  "StripeSizeBytes": {},
  "BlockSizeBytes": {},
  "RowIndexStride": {},
  "EnablePadding": {},
  "PaddingTolerance": {},
  "Compression": {},
  "BloomFilterColumns": {},
  "BloomFilterFalsePositiveProbability": {},
  "DictionaryKeyThreshold": {},
  "FormatVersion": {}
}
```

A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StripeSizeBytes|object|false|none|none|
|BlockSizeBytes|object|false|none|none|
|RowIndexStride|object|false|none|none|
|EnablePadding|object|false|none|none|
|PaddingTolerance|object|false|none|none|
|Compression|object|false|none|none|
|BloomFilterColumns|object|false|none|none|
|BloomFilterFalsePositiveProbability|object|false|none|none|
|DictionaryKeyThreshold|object|false|none|none|
|FormatVersion|object|false|none|none|

<h2 id="tocS_Serializer">Serializer</h2>
<!-- backwards compatibility -->
<a id="schemaserializer"></a>
<a id="schema_Serializer"></a>
<a id="tocSserializer"></a>
<a id="tocsserializer"></a>

```json
{
  "ParquetSerDe": {
    "BlockSizeBytes": {},
    "PageSizeBytes": {},
    "Compression": {},
    "EnableDictionaryCompression": {},
    "MaxPaddingBytes": {},
    "WriterVersion": {}
  },
  "OrcSerDe": {
    "StripeSizeBytes": {},
    "BlockSizeBytes": {},
    "RowIndexStride": {},
    "EnablePadding": {},
    "PaddingTolerance": {},
    "Compression": {},
    "BloomFilterColumns": {},
    "BloomFilterFalsePositiveProbability": {},
    "DictionaryKeyThreshold": {},
    "FormatVersion": {}
  }
}
```

The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParquetSerDe|object|false|none|none|
|OrcSerDe|object|false|none|none|

<h2 id="tocS_ParquetCompression">ParquetCompression</h2>
<!-- backwards compatibility -->
<a id="schemaparquetcompression"></a>
<a id="schema_ParquetCompression"></a>
<a id="tocSparquetcompression"></a>
<a id="tocsparquetcompression"></a>

```json
"UNCOMPRESSED"
```

<h2 id="tocS_ParquetPageSizeBytes">ParquetPageSizeBytes</h2>
<!-- backwards compatibility -->
<a id="schemaparquetpagesizebytes"></a>
<a id="schema_ParquetPageSizeBytes"></a>
<a id="tocSparquetpagesizebytes"></a>
<a id="tocsparquetpagesizebytes"></a>

```json
65536
```

<h2 id="tocS_ParquetWriterVersion">ParquetWriterVersion</h2>
<!-- backwards compatibility -->
<a id="schemaparquetwriterversion"></a>
<a id="schema_ParquetWriterVersion"></a>
<a id="tocSparquetwriterversion"></a>
<a id="tocsparquetwriterversion"></a>

```json
"V1"
```

<h2 id="tocS_ParquetSerDe">ParquetSerDe</h2>
<!-- backwards compatibility -->
<a id="schemaparquetserde"></a>
<a id="schema_ParquetSerDe"></a>
<a id="tocSparquetserde"></a>
<a id="tocsparquetserde"></a>

```json
{
  "BlockSizeBytes": {},
  "PageSizeBytes": {},
  "Compression": {},
  "EnableDictionaryCompression": {},
  "MaxPaddingBytes": {},
  "WriterVersion": {}
}
```

A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockSizeBytes|object|false|none|none|
|PageSizeBytes|object|false|none|none|
|Compression|object|false|none|none|
|EnableDictionaryCompression|object|false|none|none|
|MaxPaddingBytes|object|false|none|none|
|WriterVersion|object|false|none|none|

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

<h2 id="tocS_ProcessorList">ProcessorList</h2>
<!-- backwards compatibility -->
<a id="schemaprocessorlist"></a>
<a id="schema_ProcessorList"></a>
<a id="tocSprocessorlist"></a>
<a id="tocsprocessorlist"></a>

```json
[
  {
    "Type": {},
    "Parameters": {}
  }
]
```

<h2 id="tocS_ProcessorType">ProcessorType</h2>
<!-- backwards compatibility -->
<a id="schemaprocessortype"></a>
<a id="schema_ProcessorType"></a>
<a id="tocSprocessortype"></a>
<a id="tocsprocessortype"></a>

```json
"RecordDeAggregation"
```

<h2 id="tocS_ProcessorParameterList">ProcessorParameterList</h2>
<!-- backwards compatibility -->
<a id="schemaprocessorparameterlist"></a>
<a id="schema_ProcessorParameterList"></a>
<a id="tocSprocessorparameterlist"></a>
<a id="tocsprocessorparameterlist"></a>

```json
[
  {
    "ParameterName": {},
    "ParameterValue": {}
  }
]
```

<h2 id="tocS_Processor">Processor</h2>
<!-- backwards compatibility -->
<a id="schemaprocessor"></a>
<a id="schema_Processor"></a>
<a id="tocSprocessor"></a>
<a id="tocsprocessor"></a>

```json
{
  "Type": {},
  "Parameters": {}
}
```

Describes a data processor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_ProcessorParameterName">ProcessorParameterName</h2>
<!-- backwards compatibility -->
<a id="schemaprocessorparametername"></a>
<a id="schema_ProcessorParameterName"></a>
<a id="tocSprocessorparametername"></a>
<a id="tocsprocessorparametername"></a>

```json
"LambdaArn"
```

<h2 id="tocS_ProcessorParameterValue">ProcessorParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaprocessorparametervalue"></a>
<a id="schema_ProcessorParameterValue"></a>
<a id="tocSprocessorparametervalue"></a>
<a id="tocsprocessorparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ProcessorParameter">ProcessorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaprocessorparameter"></a>
<a id="schema_ProcessorParameter"></a>
<a id="tocSprocessorparameter"></a>
<a id="tocsprocessorparameter"></a>

```json
{
  "ParameterName": {},
  "ParameterValue": {}
}
```

Describes the processor parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterName|object|true|none|none|
|ParameterValue|object|true|none|none|

<h2 id="tocS_PutRecordBatchRequestEntryList">PutRecordBatchRequestEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordbatchrequestentrylist"></a>
<a id="schema_PutRecordBatchRequestEntryList"></a>
<a id="tocSputrecordbatchrequestentrylist"></a>
<a id="tocsputrecordbatchrequestentrylist"></a>

```json
[
  {
    "Data": {}
  }
]
```

<h2 id="tocS_PutRecordBatchResponseEntryList">PutRecordBatchResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordbatchresponseentrylist"></a>
<a id="schema_PutRecordBatchResponseEntryList"></a>
<a id="tocSputrecordbatchresponseentrylist"></a>
<a id="tocsputrecordbatchresponseentrylist"></a>

```json
[
  {
    "RecordId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_Record">Record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_Record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "Data": {}
}
```

The unit of data in a delivery stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|

<h2 id="tocS_PutResponseRecordId">PutResponseRecordId</h2>
<!-- backwards compatibility -->
<a id="schemaputresponserecordid"></a>
<a id="schema_PutResponseRecordId"></a>
<a id="tocSputresponserecordid"></a>
<a id="tocsputresponserecordid"></a>

```json
"string"
```

<h2 id="tocS_PutRecordBatchResponseEntry">PutRecordBatchResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemaputrecordbatchresponseentry"></a>
<a id="schema_PutRecordBatchResponseEntry"></a>
<a id="tocSputrecordbatchresponseentry"></a>
<a id="tocsputrecordbatchresponseentry"></a>

```json
{
  "RecordId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Contains the result for an individual record from a <a>PutRecordBatch</a> request. If the record is successfully added to your delivery stream, it receives a record ID. If the record fails to be added to your delivery stream, the result includes an error code and an error message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"password"
```

<h2 id="tocS_RedshiftRetryOptions">RedshiftRetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftretryoptions"></a>
<a id="schema_RedshiftRetryOptions"></a>
<a id="tocSredshiftretryoptions"></a>
<a id="tocsredshiftretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_RedshiftS3BackupMode">RedshiftS3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemaredshifts3backupmode"></a>
<a id="schema_RedshiftS3BackupMode"></a>
<a id="tocSredshifts3backupmode"></a>
<a id="tocsredshifts3backupmode"></a>

```json
"Disabled"
```

<h2 id="tocS_RedshiftDestinationUpdate">RedshiftDestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdestinationupdate"></a>
<a id="schema_RedshiftDestinationUpdate"></a>
<a id="tocSredshiftdestinationupdate"></a>
<a id="tocsredshiftdestinationupdate"></a>

```json
{
  "RoleARN": {},
  "ClusterJDBCURL": {},
  "CopyCommand": {
    "DataTableName": {},
    "DataTableColumns": {},
    "CopyOptions": {}
  },
  "Username": {},
  "Password": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3Update": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "S3BackupMode": {},
  "S3BackupUpdate": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes an update for a destination in Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|false|none|none|
|ClusterJDBCURL|object|false|none|none|
|CopyCommand|object|false|none|none|
|Username|object|false|none|none|
|Password|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3Update|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3BackupUpdate|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_RedshiftRetryDurationInSeconds">RedshiftRetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftretrydurationinseconds"></a>
<a id="schema_RedshiftRetryDurationInSeconds"></a>
<a id="tocSredshiftretrydurationinseconds"></a>
<a id="tocsredshiftretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_RetryDurationInSeconds">RetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemaretrydurationinseconds"></a>
<a id="schema_RetryDurationInSeconds"></a>
<a id="tocSretrydurationinseconds"></a>
<a id="tocsretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_SecurityGroupIdList">SecurityGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupidlist"></a>
<a id="schema_SecurityGroupIdList"></a>
<a id="tocSsecuritygroupidlist"></a>
<a id="tocssecuritygroupidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SplunkRetryOptions">SplunkRetryOptions</h2>
<!-- backwards compatibility -->
<a id="schemasplunkretryoptions"></a>
<a id="schema_SplunkRetryOptions"></a>
<a id="tocSsplunkretryoptions"></a>
<a id="tocssplunkretryoptions"></a>

```json
{
  "DurationInSeconds": {}
}
```

Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DurationInSeconds|object|false|none|none|

<h2 id="tocS_SplunkS3BackupMode">SplunkS3BackupMode</h2>
<!-- backwards compatibility -->
<a id="schemasplunks3backupmode"></a>
<a id="schema_SplunkS3BackupMode"></a>
<a id="tocSsplunks3backupmode"></a>
<a id="tocssplunks3backupmode"></a>

```json
"FailedEventsOnly"
```

<h2 id="tocS_SplunkDestinationUpdate">SplunkDestinationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasplunkdestinationupdate"></a>
<a id="schema_SplunkDestinationUpdate"></a>
<a id="tocSsplunkdestinationupdate"></a>
<a id="tocssplunkdestinationupdate"></a>

```json
{
  "HECEndpoint": {},
  "HECEndpointType": {},
  "HECToken": {},
  "HECAcknowledgmentTimeoutInSeconds": {},
  "RetryOptions": {
    "DurationInSeconds": {}
  },
  "S3BackupMode": {},
  "S3Update": {
    "RoleARN": {},
    "BucketARN": {},
    "Prefix": {},
    "ErrorOutputPrefix": {},
    "BufferingHints": {
      "SizeInMBs": {},
      "IntervalInSeconds": {}
    },
    "CompressionFormat": {},
    "EncryptionConfiguration": {
      "NoEncryptionConfig": {},
      "KMSEncryptionConfig": {
        "AWSKMSKeyARN": {}
      }
    },
    "CloudWatchLoggingOptions": {
      "Enabled": {},
      "LogGroupName": {},
      "LogStreamName": {}
    }
  },
  "ProcessingConfiguration": {
    "Enabled": {},
    "Processors": {}
  },
  "CloudWatchLoggingOptions": {
    "Enabled": {},
    "LogGroupName": {},
    "LogStreamName": {}
  }
}
```

Describes an update for a destination in Splunk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HECEndpoint|object|false|none|none|
|HECEndpointType|object|false|none|none|
|HECToken|object|false|none|none|
|HECAcknowledgmentTimeoutInSeconds|object|false|none|none|
|RetryOptions|object|false|none|none|
|S3BackupMode|object|false|none|none|
|S3Update|object|false|none|none|
|ProcessingConfiguration|object|false|none|none|
|CloudWatchLoggingOptions|object|false|none|none|

<h2 id="tocS_SplunkRetryDurationInSeconds">SplunkRetryDurationInSeconds</h2>
<!-- backwards compatibility -->
<a id="schemasplunkretrydurationinseconds"></a>
<a id="schema_SplunkRetryDurationInSeconds"></a>
<a id="tocSsplunkretrydurationinseconds"></a>
<a id="tocssplunkretrydurationinseconds"></a>

```json
0
```

<h2 id="tocS_SubnetIdList">SubnetIdList</h2>
<!-- backwards compatibility -->
<a id="schemasubnetidlist"></a>
<a id="schema_SubnetIdList"></a>
<a id="tocSsubnetidlist"></a>
<a id="tocssubnetidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```
