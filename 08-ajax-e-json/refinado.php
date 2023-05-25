<?php
    $getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
    $post = array_map("strip_tags", $getPost);

    $action = $post['action'];
    $response = array();
    unset($post['action']);
    usleep(400000);

    switch ($action) {
        case 'create_user':
            if (in_array("", $post)) {
                $response['error'] = "É preciso informar todos os dados";
            } elseif (!filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {
                $response['error'] = "Informe um e-mail válido";
            } else {
                $user = new stdClass();
                $user->first_name = $post['first_name'];
                $user->last_name = $post['last_name'];
                $user->email = $post['email'];

                $response['first_name'] = $user->first_name;
                //$response['redirect'] = "https://localhost/GitEssentials/JQuery/08-ajax-e-json/04-refinado.php";
            }
            break;
    }

    if (!empty($response)) {
        echo json_encode($response);
    } else {
        $response['error'] = true;
        $response['errorMsg'] = "501 - Erro ao processar requisição";
        echo json_encode($response);
    }