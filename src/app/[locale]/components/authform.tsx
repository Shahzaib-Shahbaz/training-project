import { Button, Card, Input } from "antd";

type Props = {
  Header: string;
  ButtonText: string;
};
export default function AuthForm({ Header, ButtonText }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 gap-y-3">
      <Card
        hoverable={true}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-lg border-4"
      >
        <h1 className="text-center text-2xl text-black mb-6">{Header}</h1>

        <div className="flex flex-col items-center gap-y-4">
          <Input style={{ width: "85%" }} size="middle" placeholder="Email" />
          <Input
            style={{ width: "85%" }}
            size="middle"
            placeholder="Password"
          />
          <div className="w-[85%] flex justify-end">
            <Button>{ButtonText} </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
