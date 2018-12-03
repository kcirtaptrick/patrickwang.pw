
console.log(buildApiRequest('GET',
                '/youtube/v3/playlistItems',
                {'maxResults': '25',
                 'part': 'snippet,contentDetails',
                 'playlistId': 'PLBCF2DAC6FFB574DE'}));