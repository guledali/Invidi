var myFP = fluidPlayer(
    'video-id',
    {
        vastOptions: {
        "adList" : [
        {
        "roll" : "preRoll",
        "vastTag" : "http://pulse-demo.videoplaza.tv/proxy/distributor/v2?t=cat_preroll&tt=p&rt=vast_3.0"
        },
        {
            roll: "postRoll",
            vastTag: "http://pulse-demo.videoplaza.tv/proxy/distributor/v2?t=cat_postroll&tt=po&rt=vast_3.0"
        }
        ]
        }
    }
)