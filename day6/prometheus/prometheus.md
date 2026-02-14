Prometheus = Collects and stores metrics (cpu , gpu , ram usage)
                + time series database also recorded (timestamp)

Grafana = visualizes that data in dashboards

But nowadays aws has its own monitoring tab 

prometheus is a cncf project now (Cloud native computing foundation - kubernetes is also a part of this)


Arch. :
    - Prometheus Server
    - Exporters
    - TSDB
    - PromQL
    - Alert Manager


    the config file is written in .yml