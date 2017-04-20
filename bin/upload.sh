#!/bin/sh

FIXED_BRANCH=$(echo $TRAVIS_BRANCH | sed 's/\//-/g')
ARCHIVE=$FIXED_BRANCH-$(date +%Y-%m-%d_%H_%M_%S)-$TRAVIS_COMMIT.tar.bz2
echo "Creating archive $ARCHIVE"
tar -cjf $ARCHIVE -C test/itg/$PS_VERSION/screenshots .
FILESIZE=$(stat -c%s "$ARCHIVE")
echo "Finished archive (size $FILESIZE), starting Google Drive upload"
./bin/gdrive-linux-x64 upload --refresh-token 4/IVymN1aT8FO50aUkxzJarQo-ONzVOnuO0bvwvgud4m0 --parent 0B8aUS4G55NjTTjkwSFhIS3hJQnM "$ARCHIVE"
echo "Finished Google Drive upload"