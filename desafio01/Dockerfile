FROM golang:1.14

WORKDIR /go/src/app

COPY main.go .

RUN go build main.go

ENV PATH /go/src/app:$PATH

CMD ["main"]
